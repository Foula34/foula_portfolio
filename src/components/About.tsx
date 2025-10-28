interface AboutProps {
  theme: 'light' | 'dark';
}

export default function About({ theme }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          À propos <span className="text-orange-500">de moi</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              <img
                src="images/foula.jpg"
                alt="Photo de profil"
                className={`w-full h-full rounded-full object-cover shadow-2xl border-4 ${
                  theme === 'dark' ? 'border-orange-500' : 'border-orange-400'
                }`}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            </div>
          </div>

          <div>
            <p
              className={`text-lg leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Je suis un jeune développeur web front-end et mobile passionné par
              la conception de solutions numériques utiles. Grâce à mes
              expériences à Orange Digital Center et Fata School, j'ai développé
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
              utilité concrète.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}