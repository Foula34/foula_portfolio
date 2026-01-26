import { Briefcase, GraduationCap, Award, Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

export default function Experience({ theme }: ExperienceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Développeur Front-End',
      organization: 'Orange Digital Center',
      location: 'Conakry, Guinée',
      period: '2024 - Présent',
      description: 'Développement d\'applications web modernes avec React et Next.js. Collaboration sur des projets à impact social.',
      color: 'cyan',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Ambassadeur',
      organization: 'Fata School',
      location: 'Conakry, Guinée',
      period: '2023 - Now',
      description: 'Promotion de l\'application mobile fata dev et des différents projets de fata school',
      color: 'purple',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Licence en Informatique',
      organization: 'Université de Conakry',
      location: 'Conakry, Guinée',
      period: '2021 - 2024',
      description: 'Formation en développement logiciel, bases de données, et génie logiciel.',
      color: 'blue',
    },
    {
      type: 'volunteer',
      icon: Heart,
      title: 'Formateur Bénévole',
      organization: 'Fata School',
      location: 'Conakry, Guinée',
      period: '2023 - Présent',
      description: 'Formation de jeunes développeurs aux technologies web modernes.',
      color: 'green',
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-6 transition-colors duration-300 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
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
              PARCOURS
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Mon <span className="gradient-text">Expérience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${theme === 'dark' ? 'bg-cyan-500/30' : 'bg-blue-500/30'
            }`}
            style={{
              boxShadow: theme === 'dark'
                ? '0 0 10px rgba(0, 212, 255, 0.5)'
                : '0 0 10px rgba(0, 102, 255, 0.5)',
            }}
          />

          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              index={index}
              theme={theme}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: any;
  index: number;
  theme: 'light' | 'dark';
  inView: boolean;
}

function ExperienceCard({ experience, index, theme, inView }: ExperienceCardProps) {
  const Icon = experience.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass rounded-xl p-6"
          style={{
            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-lg glass ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-blue-500/10'
              }`}
              style={{
                border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
              }}
            >
              <Icon size={24} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
            </div>
            <div className="flex-1">
              <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                {experience.title}
              </h3>
              <p className={`font-medium ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                {experience.organization}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3 text-sm">
            <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              <Calendar size={14} />
              {experience.period}
            </div>
            <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              <MapPin size={14} />
              {experience.location}
            </div>
          </div>

          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            {experience.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className={`w-4 h-4 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'
          }`}
          style={{
            boxShadow: theme === 'dark'
              ? '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)'
              : '0 0 20px rgba(0, 102, 255, 0.8), 0 0 40px rgba(0, 102, 255, 0.4)',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'
              }`}
          />
        </div>
      </motion.div>

      {/* Spacer for desktop */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}