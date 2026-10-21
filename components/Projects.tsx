'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

interface Palette {
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  onAccent: string;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  detail: string;
  role: string;
  result: string;
  stack: string[];
  image: { src: string; width: number; height: number; alt: string };
  url: string;
  urlLabel: string;
  prize?: string;
  caseStudy?: string;
  palette: Palette;
}

// Chaque projet impose ses propres couleurs à toute la section quand on arrive dessus.
const projects: Project[] = [
  {
    id: 'solibox',
    title: 'SoliBox',
    tagline: "Les voisins s'échangent l'énergie de leurs panneaux solaires.",
    detail:
      "Un boîtier connecté et une application mobile pour suivre la production et la consommation en temps réel, contrôler le boîtier à distance et vendre le surplus.",
    role: "Cofondateur et CEO. J'ai développé l'application mobile.",
    result: 'Équipe de 5, incubée à Orange Fab Guinée, premières installations sur de vraies maisons.',
    stack: ['Flutter', 'Supabase', 'MQTT'],
    image: { src: '/images/solibox-app.png', width: 1348, height: 607, alt: "Écrans de l'application mobile SoliBox" },
    url: 'https://soliboxgn.com',
    urlLabel: 'soliboxgn.com',
    prize: '1er prix national POESAM 2026',
    caseStudy: '/projets/solibox',
    palette: { bg: '#F88300', fg: '#1E1200', muted: '#4D2E00', accent: '#1E1200', onAccent: '#F88300' },
  },
  {
    id: 'sanni',
    title: 'Sanni',
    tagline: 'Les vendeurs WhatsApp ont enfin une vraie boutique.',
    detail:
      'Ils publient leurs articles une fois, partagent un lien, et leurs clients commandent eux-mêmes, sans rien installer ni créer de compte.',
    role: "Fondateur. Je l'ai conçu, développé et mis en ligne en autonomie.",
    result: '32 vendeurs inscrits et 24 boutiques en ligne en 3 semaines, sans budget publicitaire.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA'],
    image: { src: '/images/sanni.jpg', width: 1600, height: 1000, alt: "Page d'accueil de Sanni et une boutique sur mobile" },
    url: 'https://sanniya.com',
    urlLabel: 'sanniya.com',
    palette: { bg: '#1D1927', fg: '#F6F1E9', muted: '#A9A2B8', accent: '#E8650F', onAccent: '#FFFFFF' },
  },
  {
    id: 'lab-oratoire',
    title: 'Lab Oratoire',
    tagline: 'Apprendre à parler en public en pratiquant, chaque semaine.',
    detail:
      "Une plateforme communautaire avec des défis vidéo, des retours entre membres, un classement et une analyse d'improvisation par IA.",
    role: "Créateur. J'ai conçu et développé la plateforme.",
    result: 'Plus de 40 membres, 10 défis lancés et 10 semaines de pratique continue.',
    stack: ['Next.js', 'Supabase', 'PWA'],
    image: { src: '/images/lab-oratoire.png', width: 1348, height: 607, alt: "Page d'accueil de Lab Oratoire" },
    url: 'https://lab-oratoiregn.com',
    urlLabel: 'lab-oratoiregn.com',
    palette: { bg: '#0E1730', fg: '#F3EFE4', muted: '#9AA4C0', accent: '#E2B33C', onAccent: '#0E1730' },
  },
];

function paletteVars(p: Palette): CSSProperties {
  return {
    '--p-bg': p.bg,
    '--p-fg': p.fg,
    '--p-muted': p.muted,
    '--p-accent': p.accent,
    '--p-on-accent': p.onAccent,
  } as CSSProperties;
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const palette = projects[active].palette;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      style={paletteVars(palette)}
      className="project-stage relative bg-[var(--p-bg)] text-[color:var(--p-fg)]"
    >
      {/* Navigation collante : montre le projet en cours et permet de sauter à un autre. */}
      <div className="sticky top-16 lg:top-20 z-30 bg-[var(--p-bg)] project-stage">
        <div className="max-w-content mx-auto px-6 flex items-center justify-between gap-6 h-14 p-line border-b">
          <h2 id="projects-title" className="sr-only sm:not-sr-only text-sm font-medium">
            Projets
          </h2>
          <nav aria-label="Projets" className="flex gap-1 sm:gap-2 overflow-x-auto">
            {projects.map((project, i) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                aria-current={i === active ? 'true' : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                  i === active
                    ? 'bg-[var(--p-fg)] text-[color:var(--p-bg)]'
                    : 'text-[color:var(--p-muted)] hover:text-[color:var(--p-fg)]'
                }`}
              >
                {project.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {projects.map((project, i) => (
        <ProjectPanel key={project.id} project={project} onEnter={() => setActive(i)} />
      ))}
    </section>
  );
}

function ProjectPanel({ project, onEnter }: { project: Project; onEnter: () => void }) {
  const reduce = useReducedMotion() ?? false;
  // Le projet devient actif quand il franchit le milieu de l'écran.
  const { ref } = useInView({
    rootMargin: '-50% 0px -50% 0px',
    onChange: (inView) => {
      if (inView) onEnter();
    },
  });

  return (
    <article
      ref={ref}
      id={project.id}
      className="scroll-mt-[7.5rem] lg:scroll-mt-[8.5rem] min-h-[calc(100svh-7.5rem)] lg:min-h-[calc(100svh-8.5rem)] flex items-center px-6 py-14 lg:py-12"
    >
      <div className="max-w-content mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          {project.prize && (
            <p className="inline-block mb-5 rounded-full border p-line-strong px-3 py-1 text-sm font-medium">
              {project.prize}
            </p>
          )}
          <h3 className="font-unbounded font-bold tracking-[-0.03em] leading-[0.95] text-[clamp(2.4rem,5vw,4rem)]">
            {project.title}
          </h3>
          <p className="mt-5 text-xl lg:text-2xl leading-snug font-medium tracking-tight">{project.tagline}</p>
          <p className="mt-3 text-[color:var(--p-muted)] leading-relaxed">{project.detail}</p>

          <dl className="mt-6 space-y-3">
            <div>
              <dt className="text-sm text-[color:var(--p-muted)]">Mon rôle</dt>
              <dd className="mt-0.5">{project.role}</dd>
            </div>
            <div>
              <dt className="text-sm text-[color:var(--p-muted)]">Résultat</dt>
              <dd className="mt-0.5">{project.result}</dd>
            </div>
            <div>
              <dt className="text-sm text-[color:var(--p-muted)]">Technologies</dt>
              <dd className="mt-0.5">{project.stack.join(', ')}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.caseStudy && (
              <Link
                href={project.caseStudy}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--p-accent)] text-[color:var(--p-on-accent)] px-6 py-3.5 font-medium transition-transform hover:-translate-y-0.5"
              >
                Lire l&apos;étude de cas
              </Link>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.caseStudy
                  ? 'inline-flex items-center gap-2 rounded-full border p-line-strong px-6 py-3.5 font-medium transition-transform hover:-translate-y-0.5'
                  : 'inline-flex items-center gap-2 rounded-full bg-[var(--p-accent)] text-[color:var(--p-on-accent)] px-6 py-3.5 font-medium transition-transform hover:-translate-y-0.5'
              }
            >
              Visiter {project.urlLabel}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <motion.div
          className="lg:col-span-7 order-1 lg:order-2"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="block overflow-hidden rounded-2xl ring-1 p-ring shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="w-full aspect-[16/10] object-cover object-top"
            />
          </a>
        </motion.div>
      </div>
    </article>
  );
}
