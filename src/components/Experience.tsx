import {
  Briefcase,
  GraduationCap,
  Trophy,
  Heart,
  Rocket,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

interface Item {
  icon: LucideIcon;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlight?: boolean;
}

export default function Experience({ theme: _theme }: ExperienceProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const items: Item[] = [
    {
      icon: Trophy,
      title: 'Trois premiers prix avec SoliBox',
      organization: 'POESAM · SADEN Fulbright · Salon des Étudiants Entrepreneurs',
      location: 'Guinée',
      period: '2026',
      description:
        "1er prix national POESAM 2026, 1er prix du SADEN Fulbright Innovation Challenge 2026 et 1er prix du Salon des Étudiants Entrepreneurs 2026.",
      highlight: true,
    },
    {
      icon: Heart,
      title: 'Responsable Masterclass & Formation',
      organization: 'FATA Guinée',
      location: 'Conakry, Guinée',
      period: "2026 – aujourd'hui · bénévole depuis 07/2024",
      description:
        "École de programmation pour la jeunesse africaine. Supervision des masterclass et des formations, et formateur moi-même : HTML, CSS, technologies du web et initiation au numérique.",
    },
    {
      icon: Briefcase,
      title: 'Développeur mobile',
      organization: 'NG Tech',
      location: 'Conakry, Guinée',
      period: 'En cours',
      description:
        "Stage, puis poste actuel. Développement d'applications mobiles en Kotlin (Android) et React Native / Expo.",
    },
    {
      icon: Rocket,
      title: 'Cofondateur & CEO',
      organization: 'SoliBox',
      location: 'Conakry, Guinée',
      period: "2025 – aujourd'hui",
      description:
        "Startup IoT de partage d'énergie solaire entre voisins, incubée à Orange Fab Guinée. Direction d'une équipe de 5 et développement de l'application mobile.",
    },
    {
      icon: Briefcase,
      title: 'Stagiaire développeur',
      organization: 'Orange Guinée · Orange Digital Center',
      location: 'Conakry, Guinée',
      period: '07/2025 – 11/2025',
      description:
        "Orange Summer Challenge 2025 : conception et développement d'une application web et mobile en équipe pluridisciplinaire, coordination technique, tests et présentation finale. 2e place du challenge.",
    },
    {
      icon: GraduationCap,
      title: 'Formateur en informatique de base',
      organization: 'Asis tech',
      location: 'Conakry, Guinée',
      period: '2025 · plus de 6 mois, en alternance',
      description:
        "Plus de 30 apprenants formés en bureautique (Word, Excel) et en initiation à l'informatique et à Internet.",
    },
    {
      icon: GraduationCap,
      title: 'Licence Génie informatique, 4e année',
      organization: 'Université Gamal Abdel Nasser de Conakry',
      location: 'Conakry, Guinée',
      period: '2023 – en cours',
      description: 'Parcours génie logiciel.',
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 bg-bg">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-text-muted mb-6 tracking-wide"
        >
          <span className="rule mr-3" /> 04 — Parcours
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-text mb-4"
        >
          Étapes & <span className="text-accent">expériences</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base text-text-muted mb-16 max-w-prose"
        >
          De la plus récente à la plus ancienne — postes, distinctions, études et
          engagements.
        </motion.p>

        <div className="relative">
          {/* Vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-border"
          />

          <ol className="space-y-12 lg:space-y-14">
            {items.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                inView={inView}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: Item;
  index: number;
  inView: boolean;
}

function TimelineItem({ item, index, inView }: TimelineItemProps) {
  const Icon = item.icon;
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
      className="relative pl-12 sm:pl-16"
    >
      <div
        className={`absolute left-0 top-1 flex items-center justify-center w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] rounded-full border ${
          item.highlight
            ? 'bg-accent border-accent text-bg'
            : 'bg-bg border-border text-text-muted'
        }`}
      >
        <Icon size={item.highlight ? 14 : 13} strokeWidth={1.75} />
      </div>

      <div className="font-mono text-xs text-text-muted mb-1.5 tracking-wide">
        {item.period}
      </div>
      <h3 className="font-display text-xl lg:text-2xl text-text mb-1">
        {item.title}
      </h3>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted mb-3">
        <span className="font-medium text-text">{item.organization}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={12} strokeWidth={1.75} />
          {item.location}
        </span>
      </div>
      <p className="text-text-muted leading-relaxed max-w-prose">
        {item.description}
      </p>
    </motion.li>
  );
}
