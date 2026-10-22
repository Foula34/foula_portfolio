import type { Locale } from '@/lib/i18n';
import type { CaseStudyContent } from '../types';

const portraitAside = { src: '/images/foula-solibox.jpg', width: 382, height: 700, variant: 'photo' as const };
const osAside = { src: '/images/solibox-os.jpg', width: 600, height: 1600 };

export const solibox: Record<Locale, CaseStudyContent> = {
  fr: {
    meta: {
      title: 'SoliBox, étude de cas',
      description:
        "Comment l'équipe SoliBox est passée d'un serveur local, puis d'une lecture en boucle sur Supabase, à MQTT pour piloter un boîtier solaire en temps réel.",
      ogDescription: "Partager le surplus d'énergie solaire entre voisins, et le piloter en temps réel avec MQTT.",
    },
    title: 'SoliBox',
    tagline: "Partager le surplus d'énergie solaire entre voisins, et le piloter en temps réel depuis un téléphone.",
    facts: [
      { label: 'Mon rôle', value: "Cofondateur et CEO, développeur de l'application mobile" },
      { label: 'Équipe', value: '5 personnes, incubée à Orange Fab Guinée' },
      { label: 'Technologies', value: 'Flutter, ESP32, MQTT (HiveMQ), Supabase' },
      {
        label: 'Distinctions',
        value: '1er prix national POESAM 2026, 1er prix SADEN Fulbright 2026, 1er prix Salon des Étudiants Entrepreneurs 2026',
      },
    ],
    heroImageAlt: "Écrans de l'application mobile SoliBox : consommation, tableau de bord et recharge",
    sections: [
      {
        title: 'Le problème',
        blocks: [
          {
            kind: 'p',
            text: "En Guinée, de nombreux foyers ont installé des panneaux solaires. En journée, ils produisent plus qu'ils ne consomment : la batterie se charge pendant que la maison est souvent vide, et le surplus est perdu.",
          },
          {
            kind: 'p',
            text: "Juste à côté, un voisin a besoin d'électricité mais n'a pas les moyens de s'offrir une installation solaire, qui coûte cher. SoliBox relie les deux : le surplus est partagé avec le voisin, qui le paie. Le producteur gagne un revenu, le voisin accède à l'énergie.",
          },
        ],
      },
      {
        title: 'Ce que nous avons construit',
        aside: { ...portraitAside, alt: 'Foula Fofana en polo et casquette SoliBox, bras croisés' },
        blocks: [
          {
            kind: 'p',
            text: "Un boîtier connecté, piloté par un ESP32, qui mesure l'énergie et commande un relais : quand le relais est activé, le courant passe vers le voisin ; désactivé, il est coupé.",
          },
          {
            kind: 'p',
            text: "J'ai développé l'application mobile en Flutter. Elle affiche la production et la consommation en temps réel, et permet d'activer ou de couper le relais à distance, d'un appui sur un bouton.",
          },
        ],
      },
      {
        title: 'Le vrai défi : parler au boîtier',
        blocks: [
          {
            kind: 'p',
            text: "Tout repose sur une chose : quand l'utilisateur appuie sur le bouton, le relais doit réagir tout de suite, même sur un réseau mobile faible. Il nous a fallu trois essais pour y arriver.",
          },
          { kind: 'h3', text: "Essai 1 : un serveur local sur l'ESP32" },
          {
            kind: 'p',
            text: "L'application parlait directement au boîtier. Simple, mais le téléphone et l'ESP32 devaient être sur le même réseau Wi-Fi. Impossible de piloter le boîtier à distance.",
          },
          {
            kind: 'diagram',
            nodes: [{ label: 'Application', note: 'téléphone' }, { label: 'ESP32', note: 'serveur local' }],
            links: [{ label: 'même réseau Wi-Fi obligatoire', dir: 'both' }],
            caption: 'Essai 1 : communication directe, limitée au réseau local.',
          },
          { kind: 'h3', text: 'Essai 2 : Supabase comme passerelle' },
          {
            kind: 'p',
            text: "L'application écrivait la commande dans une table Supabase, et l'ESP32 relisait cette table en boucle pour savoir s'il devait activer le relais. C'est du *polling* : en HTTP, c'est toujours le client qui demande, le boîtier ne peut pas être prévenu.",
          },
          {
            kind: 'p',
            text: "Résultat : un délai entre l'appui et la réaction du relais, qui s'aggravait sur un réseau faible, et un boîtier occupé à interroger la base même quand rien ne changeait.",
          },
          {
            kind: 'diagram',
            nodes: [{ label: 'Application' }, { label: 'Supabase', note: 'table de commande' }, { label: 'ESP32' }],
            links: [
              { label: 'écrit la commande', dir: 'right' },
              { label: 'relit la table en boucle', dir: 'left' },
            ],
            caption: 'Essai 2 : le boîtier interroge la base à intervalles réguliers.',
          },
          { kind: 'h3', text: 'Essai 3 : MQTT avec le broker HiveMQ' },
          {
            kind: 'p',
            text: "MQTT fonctionne en publication et abonnement. L'application et le boîtier gardent une connexion ouverte avec un broker, HiveMQ. Quand l'utilisateur appuie sur le bouton, l'application publie la commande sur un topic, et le broker la transmet aussitôt au boîtier, abonné à ce topic. Dans l'autre sens, chaque nouvelle mesure du boîtier arrive directement dans l'application.",
          },
          {
            kind: 'p',
            text: "Plus de lecture en boucle, plus de minuterie à régler : le boîtier n'interroge plus, il est notifié. Les messages MQTT sont aussi très légers, ce qui convient bien à un ESP32.",
          },
          {
            kind: 'diagram',
            nodes: [{ label: 'Application' }, { label: 'HiveMQ', note: 'broker MQTT', highlight: true }, { label: 'ESP32' }],
            links: [
              { label: 'publie la commande, reçoit les mesures', dir: 'both' },
              { label: 'pousse la commande, publie les mesures', dir: 'both' },
            ],
            caption: "Essai 3 : chacun est notifié dès que l'autre publie.",
          },
        ],
      },
      {
        title: 'Et Supabase ?',
        blocks: [
          {
            kind: 'p',
            text: "Supabase est resté, pour ce qu'il fait bien : l'authentification des utilisateurs. MQTT gère le temps réel, Supabase gère les comptes.",
          },
          {
            kind: 'p',
            text: "Prochaine étape prévue : garder dans Supabase l'historique de consommation, pour que chaque producteur et chaque consommateur sache combien il a partagé ou consommé.",
          },
        ],
      },
      {
        title: "L'outil interne de l'équipe : SoliBox OS",
        aside: { ...osAside, alt: 'Menu de SoliBox OS : pilotage, finances et produit' },
        blocks: [
          {
            kind: 'p',
            text: "Piloter une startup, c'est aussi gérer des tâches, des dépenses, des compétitions et des documents. Plutôt que d'éparpiller tout ça entre plusieurs outils externes, j'ai construit SoliBox OS, une plateforme de gestion réservée à l'équipe. Tout est au même endroit, et nos données restent entre nous.",
          },
          {
            kind: 'p',
            text: 'On y suit le pilotage (tableau de bord, tâches, réunions, objectifs), les finances (financements, dépenses, achats, inventaire), le produit (application, hardware, tests), ainsi que nos compétitions, nos prix et nos documents.',
          },
          { kind: 'p', text: "L'outil est organisé par rôles, pour que chacun ne voie que ce qui le concerne :" },
          {
            kind: 'roles',
            rows: [
              { who: 'CEO et RAF', access: 'Tout, y compris les documents sensibles. Eux seuls valident les dépenses.' },
              { who: "Membres de l'équipe", access: 'Tâches, réunions, produit. Ils peuvent proposer une dépense.' },
              { who: 'Collaborateurs externes', access: 'Seulement ce dont ils ont besoin, sans accès aux finances.' },
              {
                who: 'Bailleurs de fonds',
                access: 'Les rapports financiers que nous choisissons de partager, exportables en PDF.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Même stack que mes autres projets : Next.js, Supabase, Tailwind CSS, Firebase Cloud Messaging et Resend, en PWA.',
          },
        ],
      },
      {
        title: "Ce que j'en retiens",
        blocks: [
          {
            kind: 'p',
            text: "Le bon outil dépend de la façon dont les données circulent. Pour lire des données à la demande, une API classique suffit. Pour réagir à un événement en temps réel entre un objet et une application, il faut un modèle où l'on est prévenu, pas un modèle où l'on redemande sans cesse.",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'SoliBox, case study',
      description:
        'How the SoliBox team moved from a local server, then from polling Supabase, to MQTT to control a solar box in real time.',
      ogDescription: 'Sharing surplus solar energy between neighbours, and controlling it in real time with MQTT.',
    },
    title: 'SoliBox',
    tagline: 'Sharing surplus solar energy between neighbours, and controlling it in real time from a phone.',
    facts: [
      { label: 'My role', value: 'Co-founder and CEO, developer of the mobile app' },
      { label: 'Team', value: '5 people, incubated at Orange Fab Guinea' },
      { label: 'Tech stack', value: 'Flutter, ESP32, MQTT (HiveMQ), Supabase' },
      {
        label: 'Awards',
        value: '1st national prize POESAM 2026, 1st prize SADEN Fulbright 2026, 1st prize Salon des Étudiants Entrepreneurs 2026',
      },
    ],
    heroImageAlt: 'Screens of the SoliBox mobile app: consumption, dashboard and top-up',
    sections: [
      {
        title: 'The problem',
        blocks: [
          {
            kind: 'p',
            text: 'In Guinea, many households have installed solar panels. During the day, they produce more than they use: the battery charges while the house is often empty, and the surplus goes to waste.',
          },
          {
            kind: 'p',
            text: "Right next door, a neighbour needs electricity but can't afford a solar installation, which is expensive. SoliBox connects the two: the surplus is shared with the neighbour, who pays for it. The producer earns an income, the neighbour gets access to energy.",
          },
        ],
      },
      {
        title: 'What we built',
        aside: { ...portraitAside, alt: 'Foula Fofana in a SoliBox polo shirt and cap, arms crossed' },
        blocks: [
          {
            kind: 'p',
            text: 'A connected box, driven by an ESP32, that measures energy and controls a relay: when the relay is on, power flows to the neighbour; when it is off, it is cut.',
          },
          {
            kind: 'p',
            text: 'I built the mobile app in Flutter. It shows production and consumption in real time, and lets the user switch the relay on or off remotely, with a single tap.',
          },
        ],
      },
      {
        title: 'The real challenge: talking to the box',
        blocks: [
          {
            kind: 'p',
            text: 'Everything depends on one thing: when the user taps the button, the relay must react immediately, even on a weak mobile network. It took us three attempts to get there.',
          },
          { kind: 'h3', text: 'Attempt 1: a local server on the ESP32' },
          {
            kind: 'p',
            text: "The app talked directly to the box. Simple, but the phone and the ESP32 had to be on the same Wi-Fi network. Controlling the box remotely was impossible.",
          },
          {
            kind: 'diagram',
            nodes: [{ label: 'App', note: 'phone' }, { label: 'ESP32', note: 'local server' }],
            links: [{ label: 'same Wi-Fi network required', dir: 'both' }],
            caption: 'Attempt 1: direct communication, limited to the local network.',
          },
          { kind: 'h3', text: 'Attempt 2: Supabase as a relay' },
          {
            kind: 'p',
            text: "The app wrote the command to a Supabase table, and the ESP32 read that table in a loop to know whether to switch the relay on. That's *polling*: with HTTP, the client always has to ask, so the box can't be notified.",
          },
          {
            kind: 'p',
            text: 'The result: a delay between the tap and the relay reacting, which got worse on a weak network, and a box busy querying the database even when nothing had changed.',
          },
          {
            kind: 'diagram',
            nodes: [{ label: 'App' }, { label: 'Supabase', note: 'command table' }, { label: 'ESP32' }],
            links: [
              { label: 'writes the command', dir: 'right' },
              { label: 'reads the table in a loop', dir: 'left' },
            ],
            caption: 'Attempt 2: the box queries the database at regular intervals.',
          },
          { kind: 'h3', text: 'Attempt 3: MQTT with the HiveMQ broker' },
          {
            kind: 'p',
            text: 'MQTT works on publish and subscribe. The app and the box both keep an open connection to a broker, HiveMQ. When the user taps the button, the app publishes the command to a topic, and the broker instantly forwards it to the box, which is subscribed to that topic. In the other direction, every new reading from the box goes straight to the app.',
          },
          {
            kind: 'p',
            text: "No more polling loop, no more timer to tune: the box no longer asks, it gets notified. MQTT messages are also very lightweight, which suits an ESP32 well.",
          },
          {
            kind: 'diagram',
            nodes: [{ label: 'App' }, { label: 'HiveMQ', note: 'MQTT broker', highlight: true }, { label: 'ESP32' }],
            links: [
              { label: 'publishes commands, receives readings', dir: 'both' },
              { label: 'pushes commands, publishes readings', dir: 'both' },
            ],
            caption: 'Attempt 3: each side is notified as soon as the other publishes.',
          },
        ],
      },
      {
        title: 'What about Supabase?',
        blocks: [
          {
            kind: 'p',
            text: 'Supabase stayed, for what it does well: user authentication. MQTT handles real time, Supabase handles accounts.',
          },
          {
            kind: 'p',
            text: 'Planned next step: storing the consumption history in Supabase, so every producer and every consumer knows how much they have shared or used.',
          },
        ],
      },
      {
        title: "The team's internal tool: SoliBox OS",
        aside: { ...osAside, alt: 'SoliBox OS menu: management, finance and product' },
        blocks: [
          {
            kind: 'p',
            text: 'Running a startup also means managing tasks, expenses, competitions and documents. Rather than scattering all of that across several external tools, I built SoliBox OS, a management platform for the team only. Everything is in one place, and our data stays with us.',
          },
          {
            kind: 'p',
            text: 'We use it to track management (dashboard, tasks, meetings, objectives), finance (funding, expenses, purchases, inventory) and product (app, hardware, testing), as well as our competitions, awards and documents.',
          },
          { kind: 'p', text: 'The tool is organised by role, so everyone only sees what concerns them:' },
          {
            kind: 'roles',
            rows: [
              { who: 'CEO and Head of Finance', access: 'Everything, including sensitive documents. Only they can approve expenses.' },
              { who: 'Team members', access: 'Tasks, meetings, product. They can submit an expense.' },
              { who: 'External collaborators', access: 'Only what they need, with no access to finance.' },
              { who: 'Funders', access: 'The financial reports we choose to share, exportable as PDF.' },
            ],
          },
          {
            kind: 'p',
            text: 'Same stack as my other projects: Next.js, Supabase, Tailwind CSS, Firebase Cloud Messaging and Resend, as a PWA.',
          },
        ],
      },
      {
        title: 'What I took away',
        blocks: [
          {
            kind: 'p',
            text: 'The right tool depends on how data flows. To read data on demand, a regular API is enough. To react to an event in real time between a device and an app, you need a model where you get notified, not one where you keep asking.',
          },
        ],
      },
    ],
  },
};
