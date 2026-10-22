'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import type { HomeText } from '@/content/types';
import { casePath, type CaseSlug, type Locale } from '@/lib/i18n';

interface Palette {
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  onAccent: string;
}

// Ce qui ne dépend pas de la langue : couleurs, images, liens. Les textes viennent de content/home.ts.
interface ProjectBase {
  id: CaseSlug;
  title: string;
  stack: string[];
  image: { src: string; width: number; height: number };
  url: string;
  urlLabel: string;
  palette: Palette;
}

type Project = ProjectBase & HomeText['projects']['items'][CaseSlug] & { caseStudy: string };

// Chaque projet impose ses propres couleurs à toute la section quand on arrive dessus.
const bases: ProjectBase[] = [
  {
    id: 'solibox',
    title: 'SoliBox',
    stack: ['Flutter', 'Supabase', 'MQTT'],
    image: { src: '/images/solibox-app.png', width: 1348, height: 607 },
    url: 'https://soliboxgn.com',
    urlLabel: 'soliboxgn.com',
    palette: { bg: '#F88300', fg: '#1E1200', muted: '#4D2E00', accent: '#1E1200', onAccent: '#F88300' },
  },
  {
    id: 'sanni',
    title: 'Sanni',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA'],
    image: { src: '/images/sanni.jpg', width: 1600, height: 1000 },
    url: 'https://sanniya.com',
    urlLabel: 'sanniya.com',
    palette: { bg: '#1D1927', fg: '#F6F1E9', muted: '#A9A2B8', accent: '#E8650F', onAccent: '#1D1927' },
  },
  {
    id: 'lab-oratoire',
    title: 'Lab Oratoire',
    stack: ['Next.js', 'Supabase', 'PWA'],
    image: { src: '/images/lab-oratoire.png', width: 1348, height: 607 },
    url: 'https://lab-oratoiregn.com',
    urlLabel: 'lab-oratoiregn.com',
    palette: { bg: '#0E1730', fg: '#F3EFE4', muted: '#9AA4C0', accent: '#E2B33C', onAccent: '#0E1730' },
  },
];

type Labels = HomeText['projects'];

function paletteVars(p: Palette): CSSProperties {
  return {
    '--p-bg': p.bg,
    '--p-fg': p.fg,
    '--p-muted': p.muted,
    '--p-accent': p.accent,
    '--p-on-accent': p.onAccent,
  } as CSSProperties;
}

export default function Projects({ t, locale }: { t: HomeText['projects']; locale: Locale }) {
  const [active, setActive] = useState(0);
  const projects: Project[] = bases.map((b) => ({ ...b, ...t.items[b.id], caseStudy: casePath(locale, b.id) }));
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
            {t.heading}
          </h2>
          <nav aria-label={t.heading} className="flex gap-1 sm:gap-2 overflow-x-auto">
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
        <ProjectPanel key={project.id} project={project} labels={t} onEnter={() => setActive(i)} />
      ))}
    </section>
  );
}

function ProjectPanel({ project, labels, onEnter }: { project: Project; labels: Labels; onEnter: () => void }) {
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
              <dt className="text-sm text-[color:var(--p-muted)]">{labels.role}</dt>
              <dd className="mt-0.5">{project.role}</dd>
            </div>
            <div>
              <dt className="text-sm text-[color:var(--p-muted)]">{labels.result}</dt>
              <dd className="mt-0.5">{project.result}</dd>
            </div>
            <div>
              <dt className="text-sm text-[color:var(--p-muted)]">{labels.stack}</dt>
              <dd className="mt-0.5">{project.stack.join(', ')}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {(
              <Link
                href={project.caseStudy}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--p-accent)] text-[color:var(--p-on-accent)] px-6 py-3.5 font-medium transition-transform hover:-translate-y-0.5"
              >
                {labels.readCase}
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
              {labels.visit} {project.urlLabel}
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
              alt={project.imageAlt}
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
