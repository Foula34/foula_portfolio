import type { Locale } from '@/lib/i18n';
import type { HomeText } from './types';

// Textes de l'accueil. Chaque fait vient du CV ou de Foula : pas de chiffre ni de date inventés.
export const home: Record<Locale, HomeText> = {
  fr: {
    meta: {
      title: 'Foula Fofana · Développeur web & mobile · Cofondateur de SoliBox',
      description:
        'Développeur web et mobile basé à Conakry. Cofondateur et CEO de SoliBox, 1er prix national POESAM 2026. Créateur de Sanni et Lab Oratoire.',
      ogLocale: 'fr_FR',
    },
    hero: {
      tagline: 'Je construis des produits que de vrais gens utilisent, à Conakry.',
      intro: 'Développeur web et mobile, cofondateur et CEO de SoliBox, créateur de Sanni et de Lab Oratoire.',
      seeProjects: 'Voir mes projets',
      downloadCv: 'Télécharger mon CV',
      photoAlt: 'Foula Fofana tenant son attestation 1000 TechLeaders',
      now: 'En ce moment, je fais grandir Sanni.',
      prizesLabel: 'Distinctions',
      prizes: [
        { name: 'POESAM 2026', detail: '1er prix national' },
        { name: 'SADEN Fulbright 2026', detail: '1er prix, Innovation Challenge' },
        { name: 'Salon des Étudiants Entrepreneurs 2026', detail: '1er prix, catégorie Numérique' },
      ],
    },
    projects: {
      heading: 'Projets',
      role: 'Mon rôle',
      result: 'Résultat',
      stack: 'Technologies',
      readCase: "Lire l'étude de cas",
      visit: 'Visiter',
      items: {
        solibox: {
          tagline: "Les voisins s'échangent l'énergie de leurs panneaux solaires.",
          detail:
            'Un boîtier connecté et une application mobile pour suivre la production et la consommation en temps réel, contrôler le boîtier à distance et vendre le surplus.',
          role: "Cofondateur et CEO. J'ai développé l'application mobile.",
          result: 'Équipe de 5, incubée à Orange Fab Guinée, premières installations sur de vraies maisons.',
          imageAlt: "Écrans de l'application mobile SoliBox",
          prize: '1er prix national POESAM 2026',
        },
        sanni: {
          tagline: 'Les vendeurs WhatsApp ont enfin une vraie boutique.',
          detail:
            'Ils publient leurs articles une fois, partagent un lien, et leurs clients commandent eux-mêmes, sans rien installer ni créer de compte.',
          role: "Fondateur. Je l'ai conçu, développé et mis en ligne en autonomie.",
          result: '32 vendeurs inscrits et 24 boutiques en ligne en 3 semaines, sans budget publicitaire.',
          imageAlt: "Page d'accueil de Sanni et une boutique sur mobile",
        },
        'lab-oratoire': {
          tagline: 'Apprendre à parler en public en pratiquant, chaque semaine.',
          detail:
            "Une plateforme communautaire avec des défis vidéo, des retours entre membres, un classement et une analyse d'improvisation par IA.",
          role: "Créateur. J'ai conçu et développé la plateforme.",
          result: 'Plus de 40 membres, 10 défis lancés et 10 semaines de pratique continue.',
          imageAlt: "Page d'accueil de Lab Oratoire",
        },
      },
    },
    story: {
      heading: "Mon histoire, jusqu'ici.",
      intro: 'De Mamou à mes propres produits, en huit chapitres. Fais défiler.',
      chapterOf: 'Chapitre {n} sur {total}',
      contactCta: 'Me contacter',
      chapters: [
        {
          year: '2023',
          title: 'Le point de départ',
          text: "Baccalauréat Sciences mathématiques à Mamou, mention Bien. La même année, j'entre en Génie informatique à l'Université Gamal Abdel Nasser de Conakry.",
        },
        {
          year: '2024',
          title: 'Apprendre en transmettant',
          text: "En juillet, je rejoins FATA Guinée comme bénévole, une école de programmation pour la jeunesse africaine. J'y donne mes premières formations : HTML, CSS et technologies du web.",
        },
        {
          year: '2025',
          title: 'Former, encore',
          text: "Pendant plus de 6 mois, en alternance chez Asis tech, je forme plus de 30 personnes à l'informatique de base, de la bureautique à Internet.",
        },
        {
          year: '2025',
          title: "L'Orange Digital Center",
          text: "De juillet à novembre, stage à l'Orange Digital Center pour l'Orange Summer Challenge. En équipe, on conçoit une application web et mobile, et je coordonne la partie technique. Nous finissons 2e, et ce prototype devient SoliBox.",
        },
        {
          year: '2026',
          title: 'SoliBox prend vie',
          text: "SoliBox est incubée à Orange Fab Guinée. Avec une équipe de 5, on passe du prototype aux premières installations sur de vraies maisons. En parallèle, je rejoins NG Tech comme développeur mobile, d'abord en stage.",
        },
        {
          year: '2026',
          title: 'Trois premiers prix',
          text: 'SoliBox remporte le 1er prix national POESAM, le 1er prix du SADEN Fulbright Innovation Challenge et le 1er prix du Salon des Étudiants Entrepreneurs, catégorie Numérique. La même année, je deviens Responsable Masterclass & Formation chez FATA Guinée.',
        },
        {
          year: '2026',
          title: 'Construire seul',
          text: "Je lance Lab Oratoire, une plateforme pour pratiquer la prise de parole en public, puis Sanni en septembre, la boutique en ligne des vendeurs WhatsApp. Deux produits que j'ai conçus, développés et mis en ligne moi-même.",
        },
        {
          year: "Aujourd'hui",
          title: 'La suite',
          text: "En 4e année de génie logiciel, je continue à construire, à apprendre et à transmettre. Le prochain chapitre, on peut l'écrire ensemble.",
        },
      ],
    },
    skills: {
      heading: "Mes outils, et où je m'en suis servi.",
      intro: "Choisis une technologie : les projets où je l'ai utilisée s'allument.",
      groups: { mobile: 'Mobile', web: 'Web', backend: 'Back-end' },
      also: 'Aussi : JavaScript, MySQL, Git et GitHub.',
      targets: {
        solibox: 'Application mobile IoT',
        sanni: 'Boutique en ligne',
        lab: 'Plateforme communautaire',
        ngtech: 'Développeur mobile',
      },
      usesSuffix: ', utilise {skill}',
    },
    contact: {
      heading: 'Travaillons ensemble.',
      intro: 'Un projet, une mission ou un poste ? Écris-moi, je lis tout.',
      copy: "Copier l'adresse",
      copied: 'Adresse copiée',
    },
  },

  en: {
    meta: {
      title: 'Foula Fofana · Web & mobile developer · Co-founder of SoliBox',
      description:
        'Web and mobile developer based in Conakry, Guinea. Co-founder and CEO of SoliBox, 1st national prize at POESAM 2026. Creator of Sanni and Lab Oratoire.',
      ogLocale: 'en_US',
    },
    hero: {
      tagline: 'I build products that real people use, in Conakry.',
      intro: 'Web and mobile developer, co-founder and CEO of SoliBox, creator of Sanni and Lab Oratoire.',
      seeProjects: 'See my projects',
      downloadCv: 'Download my CV (French)',
      photoAlt: 'Foula Fofana holding his 1000 TechLeaders certificate',
      now: 'Right now, I am growing Sanni.',
      prizesLabel: 'Awards',
      prizes: [
        { name: 'POESAM 2026', detail: '1st national prize' },
        { name: 'SADEN Fulbright 2026', detail: '1st prize, Innovation Challenge' },
        { name: 'Salon des Étudiants Entrepreneurs 2026', detail: '1st prize, Digital category' },
      ],
    },
    projects: {
      heading: 'Projects',
      role: 'My role',
      result: 'Outcome',
      stack: 'Tech stack',
      readCase: 'Read the case study',
      visit: 'Visit',
      items: {
        solibox: {
          tagline: 'Neighbours share the energy from their solar panels.',
          detail:
            'A connected box and a mobile app to track production and consumption in real time, control the box remotely and sell the surplus.',
          role: 'Co-founder and CEO. I built the mobile app.',
          result: 'A team of 5, incubated at Orange Fab Guinea, first installations on real homes.',
          imageAlt: 'Screens of the SoliBox mobile app',
          prize: '1st national prize, POESAM 2026',
        },
        sanni: {
          tagline: 'WhatsApp sellers finally get a real shop.',
          detail:
            'They post their items once, share a link, and their customers order on their own, with nothing to install and no account to create.',
          role: 'Founder. I designed, built and launched it on my own.',
          result: '32 sellers signed up and 24 shops online in 3 weeks, with no advertising budget.',
          imageAlt: 'Sanni home page and a shop on mobile',
        },
        'lab-oratoire': {
          tagline: 'Learning public speaking by practising, every week.',
          detail:
            'A community platform with video challenges, peer feedback, a leaderboard and AI analysis of improvised speeches.',
          role: 'Creator. I designed and built the platform.',
          result: 'Over 40 members, 10 challenges and 10 weeks of continuous practice.',
          imageAlt: 'Lab Oratoire home page',
        },
      },
    },
    story: {
      heading: 'My story so far.',
      intro: 'From Mamou to my own products, in eight chapters. Keep scrolling.',
      chapterOf: 'Chapter {n} of {total}',
      contactCta: 'Get in touch',
      chapters: [
        {
          year: '2023',
          title: 'Where it starts',
          text: 'I graduate from high school in Mamou with a science and maths baccalaureate, with honours. The same year, I start a degree in Computer Engineering at Gamal Abdel Nasser University of Conakry.',
        },
        {
          year: '2024',
          title: 'Learning by teaching',
          text: 'In July, I join FATA Guinée as a volunteer, a coding school for young Africans. There I give my first training sessions: HTML, CSS and web technologies.',
        },
        {
          year: '2025',
          title: 'Teaching, again',
          text: 'For more than 6 months, on a work-study basis at Asis tech, I train over 30 people in computer basics, from office software to the internet.',
        },
        {
          year: '2025',
          title: 'Orange Digital Center',
          text: 'From July to November, I intern at Orange Digital Center for the Orange Summer Challenge. As a team, we design a web and mobile app, and I coordinate the technical side. We finish 2nd, and that prototype becomes SoliBox.',
        },
        {
          year: '2026',
          title: 'SoliBox comes to life',
          text: 'SoliBox is incubated at Orange Fab Guinea. With a team of 5, we go from prototype to the first installations on real homes. Meanwhile, I join NG Tech as a mobile developer, first as an intern.',
        },
        {
          year: '2026',
          title: 'Three first prizes',
          text: 'SoliBox wins the 1st national prize at POESAM, 1st prize at the SADEN Fulbright Innovation Challenge and 1st prize at the Salon des Étudiants Entrepreneurs, Digital category. The same year, I become Head of Masterclasses & Training at FATA Guinée.',
        },
        {
          year: '2026',
          title: 'Building on my own',
          text: 'I launch Lab Oratoire, a platform to practise public speaking, then Sanni in September, an online shop for WhatsApp sellers. Two products I designed, built and shipped myself.',
        },
        {
          year: 'Today',
          title: 'What comes next',
          text: 'In my 4th year of software engineering, I keep building, learning and teaching. The next chapter, we can write together.',
        },
      ],
    },
    skills: {
      heading: 'My tools, and where I used them.',
      intro: 'Pick a technology: the projects where I used it light up.',
      groups: { mobile: 'Mobile', web: 'Web', backend: 'Back end' },
      also: 'Also: JavaScript, MySQL, Git and GitHub.',
      targets: {
        solibox: 'IoT mobile app',
        sanni: 'Online shop',
        lab: 'Community platform',
        ngtech: 'Mobile developer',
      },
      usesSuffix: ', uses {skill}',
    },
    contact: {
      heading: "Let's work together.",
      intro: 'A project, a freelance mission or a job? Write to me, I read everything.',
      copy: 'Copy address',
      copied: 'Address copied',
    },
  },
};
