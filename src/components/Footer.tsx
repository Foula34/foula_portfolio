import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Foula34', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/foula-fofana-1769782a5', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:fofanafoula70@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`relative pt-16 pb-8 px-6 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-slate-950 border-t border-slate-800'
          : 'bg-gray-50 border-t border-gray-200'
      }`}
    >
      {/* Gradient décoratif */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1: À propos */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Foula<span className="text-orange-500">.</span>
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Développeur Front-End & Mobile passionné par la création de solutions numériques innovantes et utiles.
            </p>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Fait avec
              </span>
              <Heart size={16} className="text-orange-500 fill-orange-500 animate-pulse" />
              <span className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                en Guinée
              </span>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className={`text-lg font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors hover:text-orange-500 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div>
            <h4 className={`text-lg font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Me suivre
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                      theme === 'dark'
                        ? 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-orange-500 shadow-md'
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className={`h-px mb-8 ${
          theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'
        }`}></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {currentYear} Foula Fofana. Tous droits réservés.
          </p>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Développé avec <span className="text-orange-500 font-semibold">React</span> & <span className="text-orange-500 font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}