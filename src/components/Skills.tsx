import { useState } from 'react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export default function Skills({ theme }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: 'Front-End',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript/ES6+', level: 88 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      name: 'Mobile',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 82 },
      ],
    },
    {
      name: 'Back-End & Database',
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'Supabase', level: 80 },
        { name: 'Postegre', level: 75 },
      ],
    },
    {
      name: 'Outils & Autres',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Trello', level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-24 px-6 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'dark' 
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
              : 'bg-orange-50 text-orange-600 border border-orange-100'
          }`}>
            Expertise
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Mes <span className="text-orange-500">compétences</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies et outils que je maîtrise pour créer des expériences digitales exceptionnelles
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Navigation des catégories */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-24">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? theme === 'dark'
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                        : 'bg-orange-500 text-white shadow-lg'
                      : theme === 'dark'
                      ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-800'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {category.name}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === index
                        ? 'bg-white/20'
                        : theme === 'dark'
                        ? 'bg-slate-900'
                        : 'bg-gray-100'
                    }`}>
                      {category.skills.length}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Compétences détaillées */}
          <div className="lg:col-span-2">
            <div className={`p-8 rounded-2xl ${
              theme === 'dark' ? 'bg-slate-900' : 'bg-white shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {categories[activeCategory].name}
              </h3>

              <div className="space-y-6">
                {categories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group"
                    style={{
                      animation: `slideIn 0.4s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${
                        theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className={`h-3 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
                    }`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      >
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications liées */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-slate-800">
                <h4 className={`text-lg font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Certifications & Formations
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Flutter (Nimba Hub)', 'Google Cybersecurity', 'Git & GitHub'].map((cert, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Communication',
              'Leadership',
              'Autonomie',
              'Résolution de problèmes',
              'Travail d\'équipe',
              'Gestion du temps',
              'Créativité',
              'Adaptabilité',
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-1 hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-slate-900 text-orange-400 hover:shadow-orange-500/20'
                    : 'bg-white text-orange-600 shadow-md hover:shadow-orange-500/20'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}