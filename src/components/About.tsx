import { Rocket, MapPin, Layers, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface AboutProps {
  theme: 'light' | 'dark';
}

export default function About({ theme }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Rocket,
      title: 'Du code au produit',
      description: 'Concevoir, développer, livrer — jusqu\'à l\'utilisateur final.',
    },
    {
      icon: MapPin,
      title: 'Impact local',
      description: 'Des solutions qui répondent à des problèmes vécus en Guinée.',
    },
    {
      icon: Layers,
      title: 'Polyvalence',
      description: 'Web, mobile, design, gestion de projet — toute la chaîne.',
    },
    {
      icon: GraduationCap,
      title: 'Transmission',
      description: 'Former la prochaine génération de dev (Fata School).',
    },
  ];

  const stats = [
    { number: '1ᵉʳ', label: 'Prix Étudiants Entrepreneurs 2026' },
    { number: '5+', label: 'Projets livrés' },
    { number: '2+', label: 'Années de développement' },
  ];

  return (
    <section
      id="about"
      className={`py-24 px-6 transition-colors duration-300 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />

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
              QUI SUIS-JE ?
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            À propos <span className="gradient-text">de moi</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image with Holographic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated glow */}
              <div className={`absolute -inset-4 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-blue-400/30'
                }`} />

              {/* Main image */}
              <div className="relative glass rounded-2xl p-2"
                style={{
                  border: `2px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                }}
              >
                <img
                  src="images/foula.jpg"
                  alt="Foula Fofana"
                  className="relative w-full aspect-square object-cover rounded-xl"
                />

                {/* Holographic overlay */}
                <div className="absolute inset-2 rounded-xl holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Scan line */}
                <div
                  className={`absolute inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-blue-500/5'
                    }`}
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${theme === 'dark' ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 102, 255, 0.05)'
                      } 2px, ${theme === 'dark' ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 102, 255, 0.05)'
                      } 4px)`,
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10 glass ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-100/50'
                }`} />
              <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10 glass ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-100/50'
                }`} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
              >
                <span className="font-semibold gradient-text">Développeur web et mobile</span> basé à Conakry, je travaille au croisement
                du <span className="font-semibold">code</span> et de l'<span className="font-semibold">entrepreneuriat</span>. Mes expériences
                à <span className="font-semibold">Orange Digital Center</span>, <span className="font-semibold">NG Tech</span> et <span className="font-semibold">Fata School</span> m'ont
                permis de construire des produits concrets — de l'application mobile
                à la plateforme web — et de coordonner des projets tech à impact social.
              </p>
              <p
                className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
              >
                Curieux et autonome, j'aime apprendre par la pratique et transformer
                une idée en produit utilisable. Que je code une app mobile, une plateforme web
                ou que je porte un projet de bout en bout, ce qui me motive c'est de voir la
                technologie résoudre des <span className="font-semibold gradient-text">problèmes réels</span> — pour ma communauté en Guinée et au-delà.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl glass"
                    style={{
                      border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {stat.number}
                    </div>
                    <div className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} theme={theme} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  value: { icon: any; title: string; description: string };
  index: number;
  theme: 'light' | 'dark';
  inView: boolean;
}

function ValueCard({ value, index, theme, inView }: ValueCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-container cursor-pointer"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-48 transform-3d"
      >
        {/* Front */}
        <div
          className={`absolute inset-0 p-6 rounded-xl glass transition-all duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'
            }`}
          style={{
            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
            backfaceVisibility: 'hidden',
          }}
        >
          <div className={`inline-flex p-3 rounded-lg mb-4 glass ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-blue-500/10'
            }`}
            style={{
              border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            }}
          >
            <Icon size={24} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
          </div>
          <h3
            className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            {value.title}
          </h3>
          <p
            className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
          >
            {value.description}
          </p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 p-6 rounded-xl glass flex items-center justify-center transition-all duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="text-center">
            <Icon size={48} className={`mx-auto mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`} />
            <p className={`text-sm font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
              Click to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}