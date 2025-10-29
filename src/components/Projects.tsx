import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

export default function Projects({ theme }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'EduWay',
      description:
        "Plateforme d'orientation universitaire pour aider les étudiants guinéens à découvrir les universités et filières.",
      technologies: ['Next.js', 'Spring Boot', 'Firebase'],
      image: 'images/Capture.PNG',
      link: 'https://github.com/votre-username/eduway',
      github: 'https://github.com/votre-username/eduway',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Solibox Landing',
      description:
        "Landing page de la startup présentant l'application mobile et la solution d'énergie solaire.",
      technologies: ['Next.js'],
      image: 'images/solibox.PNG',
      link: 'https://solibox-landing.vercel.app',
      github: 'https://github.com/votre-username/solibox-landing',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 px-6 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'dark' 
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
              : 'bg-orange-50 text-orange-600 border border-orange-100'
          }`}>
            Portfolio
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Mes <span className="text-orange-500">projets</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'
              } ${
                hoveredIndex === index ? 'scale-[1.02] shadow-2xl' : 'shadow-lg'
              }`}
            >
              {/* Image avec overlay gradient */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' 
                    ? 'from-slate-800 via-slate-800/50 to-transparent' 
                    : 'from-gray-50 via-gray-50/50 to-transparent'
                } opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Gradient de couleur personnalisé */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Liens flottants */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg backdrop-blur-md transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-slate-900/80 text-white hover:bg-slate-900'
                        : 'bg-white/80 text-slate-900 hover:bg-white'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg backdrop-blur-md transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    className={`transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''
                    } ${theme === 'dark' ? 'text-orange-400' : 'text-orange-500'}`}
                    size={24}
                  />
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-900 text-gray-300'
                          : 'bg-white text-gray-700 shadow-sm'
                      } ${
                        hoveredIndex === index ? 'scale-105' : ''
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Barre de progression au hover */}
              <div className={`h-1 bg-gradient-to-r ${project.color} transform origin-left transition-transform duration-500 ${
                hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Foula34"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700 hover:shadow-xl hover:shadow-slate-800/50'
                : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
            }`}
          >
            <Github size={20} />
            Voir tous mes projets sur GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}