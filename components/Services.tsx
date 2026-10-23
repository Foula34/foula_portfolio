'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import {
  siCss, siFirebase, siFlutter, siHtml5, siJavascript, siMqtt, siNextdotjs,
  siSupabase, siTailwindcss, siTypescript, type SimpleIcon,
} from 'simple-icons';
import type { HomeText } from '@/content/types';
import { casePath, homePath, type Locale } from '@/lib/i18n';

type ServiceId = keyof HomeText['services']['items'];

// Chaque offre reprend les couleurs du projet qui la prouve : Sanni pour le web,
// SoliBox pour le mobile, et la couleur du site pour la formation.
const services: {
  id: ServiceId;
  tools: SimpleIcon[];
  href: (locale: Locale) => string;
  colors: { bg: string; fg: string; muted: string };
}[] = [
  {
    id: 'web',
    tools: [siNextdotjs, siTypescript, siSupabase, siTailwindcss],
    href: (l) => casePath(l, 'sanni'),
    colors: { bg: '#1D1927', fg: '#F6F1E9', muted: '#C9C2D6' },
  },
  {
    id: 'mobile',
    tools: [siFlutter, siFirebase, siSupabase, siMqtt],
    href: (l) => casePath(l, 'solibox'),
    colors: { bg: '#F88300', fg: '#1E1200', muted: '#3D2400' },
  },
  {
    id: 'training',
    tools: [siHtml5, siCss, siJavascript, siFlutter],
    href: (l) => `${homePath(l)}#story`,
    colors: { bg: '#C42A02', fg: '#FFFFFF', muted: '#FFFFFF' },
  },
];

// Apparition en CSS (classe .is-in) : sans JavaScript, tout reste visible ; le masquage
// initial ne s'applique que si la classe .js est posée sur <html> (voir RootDocument).
function Row({ index, style, children }: { index: number; style: React.CSSProperties; children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -12% 0px' });
  return (
    <li
      ref={ref}
      className={`service-row group relative ${inView ? 'is-in' : ''}`}
      style={{ ...style, '--i': index } as React.CSSProperties}
    >
      {children}
    </li>
  );
}

export default function Services({ t, locale }: { t: HomeText['services']; locale: Locale }) {

  return (
    <section id="services" aria-labelledby="services-title" className="px-6 pb-24 lg:pb-32 bg-bg">
      <div className="max-w-content mx-auto border-t border-border pt-16 lg:pt-24">
        <h2
          id="services-title"
          className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-text text-[clamp(2rem,4vw,3.25rem)] max-w-2xl"
        >
          {t.heading}
        </h2>
        <p className="mt-5 text-lg text-text-muted max-w-xl">{t.intro}</p>

        <ol className="mt-12 lg:mt-16">
          {services.map((service, i) => {
            const item = t.items[service.id];
            return (
              <Row
                key={service.id}
                index={i}
                style={
                  {
                    '--s-bg': service.colors.bg,
                    '--s-fg': service.colors.fg,
                    '--s-muted': service.colors.muted,
                  } as React.CSSProperties
                }
              >
                {/* Le trait du haut se dessine de gauche à droite à l'arrivée de la ligne. */}
                <span aria-hidden="true" className="service-line absolute left-0 right-0 top-0 h-px bg-border origin-left" />
                {/* Au survol (ou au focus clavier), la couleur du projet remplit la ligne. */}
                <span aria-hidden="true" className="service-fill absolute inset-0 rounded-2xl origin-left" />

                <div className="relative grid lg:grid-cols-12 gap-4 lg:gap-8 items-start px-1 lg:px-6 py-9 lg:py-11">
                  <span className="service-muted lg:col-span-1 font-unbounded text-sm text-text-muted pt-1 lg:pt-3 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="service-fg lg:col-span-5 font-unbounded font-semibold tracking-[-0.02em] leading-[1.05] text-text text-[clamp(1.75rem,3.4vw,2.75rem)]">
                    {item.title}
                  </h3>
                  <div className="lg:col-span-5">
                    <p className="service-muted text-lg leading-relaxed text-text-muted">{item.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label="Outils">
                      {service.tools.map((tool) => (
                        <li key={tool.slug} className="service-fg inline-flex items-center gap-1.5 text-sm text-text">
                          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">
                            <path d={tool.path} fill="currentColor" />
                          </svg>
                          {tool.title}
                        </li>
                      ))}
                    </ul>
                    {/* Le lien couvre toute la ligne : on peut cliquer n'importe où. */}
                    <Link
                      href={service.href(locale)}
                      className="service-fg mt-6 inline-flex items-center gap-1.5 font-medium text-text underline-offset-4 group-hover:underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                    >
                      {item.proof}
                    </Link>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="service-fg hidden lg:block lg:col-span-1 justify-self-end mt-2 text-text transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={32}
                  />
                </div>
              </Row>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
