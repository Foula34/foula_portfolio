import { Code, Database, Wrench, Smartphone, Shield, Users } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export default function Skills({ theme }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code,
      title: 'Langages & Frameworks',
      skills: 'HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Flutter (Dart)',
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: 'Firebase, Supabase, MySQL',
    },
    {
      icon: Wrench,
      title: 'Outils',
      skills: 'Git / GitHub, VS Code, Trello',
    },
    {
      icon: Smartphone,
      title: 'UI & Mobile',
      skills: 'Design d\'apps, prototypage, gestion d\'état, TTS',
    },
    {
      icon: Shield,
      title: 'Réseaux & Sécurité',
      skills: 'Architecture réseau, Google Cybersecurity',
    },
    {
      icon: Users,
      title: 'Soft skills',
      skills: 'Communication, leadership, autonomie, résolution de problèmes',
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Mes <span className="text-orange-500">compétences</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all hover:scale-105 hover:shadow-xl ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-750'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-500 rounded-lg mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {category.title}
                </h3>
              </div>
              <p
                className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
