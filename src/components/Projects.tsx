import { ExternalLink, Github, Trophy, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string | null;
  githubUrl: string | null;
  award?: string;
}

export default function Projects({ theme: _theme }: ProjectsProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects: Project[] = [
    {
      title: 'Solibox',
      description:
        "Application mobile d'énergie solaire connectée pour le suivi et le partage du surplus d'énergie via boîtier IoT.",
      technologies: ['Flutter', 'Supabase', 'MQTT'],
      image: 'images/solibox-app.png',
      liveUrl: null,
      githubUrl: 'https://github.com/Foula34/solibox_app',
      award: '1ᵉʳ Prix · Salon Étudiants Entrepreneurs 2026',
    },
    {
      title: 'Solibox Landing',
      description:
        "Landing page de la startup présentant l'application mobile et la solution d'énergie solaire connectée.",
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'images/solibox.png',
      liveUrl: 'https://soliboxgn.com',
      githubUrl: null,
    },
    {
      title: 'Le Lab-oratoire',
      description:
        "Application web pour les membres d'un club d'art oratoire : suivi de progression, défis, ressources et gamification.",
      technologies: ['Next.js', 'Supabase'],
      image: 'images/lab-oratoire.png',
      liveUrl: 'https://lab-oratoire.vercel.app',
      githubUrl: null,
    },
    {
      title: 'Secure-Sport',
      description:
        "Prototype d'une plateforme dédiée aux clubs et académies de football en Guinée pour le suivi des dossiers de leurs clients.",
      technologies: ['Next.js', 'Tailwind CSS'],
      image: 'images/secure.png',
      liveUrl: 'https://secure-sport.vercel.app',
      githubUrl: null,
    },
    {
      title: 'Opidi',
      description:
        'Plateforme type réseau social qui connecte médecins, patients et pharmaciens et facilite leurs interactions.',
      technologies: ['Next.js', 'Supabase', 'Prisma'],
      image: 'images/opidi.png',
      liveUrl: 'https://opidi-web.vercel.app',
      githubUrl: null,
    },
  ];

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
          Cinq projets récents, livrés ou en cours d'évolution. Chaque carte
          renvoie vers la démo en ligne ou le code quand il est public.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-20">
          {projects.map((project, i) => (
            <ProjectCard
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
  project: Project;
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const primaryHref = project.liveUrl ?? project.githubUrl ?? '#';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
      className="group flex flex-col"
    >
      <a
        href={primaryHref}
        target={primaryHref !== '#' ? '_blank' : undefined}
        rel={primaryHref !== '#' ? 'noopener noreferrer' : undefined}
        className="block relative overflow-hidden border border-border bg-bg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
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

          <p className="text-text-muted leading-relaxed mb-5">
            {project.description}
          </p>

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
