import { Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

export default function Footer({ theme }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative py-12 px-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      {/* Top border with gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.5), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3
              className="text-3xl font-bold gradient-text mb-2"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              FF
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Développeur Front-End & Mobile
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex items-center justify-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
          >
            <span>© {currentYear} Foula Fofana. Fait par moi avec</span>
            <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
            <span>et beaucoup de café ☕</span>
          </motion.div>

          {/* Tech Stack */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mt-4 text-xs font-mono ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}
          >
            Built with React + TypeScript + Tailwind CSS + Framer Motion
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full glass z-40 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}
          style={{
            border: `2px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            boxShadow: theme === 'dark'
              ? '0 0 20px rgba(0, 212, 255, 0.3)'
              : '0 0 20px rgba(0, 102, 255, 0.3)',
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </footer>
  );
}