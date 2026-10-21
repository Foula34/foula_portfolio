'use client';

import { ExternalLink, Trophy, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface Project {
  title: string;
  role: string;
  description: string;
  result: string;
  technologies: string[];
  image?: string;
  liveUrl: string | null;
  githubUrl: string | null;
  award?: string;
}

const projects: Project[] = [
  {
    title: 'SoliBox',
    role: 'Cofondateur & CEO · application mobile',
    description:
      "Boîtier connecté qui permet aux foyers équipés de panneaux solaires de vendre leur surplus d'énergie à leurs voisins. J'ai développé l'application mobile : suivi en temps réel de la production et de la consommation, contrôle à distance du boîtier.",
    result:
      'Équipe de 5, incubée à Orange Fab Guinée, du prototype aux premières installations sur de vraies maisons.',
    technologies: ['Flutter', 'Supabase', 'MQTT'],
    image: '/images/solibox-app.png',
    liveUrl: 'https://soliboxgn.com',
    githubUrl: null,
    award: '1ᵉʳ prix national POESAM 2026',
  },
  {
    title: 'Sanni',
    role: 'Fondateur & développeur',
    description:
      'Boutique en ligne pour les commerçants qui vendent sur WhatsApp et Facebook : ils publient leurs articles une fois, partagent un lien, et leurs clients commandent eux-mêmes, sans rien installer.',
    result:
      '32 vendeurs inscrits et 24 boutiques en ligne en 3 semaines, sans budget publicitaire.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA'],
    liveUrl: 'https://sanniya.com',
    githubUrl: null,
  },
  {
    title: 'Lab Oratoire',
    role: 'Créateur & développeur',
    description:
      "Plateforme communautaire pour pratiquer la prise de parole en public : défis vidéo, retours entre membres, classement et analyse d'improvisation par IA.",
    result:
      'Plus de 40 membres, 10 défis lancés et 10 semaines de pratique continue.',
    technologies: ['Next.js', 'Supabase', 'PWA'],
    image: '/images/lab-oratoire.png',
    liveUrl: 'https://lab-oratoiregn.com',
    githubUrl: null,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 lg:py-32 px-6 bg-bg-alt">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-text-muted mb-6 tracking-wide"
        >
          <span className="rule mr-3" /> 03 — Projets
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-text mb-4"
        >
          Sélection de <span className="text-accent">réalisations</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base text-text-muted mb-16 max-w-prose"
        >
          Trois produits que je conçois et développe, de l’idée jusqu’au
          déploiement, avec de vrais utilisateurs.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-20">
          {projects.map((project, i) => (
            <ProjectCard
              featured={i === 0}
              key={project.title}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border text-center"
        >
          <a
            href="https://github.com/Foula34"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-text hover:text-accent border-b border-text/30 hover:border-accent pb-1 transition-colors duration-200"
          >
            <Github size={18} />
            Voir tous mes projets sur GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  featured?: boolean;
  project: Project;
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView, featured }: ProjectCardProps) {
  const primaryHref = project.liveUrl ?? project.githubUrl ?? '#';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
      className={`group flex flex-col ${featured ? 'md:col-span-2' : ''}`}
    >
      <a
        href={primaryHref}
        target={primaryHref !== '#' ? '_blank' : undefined}
        rel={primaryHref !== '#' ? 'noopener noreferrer' : undefined}
        className="block relative overflow-hidden border border-border bg-bg"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Aperçu de ${project.title}`}
            width={1348}
            height={607}
            sizes={featured ? '(min-width: 1152px) 1104px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
            className={`w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
              featured ? 'aspect-[16/10] md:aspect-[21/9]' : 'aspect-[16/10]'
            }`}
          />
        ) : (
          <div className="w-full aspect-[16/10] flex flex-col items-center justify-center gap-3 bg-accent-soft">
            <span className="font-display text-5xl lg:text-6xl text-text">
              {project.title}
            </span>
            {project.liveUrl && (
              <span className="font-mono text-xs text-text-muted">
                {project.liveUrl.replace('https://', '')}
              </span>
            )}
          </div>
        )}
        {project.award && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-accent text-bg px-3 py-1.5 font-mono text-[11px] tracking-wide">
            <Trophy size={12} strokeWidth={2} />
            {project.award}
          </div>
        )}
      </a>

      <div className="mt-6 flex items-start gap-4">
        <span className="font-mono text-xs text-text-muted pt-1.5">
          0{index + 1}
        </span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display text-2xl lg:text-3xl text-text">
              {project.title}
            </h3>
            <a
              href={primaryHref}
              target={primaryHref !== '#' ? '_blank' : undefined}
              rel={primaryHref !== '#' ? 'noopener noreferrer' : undefined}
              aria-label={`Ouvrir ${project.title}`}
              className="text-text-muted hover:text-accent transition-colors duration-200 pt-2"
            >
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <p className="font-mono text-xs text-accent tracking-wide mb-3">
            {project.role}
          </p>

          <p className="text-text-muted leading-relaxed mb-3">
            {project.description}
          </p>

          <p className="text-text leading-relaxed mb-5">{project.result}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text hover:text-accent transition-colors duration-200"
              >
                <ExternalLink size={14} />
                Voir le site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text hover:text-accent transition-colors duration-200"
              >
                <Github size={14} />
                Code source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
