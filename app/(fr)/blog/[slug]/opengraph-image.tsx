import fs from 'node:fs';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { getPost, getPosts } from '@/lib/blog';

// Image d'aperçu (1200 × 630) affichée quand le lien est partagé sur LinkedIn, Facebook ou WhatsApp.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Article de Foula Fofana';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

const fontDir = path.join(process.cwd(), 'node_modules', 'geist', 'dist', 'fonts', 'geist-sans');

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  // Espace insécable entre les deux derniers mots : pas de mot seul sur la dernière ligne.
  // L'espace fine (avant « : ») n'existe pas dans Geist : on prend l'espace insécable classique.
  // Et une espace insécable entre les deux derniers mots : pas de mot seul sur la dernière ligne.
  const title = (post?.title ?? 'Blog de Foula Fofana')
    .replace(/\u202f/g, '\u00a0')
    .replace(/ (\S+)$/, '\u00a0$1');
  const black = fs.readFileSync(path.join(fontDir, 'Geist-Black.ttf'));
  const medium = fs.readFileSync(path.join(fontDir, 'Geist-Medium.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#DC2F02',
          color: '#FFFFFF',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 500, opacity: 0.9 }}>Blog</div>
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 60 ? 64 : 76,
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 30, fontWeight: 500 }}>
          <span>Foula Fofana</span>
          <span style={{ opacity: 0.9 }}>Développeur et entrepreneur à Conakry</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: black, weight: 900, style: 'normal' },
        { name: 'Geist', data: medium, weight: 500, style: 'normal' },
      ],
    }
  );
}
