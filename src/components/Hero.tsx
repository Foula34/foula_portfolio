import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      className={`relative min-h-screen flex items-center justify-center px-6 overflow-hidden ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-gray-50'
      }`}
    >
      {/* Arrière-plan animé avec gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-400'
          }`}
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className={`absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10 transition-all duration-1000 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
          }`}
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge animé */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className={`text-sm font-medium ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
            Disponible pour des projets
          </span>
        </div>

        {/* Titre principal */}
        <h1 
          className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
          style={{
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          Foula{' '}
          <span className="relative inline-block">
            <span className="text-orange-500">Fofana</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 2 150 2 298 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-orange-500"
              />
            </svg>
          </span>
        </h1>

        {/* Sous-titre avec effet de typing */}
        <div className="mb-8">
          <p
            className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
            }}
          >
            Développeur Front-End & Mobile
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {['React', 'Next.js', 'Flutter'].map((tech, index) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 text-gray-300'
                    : 'bg-white text-gray-700 shadow-sm'
                }`}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.1}s both`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
          }}
        >
          Passionné par la création de solutions numériques innovantes qui allient
          esthétique, performance et impact social à travers des expériences web et
          mobiles exceptionnelles.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.5s both',
          }}
        >
          <a
            href="documents/Foula_Fofana_CV.pdf"
            download="Foula_Fofana_CV.pdf"
            className="group relative px-8 py-4 bg-orange-500 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download size={20} />
              Télécharger mon CV
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>

          <a
            href="#contact"
            className={`group px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700 hover:shadow-xl hover:shadow-slate-800/50'
                : 'bg-white text-slate-900 hover:bg-gray-50 shadow-lg hover:shadow-xl'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              Me contacter
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-4"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.6s both',
          }}
        >
          {[
            { icon: Github, href: 'https://github.com/Foula34', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/foula-fofana-1769782a5', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:fofanafoula70@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`group p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white hover:shadow-xl hover:shadow-slate-800/50'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-slate-900 shadow-md hover:shadow-xl'
              }`}
              aria-label={label}
            >
              <Icon size={22} className="transition-transform group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-2 rounded-full ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'
            } animate-scroll`}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0%, 20% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}