import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  theme: 'light' | 'dark';
}

export default function Hero({ theme }: HeroProps) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 px-4 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6 animate-fade-in">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Foula <span className="text-orange-500">Fofana</span>
          </h1>
          <h2
            className={`text-2xl md:text-3xl font-medium mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Développeur Front-End & Mobile
          </h2>
        </div>

        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Passionné par la création de solutions numériques utiles et
          accessibles, j'allie design, performance et impact social à travers
          des applications web et mobiles modernes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Bouton de téléchargement du CV */}
          <a
            href="documents/Foula_Fofana_CV.pdf"
            download="Foula_Fofana_CV.pdf"
            className="px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Télécharger mon CV
          </a>

          <a
            href="#contact"
            className={`px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-gray-200 text-slate-900 hover:bg-gray-300'
            }`}
          >
            Me contacter
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Foula34"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-gray-200 text-slate-900 hover:bg-gray-300'
            }`}
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/foula-fofana-1769782a5"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-gray-200 text-slate-900 hover:bg-gray-300'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:fofanafoula70@gmail.com"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-gray-200 text-slate-900 hover:bg-gray-300'
            }`}
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-block animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown
            size={32}
            className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
          />
        </a>
      </div>
    </section>
  );
}
