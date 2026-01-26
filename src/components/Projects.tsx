import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface ProjectsProps {
  theme: 'light' | 'dark';
}

export default function Projects({ theme }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'EduWay',
      description:
        "Plateforme d'orientation universitaire pour aider les étudiants guinéens à découvrir les universités et filières.",
      technologies: ['Next.js', 'Spring Boot', 'Firebase'],
      image: 'images/Capture.PNG',
      link: 'https://eduway-three.vercel.app/',
      github: 'https://github.com/votre-username/eduway',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    },
    {
      title: 'Walima',
      description:
        'Mise en relation prestataires / clients pour simplifier la recherche et la réservation de services.',
      technologies: ['Next.js', 'Supabase'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      link: 'https://github.com/votre-username/walima',
      github: 'https://github.com/votre-username/walima',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
    },
    {
      title: 'Solibox',
      description:
        "Application mobile d'énergie solaire connectée pour le suivi et partage du surplus d'énergie via boîtier IoT.",
      technologies: ['Flutter', 'Supabase', 'MQTT'],
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop',
      link: 'https://github.com/Foula34/solibox_app',
      github: 'https://github.com/Foula34/solibox_app',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
    },
    {
      title: 'Solibox Landing',
      description:
        "Landing page de la startup présentant l'application mobile et la solution d'énergie solaire.",
      technologies: ['Next.js'],
      image: 'images/solibox.PNG',
      link: 'https://solibox-landing.vercel.app',
      github: 'https://github.com/votre-username/solibox-landing',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
    },
  ];



  return (
    <section
      id="projects"
      className={`py-24 px-6 transition-colors duration-300 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            style={{
              border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            }}
          >
            <Sparkles size={16} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
            <span className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}>
              PORTFOLIO
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Découvrez une sélection de mes réalisations récentes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative perspective-container"
            >
              <div
                className={`relative rounded-2xl overflow-hidden glass transition-all duration-500 transform-3d ${hoveredIndex === index ? 'scale-[1.02]' : ''
                  }`}
                style={{
                  border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                  transform: hoveredIndex === index ? 'rotateX(2deg) rotateY(2deg)' : 'rotateX(0) rotateY(0)',
                }}
              >
                {/* Image with Holographic Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark'
                    ? 'from-slate-950 via-slate-950/50 to-transparent'
                    : 'from-white via-white/50 to-transparent'
                    } opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                  {/* Holographic Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Scan Line Effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-blue-500/5'
                      }`}
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${theme === 'dark' ? 'rgba(0, 212, 255, 0.03)' : 'rgba(0, 102, 255, 0.03)'
                        } 2px, ${theme === 'dark' ? 'rgba(0, 212, 255, 0.03)' : 'rgba(0, 102, 255, 0.03)'
                        } 4px)`,
                    }}
                  />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg glass"
                      style={{
                        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                        color: theme === 'dark' ? '#00d4ff' : '#0066ff',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg glass"
                      style={{
                        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                        background: theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)',
                        color: theme === 'dark' ? '#00d4ff' : '#0066ff',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <motion.div
                      animate={{
                        x: hoveredIndex === index ? 4 : 0,
                        y: hoveredIndex === index ? -4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight
                        className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}
                        size={24}
                      />
                    </motion.div>
                  </div>

                  <p
                    className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium glass font-mono ${theme === 'dark'
                          ? 'text-cyan-400'
                          : 'text-blue-600'
                          }`}
                        style={{
                          border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow Bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  style={{
                    boxShadow: hoveredIndex === index
                      ? `0 0 20px ${theme === 'dark' ? 'rgba(0, 212, 255, 0.6)' : 'rgba(0, 102, 255, 0.6)'}`
                      : 'none',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Foula34"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium glass transition-all duration-300 ${theme === 'dark'
              ? 'text-cyan-400 hover:text-cyan-300'
              : 'text-blue-600 hover:text-blue-500'
              }`}
            style={{
              border: `2px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            }}
          >
            <Github size={20} />
            Voir tous mes projets sur GitHub
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}