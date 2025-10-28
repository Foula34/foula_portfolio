import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

export default function Experience({ theme }: ExperienceProps) {
  const experiences = [
    {
      company: 'Orange',
      role: 'Stagiaire',
      period: '07/2025 - 11/2025',
      description: 'Développement d\'une application web et mobile innovante.',
    },
    {
      company: 'Fata School',
      role: 'Bénévole',
      period: '07/2024 - Actuel',
      description: 'Promotion de Fata.dev, sensibilisation à l\'apprentissage du code.',
    },
    {
      company: 'Asis Tech',
      role: 'Formateur',
      period: '05/2025 - Actuel',
      description: 'Animation de sessions et accompagnement en bureautique et numérique.',
    },
  ];

  const education = [
    'Université Gamal Abdel Nasser de Conakry — Génie Informatique (en cours)',
    'Baccalauréat Scientifique (Mathématiques) — Mention Bien',
  ];

  const certifications = [
    'Flutter (Nimba Hub)',
    'React, JavaScript',
    'Git & GitHub',
    'Google Cybersecurity (en cours)',
  ];

  const interests = [
    'Nouvelles technologies',
    'Cybersécurité',
    'Innovation',
    'Formation',
    'Lecture',
    'Sport & Cinéma',
  ];

  return (
    <section
      id="experience"
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
          Mon <span className="text-orange-500">parcours</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-lg mr-4">
                <Briefcase size={28} className="text-white" />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Expériences
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-l-4 border-orange-500 transition-all hover:scale-105 ${
                    theme === 'dark' ? 'bg-slate-800' : 'bg-white'
                  }`}
                >
                  <h4
                    className={`text-xl font-bold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {exp.company}
                  </h4>
                  <p className="text-orange-500 font-medium mb-2">
                    {exp.role} • {exp.period}
                  </p>
                  <p
                    className={
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-lg mr-4">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Formation
              </h3>
            </div>

            <div
              className={`p-6 rounded-xl mb-8 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              }`}
            >
              {education.map((edu, index) => (
                <p
                  key={index}
                  className={`mb-3 last:mb-0 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  • {edu}
                </p>
              ))}
            </div>

            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-lg mr-4">
                <Award size={28} className="text-white" />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Certifications
              </h3>
            </div>

            <div
              className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm ${
                      theme === 'dark'
                        ? 'bg-slate-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-orange-500 rounded-lg mr-4">
              <Heart size={28} className="text-white" />
            </div>
            <h3
              className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Centres d'intérêt
            </h3>
          </div>

          <div
            className={`p-6 rounded-xl max-w-4xl mx-auto ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-white'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
