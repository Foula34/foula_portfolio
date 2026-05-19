import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  theme: 'light' | 'dark';
}

export default function Hero({ theme: _theme }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs text-text-muted mb-8 tracking-wide"
            >
              <span className="rule mr-3" /> Conakry · Guinée · 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text mb-8"
            >
              Foula
              <br />
              <span className="text-accent italic">Fofana.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text mb-6 leading-relaxed max-w-prose"
            >
              Co-fondateur de <span className="font-medium">Solibox</span>. Développeur
              web & mobile. Primé au Salon des Étudiants Entrepreneurs 2026.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-text-muted mb-10 leading-relaxed max-w-prose"
            >
              De Conakry, je conçois des produits qui répondent à des problèmes
              concrets — de l'application mobile à la plateforme web — au croisement
              du code et de l'entrepreneuriat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 mb-12"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg px-6 py-3.5 font-medium transition-colors duration-200"
              >
                Voir mes projets
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="documents/Foula_Fofana_CV.pdf"
                download="Foula_Fofana_CV.pdf"
                className="group inline-flex items-center gap-2 text-text hover:text-accent border-b border-text/30 hover:border-accent pb-1 transition-colors duration-200"
              >
                <Download size={16} />
                Télécharger mon CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/Foula34', label: 'GitHub' },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/foula-fofana-1769782a5',
                  label: 'LinkedIn',
                },
                { icon: Mail, href: 'mailto:fofanafoula70@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="text-text-muted hover:text-accent transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none lg:ml-auto">
              <img
                src="images/foula.jpg"
                alt="Foula Fofana"
                className="w-full aspect-[4/5] object-cover"
              />
              <p className="font-mono text-xs text-text-muted mt-4 tracking-wide">
                Foula Fofana · co-fondateur Solibox
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
