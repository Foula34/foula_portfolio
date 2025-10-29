import { Code2, Lightbulb, Users, Target } from 'lucide-react';

interface AboutProps {
  theme: 'light' | 'dark';
}

export default function About({ theme }: AboutProps) {
  const values = [
    {
      icon: Code2,
      title: 'Innovation',
      description: 'Solutions créatives et modernes',
    },
    {
      icon: Lightbulb,
      title: 'Apprentissage',
      description: 'Curiosité et progression continue',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail d\'équipe et communication',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Projets à utilité concrète',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 px-6 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'dark' 
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
              : 'bg-orange-50 text-orange-600 border border-orange-100'
          }`}>
            Qui suis-je ?
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            À propos <span className="text-orange-500">de moi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image avec overlay créatif */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto">
              {/* Cadre décoratif */}
              <div className={`absolute -inset-4 rounded-2xl opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-75 ${
                theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-400/30'
              }`}></div>
              
              {/* Image principale */}
              <div className="relative">
                <img
                  src="images/foula.jpg"
                  alt="Foula Fofana"
                  className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Overlay avec pattern */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500"></div>
              </div>

              {/* Elements décoratifs */}
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
              }`}></div>
              <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
              }`}></div>
            </div>
          </div>

          {/* Contenu texte */}
          <div>
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Je suis un jeune <span className="font-semibold text-orange-500">développeur web front-end et mobile</span> passionné par
                la conception de solutions numériques utiles. Grâce à mes
                expériences à <span className="font-semibold">Orange Digital Center</span> et <span className="font-semibold">Fata School</span>, j'ai développé
                des compétences solides en conception, développement et
                coordination de projets tech à impact social.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Curieux, autonome et engagé, j'aime relever des défis techniques et
                contribuer à des projets innovants qui allient technologie et
                utilité concrète. Mon objectif est de créer des expériences
                numériques qui ont un <span className="font-semibold text-orange-500">impact positif</span> sur la vie des utilisateurs.
              </p>

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { number: '1+', label: 'Années d\'expérience' },
                  { number: '5+', label: 'Projets réalisés' },
                  { number: '100%', label: 'Engagement' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-xl ${
                      theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                      {stat.number}
                    </div>
                    <div className={`text-xs md:text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-slate-800/50 hover:bg-slate-800 hover:shadow-xl hover:shadow-orange-500/10'
                  : 'bg-gray-50 hover:bg-white hover:shadow-xl'
              }`}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-slate-900' : 'bg-white shadow-md'
              }`}>
                <value.icon size={24} className="text-orange-500" />
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                {value.title}
              </h3>
              <p
                className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}