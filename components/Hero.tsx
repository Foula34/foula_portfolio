import Image from 'next/image';
import { Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import type { HomeText } from '@/content/types';

const socials = [
  { icon: GithubIcon, href: 'https://github.com/Foula34', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/foula-fofana-1769782a5', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fofanafoula70@gmail.com', label: 'Email' },
];

// Le nom se dessine lettre par lettre : c'est le seul mouvement d'entrée de la page.
// Animation en CSS pur (classe .rise) : aucun JavaScript à charger avant qu'elle démarre.
// Les lettres restent du vrai texte : Google, les lecteurs d'écran et les aperçus lisent « Foula Fofana », une seule fois.
function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      {word.split('').map((letter, i) => (
        <span key={i} className="rise inline-block" style={{ animationDelay: `${delay + i * 0.045}s` }}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ t }: { t: HomeText['hero'] }) {
  return (
    <section id="home" className="relative px-6 pt-28 pb-12 lg:pt-36 lg:pb-16">
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="font-unbounded font-extrabold uppercase text-text leading-[0.88] tracking-[-0.04em] text-[clamp(2.9rem,15vw,4.5rem)] sm:text-[clamp(4.5rem,11vw,6.25rem)] lg:text-[clamp(5rem,8.4vw,7.75rem)]">
              <AnimatedWord word="Foula" delay={0.1} />{' '}
              <AnimatedWord word="Fofana" delay={0.3} />
            </h1>

            <div style={{ animationDelay: '0.9s' }} className="fade-in mt-10 max-w-[34rem]">
              <p className="text-2xl sm:text-3xl leading-snug text-text font-medium tracking-tight">
                {t.tagline}
              </p>
              <p className="mt-4 text-lg text-text-muted leading-relaxed">
                {t.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center bg-accent hover:bg-accent-hover text-bg px-6 py-3.5 rounded-full font-medium transition-colors"
                >
                  {t.seeProjects}
                </a>
                <a
                  href="/documents/Foula_Fofana_CV_2026.pdf"
                  download="Foula_Fofana_CV_2026.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-text/20 hover:border-text text-text font-medium transition-colors"
                >
                  <Download size={16} />
                  {t.downloadCv}
                </a>
                <div className="flex items-center gap-1 ml-1">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="p-2.5 text-text-muted hover:text-text transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-none mx-auto overflow-hidden rounded-2xl">
              <Image
                src="/images/foula.jpg"
                alt={t.photoAlt}
                width={960}
                height={1280}
                priority
                sizes="(min-width: 1024px) 30vw, 384px"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>

        <ul style={{ animationDelay: '1.1s' }} className="fade-in mt-16 lg:mt-20 grid sm:grid-cols-3 border-t border-border"
          aria-label={t.prizesLabel}
        >
          {t.prizes.map((prize) => (
            <li key={prize.name} className="py-5 sm:pb-0 sm:pr-6 border-b sm:border-b-0 border-border last:border-b-0">
              <p className="font-unbounded font-semibold text-text text-base leading-tight">{prize.name}</p>
              <p className="mt-1 text-sm text-text-muted">{prize.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
