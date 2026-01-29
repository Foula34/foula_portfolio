import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  theme: 'light' | 'dark';
}

export default function Hero({ theme }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col items-center px-6 pt-32 pb-12 overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-gray-50'
        }`}
    >
      {/* 3D Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          className="absolute inset-0 grid-bg"
          style={{
            transform: `perspective(1000px) rotateX(60deg) translateZ(-200px) translateY(${mousePosition.y * 2}px)`,
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-blue-400/20'
            }`}
          animate={{
            x: ['-10%', '110%'],
            y: ['-10%', '110%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <motion.div
          className={`absolute w-[600px] h-[600px] rounded-full blur-3xl ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-400/20'
            }`}
          animate={{
            x: ['110%', '-10%'],
            y: ['110%', '-10%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
              }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              boxShadow: theme === 'dark'
                ? '0 0 20px rgba(0, 212, 255, 0.8)'
                : '0 0 20px rgba(0, 102, 255, 0.8)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center my-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          style={{
            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
              } opacity-75`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-600'
              }`} />
          </span>
          <span className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}>
            AVAILABLE FOR PROJECTS
          </span>
        </motion.div>

        {/* Main Title with Holographic Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{
              fontFamily: 'Orbitron, sans-serif',
            }}
          >
            Foula{' '}
            <span className="relative inline-block">
              <span className="gradient-text text-glow-primary">
                Fofana
              </span>
              {/* Glitch effect layers */}
              <span
                className="absolute inset-0 gradient-text opacity-70 animate-glitch"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
              >
                Fofana
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Animated Subtitle with Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
            <TypeAnimation
              sequence={[
                'Développeur Front-End',
                2000,
                'Développeur Mobile',
                2000,
                'Créateur d\'Expériences Numériques',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {['React', 'Next.js', 'Flutter', 'TypeScript'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium glass transition-all hover:scale-105 ${theme === 'dark'
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-blue-600 hover:text-blue-500'
                  }`}
                style={{
                  border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
        >
          Passionné par la création de solutions numériques innovantes qui allient
          esthétique, performance et impact social à travers des expériences web et
          mobiles exceptionnelles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="documents/Foula_Fofana_CV.pdf"
            download="Foula_Fofana_CV.pdf"
            className={`group relative px-8 py-4 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 ${theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              }`}
            style={{
              boxShadow: theme === 'dark'
                ? '0 0 30px rgba(0, 212, 255, 0.4)'
                : '0 0 30px rgba(0, 102, 255, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download size={20} />
              Télécharger mon CV
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

          <a
            href="#contact"
            className={`group px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 glass ${theme === 'dark'
              ? 'text-cyan-400 hover:text-cyan-300'
              : 'text-blue-600 hover:text-blue-500'
              }`}
            style={{
              border: `2px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            }}
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Me contacter
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Github, href: 'https://github.com/Foula34', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/foula-fofana-1769782a5', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:fofanafoula70@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl glass transition-all duration-300 ${theme === 'dark'
                ? 'text-gray-300 hover:text-cyan-400'
                : 'text-gray-600 hover:text-blue-600'
                }`}
              style={{
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              }}
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-500/50'
              }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1 h-2 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
                }`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}