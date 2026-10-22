'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { HomeText } from '@/content/types';
import { fill } from '@/lib/format';

type Chapter = HomeText['story']['chapters'][number];

export default function Story({ t }: { t: HomeText['story'] }) {
  const chapters = t.chapters;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() ?? false;
  const listRef = useRef<HTMLOListElement>(null);

  // La ligne de progression suit le défilement à travers les chapitres.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const chapter = chapters[active];

  const yearDisplay = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={chapter.year}
        className="block"
        initial={reduce ? false : { y: '60%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduce ? undefined : { y: '-60%', opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {chapter.year}
      </motion.span>
    </AnimatePresence>
  );

  const progressBar = (
    <div className="h-1 w-full rounded-full bg-border overflow-hidden" aria-hidden="true">
      <motion.div className="h-full bg-accent origin-left" style={{ scaleX: reduce ? 1 : progress }} />
    </div>
  );

  return (
    <section id="story" aria-labelledby="story-title" className="relative px-6 pt-24 lg:pt-32 pb-24 lg:pb-40 bg-bg-alt">
      <div className="max-w-content mx-auto">
        <h2
          id="story-title"
          className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-text text-[clamp(2rem,4vw,3.25rem)] max-w-2xl"
        >
          {t.heading}
        </h2>
        <p className="mt-5 text-lg text-text-muted max-w-xl">
          {t.intro}
        </p>

        {/* Mobile : l'année et la progression restent visibles en haut pendant la lecture. */}
        <div className="lg:hidden sticky top-16 z-20 -mx-6 px-6 pt-4 pb-3 mt-10 bg-bg-alt">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-unbounded font-extrabold text-3xl text-text overflow-hidden" aria-live="polite">
              {yearDisplay}
            </p>
            <p className="text-sm text-text-muted">
              {fill(t.chapterOf, { n: active + 1, total: chapters.length })}
            </p>
          </div>
          <div className="mt-3">{progressBar}</div>
        </div>

        <div className="mt-6 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Ordinateur : grande année fixe pendant que les chapitres défilent. */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-[calc(50vh-6rem)]">
              <p
                className={`font-unbounded font-extrabold tracking-[-0.04em] leading-none text-text overflow-hidden pb-2 ${
                  // Une année (4 chiffres) en très grand ; un mot (« Aujourd'hui », « Today ») plus petit pour tenir.
                  /^\d{4}$/.test(chapter.year) ? 'text-[clamp(4rem,8vw,7.5rem)]' : 'text-[clamp(2.25rem,4.2vw,3.75rem)]'
                }`}
                aria-live="polite"
              >
                {yearDisplay}
              </p>
              <p className="mt-6 text-text-muted">
                {fill(t.chapterOf, { n: active + 1, total: chapters.length })}
              </p>
              <div className="mt-3 max-w-xs">{progressBar}</div>
            </div>
          </div>

          <ol ref={listRef} className="lg:col-span-7">
            {chapters.map((c, i) => (
              <ChapterItem
                key={c.title}
                chapter={c}
                isActive={i === active}
                isLast={i === chapters.length - 1}
                contactCta={t.contactCta}
                reduce={reduce}
                onEnter={() => setActive(i)}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ChapterItem({
  chapter,
  isActive,
  isLast,
  contactCta,
  reduce,
  onEnter,
}: {
  chapter: Chapter;
  isActive: boolean;
  isLast: boolean;
  contactCta: string;
  reduce: boolean;
  onEnter: () => void;
}) {
  // Le chapitre devient actif quand il passe au milieu de l'écran.
  const { ref } = useInView({
    rootMargin: '-45% 0px -45% 0px',
    onChange: (inView) => {
      if (inView) onEnter();
    },
  });

  // Le chapitre actif ressort (texte plein, barre de couleur) ; les autres passent en gris,
  // qui reste lisible : un contraste suffisant, même sur un téléphone en plein soleil.
  const active = reduce || isActive;

  return (
    <li
      ref={ref}
      className={`relative py-10 lg:py-12 lg:min-h-[40vh] flex flex-col justify-center pl-5 sm:pl-6 border-l-2 transition-colors duration-500 ${
        active ? 'border-accent' : 'border-transparent'
      }`}
    >
      <p className="lg:hidden text-sm text-text-muted mb-2">{chapter.year}</p>
      <h3
        className={`font-unbounded font-semibold tracking-[-0.02em] text-2xl lg:text-3xl leading-tight transition-colors duration-500 ${
          active ? 'text-text' : 'text-text-muted'
        }`}
      >
        {chapter.title}
      </h3>
      <p
        className={`mt-4 text-lg leading-relaxed max-w-xl transition-colors duration-500 ${
          active ? 'text-text' : 'text-text-muted'
        }`}
      >
        {chapter.text}
      </p>
      {chapter.images && (
        <div className={`mt-8 grid gap-3 max-w-xl ${chapter.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {chapter.images.map((img, i) => {
            const count = chapter.images!.length;
            // Avec trois photos, la première prend toute la largeur ; les autres vont par deux.
            const wide = count === 1 || (count === 3 && i === 0);
            return (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes={wide ? '(min-width: 1024px) 36rem, 100vw' : '(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw'}
                className={`w-full rounded-2xl ${wide ? 'sm:col-span-2' : 'aspect-[3/2] object-cover'} ${
                  // Une photo en hauteur seule reste plus étroite, pour ne pas occuper tout l'écran.
                  count === 1 && img.height > img.width ? 'max-w-sm' : ''
                }`}
              />
            );
          })}
        </div>
      )}
      {isLast && (
        <a
          href="#contact"
          className="mt-8 self-start inline-flex items-center bg-accent hover:bg-accent-hover text-bg px-6 py-3.5 rounded-full font-medium transition-colors"
        >
          {contactCta}
        </a>
      )}
    </li>
  );
}
