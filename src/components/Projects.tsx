import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

export default function Projects({ theme }: ProjectsProps) {
  const projects = [
    {
      title: 'EduWay',
      description:
        "Plateforme d'orientation universitaire pour aider les étudiants guinéens à découvrir les universités et filières.",
      technologies: ['Next.js', 'Spring Boot', 'Firebase'],
      image:
        'images/Capture.PNG',
      link: 'https://github.com/votre-username/eduway',
    },
    {
      title: 'Walima',
      description:
        'Mise en relation prestataires / clients pour simplifier la recherche et la réservation de services.',
      technologies: ['Next.js', 'Supabase'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      link: 'https://github.com/votre-username/walima',
    },
    {
      title: 'Solibox',
      description:
        "Application mobile d'énergie solaire connectée pour le suivi et partage du surplus d'énergie via boîtier IoT.",
      technologies: ['Flutter', 'Supabase', 'MQTT'],
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop',
      link: 'https://github.com/Foula34/solibox_app',
    },
    {
      title: 'Solibox Landing',
      description:
        "Landing page de la startup présentant l'application mobile et la solution d'énergie solaire.",
      technologies: ['Next.js'],
      image:
      'images/solibox.PNG',
      link: 'https://solibox-landing.vercel.app',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Mes <span className="text-orange-500">projets</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl ${
                theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'
              }`}
            >
              {/* Image en en-tête */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className={`transition-transform group-hover:scale-125 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  />
                </div>

                <p
                  className={`mb-4 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-slate-800 text-orange-400'
                          : 'bg-orange-100 text-orange-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
