import type { Locale } from '@/lib/i18n';
import type { CaseStudyContent } from '../types';

export const labOratoire: Record<Locale, CaseStudyContent> = {
  fr: {
    meta: {
      title: 'Lab Oratoire, étude de cas',
      description:
        "Une plateforme pour pratiquer la prise de parole en public : une architecture légère pensée pour un plan gratuit, et une analyse d'improvisation par IA.",
      ogDescription:
        "Une plateforme pour pratiquer la prise de parole en public : une architecture légère pensée pour un plan gratuit, et une analyse d'improvisation par IA.",
    },
    title: 'Lab Oratoire',
    tagline: 'Apprendre à parler en public en pratiquant chaque semaine, ensemble.',
    facts: [
      { label: 'Mon rôle', value: 'Créateur du club, concepteur et développeur de la plateforme' },
      { label: 'Communauté', value: 'Plus de 40 membres, 10 défis lancés, 10 semaines de pratique continue' },
      {
        label: 'Technologies',
        value: 'Next.js, Supabase (Auth, PostgreSQL, RLS), PWA, Gemini Flash, Firebase, Resend',
      },
      { label: 'En ligne', value: 'lab-oratoiregn.com' },
    ],
    heroImageAlt: "Page d'accueil de Lab Oratoire",
    sections: [
      {
        title: 'Le problème',
        blocks: [
          {
            kind: 'p',
            text: "Savoir prendre la parole est devenu une compétence demandée partout : en entretien, pour présenter un projet, ou simplement pour défendre ce qui nous tient à cœur. Elle s'acquiert en pratiquant.",
          },
          {
            kind: 'p',
            text: "En Guinée, beaucoup en ressentent le besoin, mais trouvent peu d'endroits pour s'exercer. D'où l'idée d'un club : réunir ceux qui ont le même problème pour pratiquer régulièrement, se dire ce qui va et ce qui ne va pas, et progresser ensemble.",
          },
        ],
      },
      {
        title: 'Ce que fait la plateforme',
        blocks: [
          {
            kind: 'p',
            text: "Le club est devenu une plateforme. Chaque semaine, un nouveau défi y est publié. Les membres le relèvent, se donnent des retours, suivent leur place au classement et consultent des ressources pour se préparer. Une section d'improvisation leur permet aussi de s'entraîner seuls.",
          },
        ],
      },
      {
        title: 'Décision 1 : une plateforme légère',
        blocks: [
          {
            kind: 'p',
            text: "Les vidéos des défis sont lourdes, et la plateforme tourne sur le plan gratuit de Supabase. Les stocker aurait vite rempli la base. J'ai donc fait un choix d'architecture : les vidéos passent par WhatsApp, là où les membres sont déjà, et la plateforme garde tout ce qui est léger. Les ressources vidéo sont des vidéos YouTube intégrées, pas des fichiers hébergés.",
          },
          {
            kind: 'p',
            text: "Le risque : que la plateforme devienne secondaire, et que tout se passe sur WhatsApp. Pour l'éviter, les défis et les retours ne se trouvent que sur la plateforme. Les membres y reviennent donc à chaque défi.",
          },
          {
            kind: 'diagram',
            nodes: [
              { label: 'WhatsApp', note: 'vidéos des défis' },
              { label: 'Membre' },
              { label: 'Plateforme', note: 'défis, retours, ressources', highlight: true },
            ],
            links: [
              { label: 'envoie sa vidéo', dir: 'left' },
              { label: 'découvre le défi, donne et reçoit des retours', dir: 'both' },
            ],
            caption: 'Le lourd reste sur WhatsApp, ce qui fait revenir les membres reste sur la plateforme.',
          },
        ],
      },
      {
        title: "Décision 2 : l'IA contre l'auto-évaluation",
        blocks: [
          {
            kind: 'p',
            text: "Dans la section improvisation, chaque membre s'évaluait lui-même. Difficile d'être objectif sur ses propres tics de langage. On m'a suggéré d'ajouter une analyse par IA, et je l'ai intégrée.",
          },
          {
            kind: 'p',
            text: "Le membre découvre un sujet et dispose de 30 secondes pour réfléchir, puis il s'enregistre. Son audio est transcrit en texte, et seul ce texte est envoyé à Gemini Flash, via l'API de Google, qui relève les mots parasites et les répétitions, puis fait un retour. L'audio est supprimé dès la transcription faite : la base reste légère, et la voix des membres n'est pas conservée.",
          },
          {
            kind: 'diagram',
            nodes: [
              { label: 'Enregistrement', note: 'après 30 s de réflexion' },
              { label: 'Transcription', note: "puis l'audio est supprimé" },
              { label: 'Gemini Flash', note: 'analyse du texte', highlight: true },
            ],
            links: [
              { label: 'audio', dir: 'right' },
              { label: 'texte seulement', dir: 'right' },
            ],
            caption: "Seule la transcription part vers l'IA, qui renvoie un retour au membre.",
          },
          {
            kind: 'p',
            text: 'Gemini Flash est un modèle léger avec une offre gratuite, ce qui suffit au volume actuel de la communauté.',
          },
        ],
      },
      {
        title: 'Les notifications, sans WhatsApp',
        blocks: [
          {
            kind: 'p',
            text: "Les membres sont surtout actifs sur WhatsApp : j'aurais voulu les prévenir là-bas à chaque nouveau défi. Mais l'API de WhatsApp est payante. J'ai donc combiné trois autres canaux : des notifications dans l'application, des notifications push avec Firebase Cloud Messaging, et des emails envoyés avec Resend.",
          },
        ],
      },
      {
        title: 'Le vrai défi : faire vivre la plateforme',
        blocks: [
          {
            kind: 'p',
            text: "Toutes les sections ne sont pas utilisées de la même façon. Les défis sont les plus consultés, puis l'improvisation. Les ressources, pensées pour aider à se préparer, le sont beaucoup moins.",
          },
          {
            kind: 'p',
            text: "Et comme je gère tout seul, l'activité dépend encore beaucoup de mon énergie. Rendre la communauté plus autonome, c'est le chantier sur lequel je travaille.",
          },
        ],
      },
      {
        title: "Ce que j'en retiens",
        blocks: [
          {
            kind: 'p',
            text: "Une bonne architecture tient compte des contraintes réelles : le budget, mais aussi les habitudes des utilisateurs. Et une fonctionnalité n'a de valeur que si elle est utilisée : regarder ce que les membres font vraiment m'aide à décider où mettre mon énergie.",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Lab Oratoire, case study',
      description:
        'A platform to practise public speaking: a lightweight architecture designed for a free plan, and AI analysis of improvised speeches.',
      ogDescription:
        'A platform to practise public speaking: a lightweight architecture designed for a free plan, and AI analysis of improvised speeches.',
    },
    title: 'Lab Oratoire',
    tagline: 'Learning public speaking by practising every week, together.',
    facts: [
      { label: 'My role', value: 'Founder of the club, designer and developer of the platform' },
      { label: 'Community', value: 'Over 40 members, 10 challenges, 10 weeks of continuous practice' },
      {
        label: 'Tech stack',
        value: 'Next.js, Supabase (Auth, PostgreSQL, RLS), PWA, Gemini Flash, Firebase, Resend',
      },
      { label: 'Live at', value: 'lab-oratoiregn.com' },
    ],
    heroImageAlt: 'Lab Oratoire home page',
    sections: [
      {
        title: 'The problem',
        blocks: [
          {
            kind: 'p',
            text: 'Speaking in public has become a skill expected everywhere: in job interviews, when presenting a project, or simply to stand up for what matters to us. It is learned through practice.',
          },
          {
            kind: 'p',
            text: 'In Guinea, many people feel the need, but find few places to practise. Hence the idea of a club: bringing together people with the same problem to practise regularly, tell each other what works and what doesn’t, and improve together.',
          },
        ],
      },
      {
        title: 'What the platform does',
        blocks: [
          {
            kind: 'p',
            text: 'The club became a platform. Every week, a new challenge is posted. Members take it on, give each other feedback, follow their place on the leaderboard and read resources to prepare. An improvisation section also lets them practise on their own.',
          },
        ],
      },
      {
        title: 'Decision 1: a lightweight platform',
        blocks: [
          {
            kind: 'p',
            text: "Challenge videos are heavy, and the platform runs on Supabase's free plan. Storing them would quickly fill the database. So I made an architectural choice: videos go through WhatsApp, where members already are, and the platform keeps everything lightweight. Video resources are embedded YouTube videos, not hosted files.",
          },
          {
            kind: 'p',
            text: 'The risk: the platform becoming secondary, with everything happening on WhatsApp. To avoid that, challenges and feedback live only on the platform. So members come back to it for every challenge.',
          },
          {
            kind: 'diagram',
            nodes: [
              { label: 'WhatsApp', note: 'challenge videos' },
              { label: 'Member' },
              { label: 'Platform', note: 'challenges, feedback, resources', highlight: true },
            ],
            links: [
              { label: 'sends their video', dir: 'left' },
              { label: 'discovers the challenge, gives and gets feedback', dir: 'both' },
            ],
            caption: 'The heavy part stays on WhatsApp; what brings members back stays on the platform.',
          },
        ],
      },
      {
        title: 'Decision 2: AI instead of self-assessment',
        blocks: [
          {
            kind: 'p',
            text: 'In the improvisation section, every member assessed themselves. It is hard to be objective about your own verbal tics. It was suggested to me to add AI analysis, and I built it in.',
          },
          {
            kind: 'p',
            text: "The member gets a topic and has 30 seconds to think, then records themselves. Their audio is transcribed to text, and only that text is sent to Gemini Flash, through Google's API, which spots filler words and repetitions, then gives feedback. The audio is deleted as soon as it is transcribed: the database stays light, and members' voices are not kept.",
          },
          {
            kind: 'diagram',
            nodes: [
              { label: 'Recording', note: 'after 30 s to think' },
              { label: 'Transcription', note: 'then the audio is deleted' },
              { label: 'Gemini Flash', note: 'analyses the text', highlight: true },
            ],
            links: [
              { label: 'audio', dir: 'right' },
              { label: 'text only', dir: 'right' },
            ],
            caption: 'Only the transcript goes to the AI, which sends feedback back to the member.',
          },
          {
            kind: 'p',
            text: "Gemini Flash is a lightweight model with a free tier, which is enough for the community's current volume.",
          },
        ],
      },
      {
        title: 'Notifications, without WhatsApp',
        blocks: [
          {
            kind: 'p',
            text: "Members are mostly active on WhatsApp: I would have liked to notify them there for every new challenge. But the WhatsApp API is paid. So I combined three other channels: in-app notifications, push notifications with Firebase Cloud Messaging, and emails sent with Resend.",
          },
        ],
      },
      {
        title: 'The real challenge: keeping the platform alive',
        blocks: [
          {
            kind: 'p',
            text: 'Not every section is used the same way. Challenges get the most visits, then improvisation. Resources, designed to help members prepare, get far fewer.',
          },
          {
            kind: 'p',
            text: "And since I run everything alone, activity still depends a lot on my energy. Making the community more self-sustaining is what I'm working on.",
          },
        ],
      },
      {
        title: 'What I took away',
        blocks: [
          {
            kind: 'p',
            text: 'Good architecture takes real constraints into account: the budget, but also how users actually behave. And a feature is only worth something if it is used: watching what members really do helps me decide where to put my energy.',
          },
        ],
      },
    ],
  },
};
