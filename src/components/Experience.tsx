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
      title: '1ᵉʳ Prix · Catégorie Technologies & Innovations',
      organization: 'Salon des Étudiants Entrepreneurs',
      location: 'Keyce Academie / UFDG, Conakry',
      period: '16 mai 2026',
      description:
        "Premier prix remporté avec Solibox, une solution d'énergie solaire connectée pour le partage du surplus d'énergie via boîtier IoT.",
      highlight: true,
    },
    {
      icon: Briefcase,
      title: 'Développeur Mobile Kotlin',
      organization: 'NG Tech',
      location: 'Conakry, Guinée',
      period: 'Janvier – Mars 2026',
      description:
        "Stage de 3 mois — développement et intégration backend de certaines fonctionnalités d'une application mobile native Android (contenu sous confidentialité).",
    },
    {
      icon: Rocket,
      title: 'Co-fondateur & Porteur de projet',
      organization: 'Solibox',
      location: 'Conakry, Guinée',
      period: 'Depuis novembre 2025',
      description:
        "Conception, développement et pilotage d'une solution d'énergie solaire connectée : application mobile, landing page, boîtier IoT et gestion de la startup.",
    },
    {
      icon: Briefcase,
      title: 'Développeur Front-End',
      organization: 'Orange Digital Center',
      location: 'Conakry, Guinée',
      period: 'Juin – Novembre 2025',
      description:
        "Développement d'applications web modernes avec React et Next.js. Collaboration sur des projets à impact social.",
    },
    {
      icon: Briefcase,
      title: 'Ambassadeur',
      organization: 'Fata School',
      location: 'Conakry, Guinée',
      period: 'Depuis 2023',
      description:
        "Promotion de l'application mobile Fata Dev et des différents projets de Fata School.",
    },
    {
      icon: Heart,
      title: 'Formateur Bénévole',
      organization: 'Fata School',
      location: 'Conakry, Guinée',
      period: 'Depuis 2023',
      description:
        'Formation de jeunes développeurs aux technologies web modernes.',
    },
    {
      icon: GraduationCap,
      title: 'Licence en Informatique',
      organization: 'Université de Conakry',
      location: 'Conakry, Guinée',
      period: '2023 – 2027 (L3 en cours)',
      description:
        'Formation en développement logiciel, bases de données et génie logiciel.',
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
