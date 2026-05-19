import { Rocket, MapPin, Layers, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  theme: 'light' | 'dark';
}

export default function About({ theme: _theme }: AboutProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { number: '1ᵉʳ', label: 'Prix Salon Étudiants Entrepreneurs 2026' },
    { number: '5+', label: 'Projets livrés' },
    { number: '2+', label: 'Années de développement' },
  ];

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

  return (
    <section id="about" className="py-24 lg:py-32 px-6 bg-bg-alt">
      <div className="max-w-content mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-text-muted mb-6 tracking-wide"
        >
          <span className="rule mr-3" /> 01 — À propos
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-text mb-16"
        >
          Construire des produits <span className="italic text-accent">utiles</span>.
        </motion.h2>

        {/* Bio */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg leading-relaxed text-text"
            >
              Développeur web et mobile basé à Conakry, je travaille au croisement
              du code et de l'entrepreneuriat. Mes expériences à{' '}
              <span className="font-medium">Orange Digital Center</span>,{' '}
              <span className="font-medium">NG Tech</span> et{' '}
              <span className="font-medium">Fata School</span> m'ont permis de
              construire des produits concrets — de l'application mobile à la
              plateforme web — et de coordonner des projets tech à impact social.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg leading-relaxed text-text-muted"
            >
              Curieux et autonome, j'aime apprendre par la pratique et transformer
              une idée en produit utilisable. Que je code une app mobile, une
              plateforme web ou que je porte un projet de bout en bout, ce qui me
              motive c'est de voir la technologie résoudre des problèmes réels —
              pour ma communauté en Guinée et au-delà.
            </motion.p>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 space-y-8 lg:pl-8 lg:border-l border-border"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-4xl lg:text-5xl text-accent mb-1">
                  {stat.number}
                </div>
                <div className="font-mono text-xs text-text-muted tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div className="border-t border-border pt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-xs text-text-muted mb-10 tracking-wide"
          >
            <span className="rule mr-3" /> Ce qui me guide
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-accent mb-4"
                  />
                  <h3 className="font-display text-xl text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
