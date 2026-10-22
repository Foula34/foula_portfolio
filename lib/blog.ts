import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

// Les articles sont des fichiers Markdown dans content/blog/ :
//   ---
//   title: Titre de l'article
//   description: Une phrase pour Google et les aperçus de lien
//   date: 2026-10-22
//   ---
//   Le texte, en Markdown.
// Le nom du fichier donne l'adresse : mon-article.md → /blog/mon-article.
// Pour publier un nouvel article, il suffit d'ajouter un fichier.

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  html: string;
}

// Typographie française : une espace fine insécable avant « : ; ? ! », pour que le signe
// ne se retrouve jamais seul en début de ligne.
function frenchSpacing(text: string) {
  return text.replace(/ ([:;?!])/g, '\u202f$1');
}

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`En-tête manquant dans content/blog/${file}`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  for (const key of ['title', 'description', 'date']) {
    if (!meta[key]) throw new Error(`Champ « ${key} » manquant dans content/blog/${file}`);
  }
  const body = frenchSpacing(match[2].trim());
  const words = body.split(/\s+/).length;
  return {
    slug: file.replace(/\.md$/, ''),
    title: frenchSpacing(meta.title),
    description: meta.description,
    date: meta.date,
    // Environ 220 mots par minute en lecture à l'écran.
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(body, { async: false }),
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
