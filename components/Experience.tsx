'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface Entry {
  period: string;
  title: string;
  org: string;
  text: string;
}

const tabs: { id: string; label: string; entries: Entry[] }[] = [
  {
    id: 'experiences',
    label: 'Expériences',
    entries: [
      {
        period: 'En cours',
        title: 'Développeur mobile',
        org: 'NG Tech, Conakry',
        text: "Stage, puis poste actuel. Développement d'applications mobiles en Kotlin (Android) et React Native / Expo.",
      },
      {
        period: "2025 – aujourd'hui",
        title: 'Cofondateur & CEO',
        org: 'SoliBox, incubée à Orange Fab Guinée',
        text: "Direction d'une équipe de 5 et développement de l'application mobile, du prototype aux premières installations.",
      },
      {
        period: '07/2025 – 11/2025',
        title: 'Stagiaire développeur',
        org: 'Orange Guinée, Orange Digital Center',
        text: "Orange Summer Challenge 2025 : application web et mobile en équipe, coordination technique, tests et présentation finale. 2e place.",
      },
    ],
  },
  {
    id: 'engagements',
    label: 'Engagements',
    entries: [
      {
        period: "2026 – aujourd'hui",
        title: 'Responsable Masterclass & Formation',
        org: 'FATA Guinée, bénévole depuis 07/2024',
        text: 'Supervision des masterclass et des formations, et formateur sur HTML, CSS, technologies du web et initiation au numérique.',
      },
      {
        period: '2025, plus de 6 mois',
        title: 'Formateur en informatique de base',
        org: 'Asis tech, en alternance',
        text: "Plus de 30 apprenants formés en bureautique et en initiation à l'informatique et à Internet.",
      },
    ],
  },
  {
    id: 'formation',
    label: 'Formation',
    entries: [
      {
        period: '2023 – en cours',
        title: 'Licence Génie informatique, 4e année',
        org: 'Université Gamal Abdel Nasser de Conakry',
        text: 'Parcours génie logiciel.',
      },
      {
        period: 'Certification',
        title: 'Développeur Flutter',
        org: 'Nimba Hub',
        text: '',
      },
      {
        period: '2023',
        title: 'Baccalauréat Sciences mathématiques',
        org: 'Ducal, Mamou, mention Bien',
        text: '',
      },
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() ?? false;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Flèches gauche/droite pour passer d'un onglet à l'autre (comportement attendu d'une liste d'onglets).
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const tab = tabs[active];

  return (
    <section id="experience" aria-labelledby="experience-title" className="px-6 py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-content mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2
            id="experience-title"
            className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-text text-[clamp(2rem,4vw,3.25rem)]"
          >
            Parcours
          </h2>
          <div role="tablist" aria-label="Parcours" onKeyDown={onKeyDown} className="mt-8 flex flex-wrap lg:flex-col lg:items-start gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${t.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`text-left rounded-full lg:rounded-xl px-4 py-2 lg:py-3 transition-colors ${
                  i === active ? 'bg-text text-bg' : 'text-text-muted hover:text-text'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ol
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              initial={reduce ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-border border-y border-border"
            >
              {tab.entries.map((entry) => (
                <li key={entry.title} className="py-7 grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-8">
                  <p className="text-sm text-text-muted pt-1">{entry.period}</p>
                  <div>
                    <h3 className="text-xl font-semibold text-text">{entry.title}</h3>
                    <p className="mt-1 text-text">{entry.org}</p>
                    {entry.text && <p className="mt-2 text-text-muted leading-relaxed">{entry.text}</p>}
                  </div>
                </li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
