import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

export default function Footer({ theme: _theme }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 bg-bg">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-text">Foula Fofana</p>
          <p className="font-mono text-xs text-text-muted mt-1 tracking-wide">
            Développeur web & mobile · Co-fondateur Solibox
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-text-muted">
          <span>© {currentYear} — Conakry, Guinée</span>
          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1 hover:text-accent transition-all duration-200 ${
              showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Retour en haut"
          >
            <ArrowUp size={14} strokeWidth={1.75} />
            Haut
          </button>
        </div>
      </div>
    </footer>
  );
}
