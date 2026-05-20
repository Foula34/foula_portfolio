import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Smartphone, Database, Palette } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export default function Skills({ theme: _theme }: SkillsProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const categories = [
    {
      name: 'Frontend',
      icon: Code2,
      skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      skills: ['Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'Firebase'],
    },
    {
      name: 'Backend',
      icon: Database,
      skills: ['Supabase', 'Firebase', 'Prisma', 'MQTT'],
    },
    {
      name: 'Design',
      icon: Palette,
      skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Responsive Design'],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 bg-bg">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-text-muted mb-6 tracking-wide"
        >
          <span className="rule mr-3" /> 02 — Compétences
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-text mb-4"
        >
          La <span className="text-accent">boîte à outils</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base text-text-muted mb-16 max-w-prose"
        >
          Les technologies que j'utilise au quotidien sur mes projets — du
          prototype au produit livré.
        </motion.p>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="border-t border-border pt-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} strokeWidth={1.5} className="text-accent" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    {category.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-display text-2xl lg:text-3xl text-text hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
