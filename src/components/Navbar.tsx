import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? theme === 'dark'
            ? 'bg-slate-950/80 backdrop-blur-md shadow-2xl shadow-orange-500/5'
            : 'bg-white/80 backdrop-blur-md shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo avec effet */}
          <a 
            href="#home" 
            className="relative group"
          >
            <span className={`text-2xl font-bold tracking-tight transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              FF
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
            
            {/* Theme toggle avec animation */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-slate-800/50 text-orange-400 hover:bg-slate-800'
                  : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="rotate-0 transition-transform duration-500" />
              ) : (
                <Moon size={18} className="rotate-0 transition-transform duration-500" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800/50 text-orange-400'
                  : 'bg-gray-100 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu avec animation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${
          theme === 'dark' 
            ? 'bg-slate-950/95 backdrop-blur-md border-t border-slate-800/50' 
            : 'bg-white/95 backdrop-blur-md border-t border-gray-200'
        }`}
      >
        <div className="px-6 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg transition-all duration-300 hover:translate-x-2 ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-slate-900'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                transition: `all 0.3s ease ${index * 50}ms`
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}