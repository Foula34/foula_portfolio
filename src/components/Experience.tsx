import { Briefcase, GraduationCap, Award, Heart, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

export default function Experience({ theme }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experiences = [
    {
      company: 'Orange Digital Center',
      role: 'Stagiaire Développeur',
      period: '07/2025 - 11/2025',
      location: 'Conakry, Guinée',
      description: 'Développement d\'une application mobile innovante connecté à un boitier IOT, qui controle et gère un partage d\'energie solaire entre voisin.',
      achievements: [
        'Conception et développement de Solibox',
        'Collaboration avec une équipe multidisciplinaire',
        'Utilisation de mqtt pour connection avec IOT',
      ],
    },
    {
      company: 'Asis Tech',
      role: 'Formateur',
      period: '05/2025 - Actuel',
      location: 'Conakry, Guinée',
      description: 'Animation de sessions de formation en bureautique et numérique.',
      achievements: [
        'Formation de 50+ apprenants',
        'Création de supports pédagogiques',
        'Accompagnement individualisé',
      ],
    },
    {
      company: 'Fata School',
      role: 'Bénévole',
      period: '07/2024 - Actuel',
      location: 'Guinée',
      description: 'Promotion de l\'apprentissage du code et sensibilisation à Fata.dev.',
      achievements: [
        'Organisation d\'événements communautaires',
        'Mentorat de jeunes développeurs',
        'Contribution à l\'écosystème tech local',
      ],
    },
  ];

  const education = [
    {
      school: 'Université Gamal Abdel Nasser',
      degree: 'Licence en Génie Informatique',
      period: '2023 - En cours',
      location: 'Conakry, Guinée',
      description: 'Formation en développement logiciel, réseaux et cybersécurité.',
    },
    {
      school: 'Lycée Technique',
      degree: 'Baccalauréat Scientifique',
      period: '2023',
      location: 'Mamou, Guinée',
      description: 'Mention Bien - Spécialité Mathématiques',
    },
  ];

  const certifications = [
    { name: 'Flutter Development', provider: 'Nimba Hub', year: '2024' },
    { name: 'Google Cybersecurity', provider: 'Google', year: 'En cours' },
    { name: 'React & JavaScript', provider: 'Auto-formation', year: 'En cours' },
    { name: 'Git & GitHub', provider: 'Coursera', year: '2025' },
  ];

  const interests = [
    {  name: 'Nouvelles technologies' },
    { name: 'Cybersécurité' },
    { name: 'Innovation' },
    { name: 'Formation' },
    { name: 'Lecture' },
    { name: 'Sport' },
    { name: 'Cinéma' },
  ];

  return (
    <section
      id="experience"
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
            Parcours
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Mon <span className="text-orange-500">parcours</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                : theme === 'dark'
                ? 'bg-slate-900 text-gray-400 hover:bg-slate-800'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
            }`}
          >
            <Briefcase size={20} />
            Expériences
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                : theme === 'dark'
                ? 'bg-slate-900 text-gray-400 hover:bg-slate-800'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
            }`}
          >
            <GraduationCap size={20} />
            Formation
          </button>
        </div>

        {/* Contenu des tabs */}
        <div className="mb-20">
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-slate-900 hover:shadow-xl hover:shadow-orange-500/10'
                      : 'bg-white hover:shadow-xl shadow-md'
                  }`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Barre latérale colorée */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-l-2xl"></div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-orange-500 font-semibold text-lg mb-2">
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className={`flex items-center gap-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className={`flex items-center gap-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <span className="text-orange-500 mt-1">▪</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-slate-900 hover:shadow-xl hover:shadow-orange-500/10'
                      : 'bg-white hover:shadow-xl shadow-md'
                  }`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-l-2xl"></div>

                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {edu.school}
                  </h3>
                  <p className="text-orange-500 font-semibold text-lg mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm mb-3">
                    <span className={`flex items-center gap-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                    <span className={`flex items-center gap-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <MapPin size={16} />
                      {edu.location}
                    </span>
                  </div>
                  <p
                    className={
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award size={28} className="text-orange-500" />
            <h3
              className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900 hover:bg-slate-800 hover:shadow-xl hover:shadow-orange-500/10'
                    : 'bg-white hover:shadow-xl shadow-md'
                }`}
              >
                
                <h4
                  className={`font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {cert.name}
                </h4>
                <p className="text-orange-500 text-sm font-medium mb-1">
                  {cert.provider}
                </p>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart size={28} className="text-orange-500" />
            <h3
              className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Centres d'intérêt
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900 text-gray-300 hover:bg-slate-800'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-xl'
                }`}
              >
                
                <span className="font-medium">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}