'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const prizes = [
  { name: 'POESAM 2026', detail: '1er prix national' },
  { name: 'SADEN Fulbright 2026', detail: '1er prix, Innovation Challenge' },
  { name: 'Salon des Étudiants Entrepreneurs 2026', detail: '1er prix, catégorie Numérique' },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/Foula34', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/foula-fofana-1769782a5', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fofanafoula70@gmail.com', label: 'Email' },
];

// Le nom se dessine lettre par lettre : c'est le seul mouvement d'entrée de la page.
function AnimatedWord({ word, delay, reduce }: { word: string; delay: number; reduce: boolean }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]" aria-hidden="true">
      {word.split('').map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={reduce ? false : { y: '105%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: delay + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion() ?? false;
  const after = (d: number) => (reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: d } });

  return (
    <section id="home" className="relative px-6 pt-28 pb-12 lg:pt-36 lg:pb-16">
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="font-unbounded font-extrabold uppercase text-text leading-[0.88] tracking-[-0.04em] text-[clamp(2.9rem,15vw,4.5rem)] sm:text-[clamp(4.5rem,11vw,6.25rem)] lg:text-[clamp(5rem,8.4vw,7.75rem)]">
              <span className="sr-only">Foula Fofana</span>
              <AnimatedWord word="Foula" delay={0.1} reduce={reduce} />
              <AnimatedWord word="Fofana" delay={0.3} reduce={reduce} />
            </h1>

            <motion.div {...after(0.9)} className="mt-10 max-w-[34rem]">
              <p className="text-2xl sm:text-3xl leading-snug text-text font-medium tracking-tight">
                Je construis des produits que de vrais gens utilisent, à Conakry.
              </p>
              <p className="mt-4 text-lg text-text-muted leading-relaxed">
                Développeur web et mobile, cofondateur et CEO de SoliBox, créateur de Sanni et de Lab Oratoire.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-full font-medium transition-colors"
                >
                  Voir mes projets
                </a>
                <a
                  href="/documents/Foula_Fofana_CV_2026.pdf"
                  download="Foula_Fofana_CV_2026.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-text/20 hover:border-text text-text font-medium transition-colors"
                >
                  <Download size={16} />
                  Télécharger mon CV
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
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
              className="relative max-w-xs sm:max-w-sm lg:max-w-none mx-auto overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/foula.jpg"
                alt="Foula Fofana tenant son attestation 1000 TechLeaders"
                width={960}
                height={1280}
                priority
                sizes="(min-width: 1024px) 30vw, 384px"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.p {...after(1.2)} className="mt-4 flex items-center gap-2 text-sm text-text-muted">
              <span className="h-2 w-2 rounded-full bg-[#25D366] shrink-0" aria-hidden="true" />
              En ce moment, je fais grandir Sanni.
            </motion.p>
          </div>
        </div>

        <motion.ul
          {...after(1.1)}
          className="mt-16 lg:mt-20 grid sm:grid-cols-3 border-t border-border"
          aria-label="Distinctions"
        >
          {prizes.map((prize) => (
            <li key={prize.name} className="py-5 sm:pb-0 sm:pr-6 border-b sm:border-b-0 border-border last:border-b-0">
              <p className="font-unbounded font-semibold text-text text-base leading-tight">{prize.name}</p>
              <p className="mt-1 text-sm text-text-muted">{prize.detail}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
