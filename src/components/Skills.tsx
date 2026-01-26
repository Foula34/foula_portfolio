import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Smartphone, Database, Palette, Sparkles } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export default function Skills({ theme }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      name: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML / CSS', level: 95 },
      ],
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'JetPack Compose', level: 75 },
        { name: 'Kotlin', level: 70 },
        { name: 'Dart', level: 80 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      name: 'Backend',
      icon: Database,
      skills: [

        { name: 'Supabase', level: 85 },
        { name: 'Firebase', level: 80 },

      ],
    },
    {
      name: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Prototyping', level: 75 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-24 px-6 transition-colors duration-300 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            style={{
              border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            }}
          >
            <Sparkles size={16} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
            <span className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}>
              COMPÉTENCES
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Technologies et outils que je maîtrise
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 glass ${activeCategory === index
                  ? theme === 'dark'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-blue-600 bg-blue-500/10'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-cyan-400'
                    : 'text-gray-600 hover:text-blue-600'
                  }`}
                style={{
                  border: `2px solid ${activeCategory === index
                    ? theme === 'dark' ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 102, 255, 0.5)'
                    : theme === 'dark' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 102, 255, 0.1)'
                    }`,
                  boxShadow: activeCategory === index
                    ? theme === 'dark'
                      ? '0 0 20px rgba(0, 212, 255, 0.3)'
                      : '0 0 20px rgba(0, 102, 255, 0.3)'
                    : 'none',
                }}
              >
                <Icon size={20} />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid gap-6">
            {categories[activeCategory].skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
                theme={theme}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: { name: string; level: number };
  index: number;
  theme: 'light' | 'dark';
  inView: boolean;
}

function SkillBar({ skill, index, theme, inView }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass rounded-xl p-6 transition-all duration-300"
      style={{
        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
          {skill.name}
        </span>
        <span className={`text-sm font-mono font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
          }`}>
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className={`relative h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'
        }`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(90deg, #00d4ff, #b026ff)'
              : 'linear-gradient(90deg, #0066ff, #b026ff)',
            boxShadow: theme === 'dark'
              ? '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3)'
              : '0 0 20px rgba(0, 102, 255, 0.6), 0 0 40px rgba(0, 102, 255, 0.3)',
          }}
        >
          {/* Animated shimmer effect */}
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}