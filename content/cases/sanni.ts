import type { Locale } from '@/lib/i18n';
import type { CaseStudyContent } from '../types';

const campaignShot = { src: '/images/sanni-campagne.jpg', width: 720, height: 1320 };

export const sanni: Record<Locale, CaseStudyContent> = {
  fr: {
    meta: {
      title: 'Sanni, étude de cas',
      description:
        "Sanni donne une vraie boutique aux vendeurs WhatsApp et Facebook. Pourquoi une PWA, comment fonctionnent les campagnes de précommande, et le vrai défi : l'activation des vendeurs.",
      ogDescription: 'Une vraie boutique pour les vendeurs WhatsApp, sans rien installer pour leurs clients.',
    },
    title: 'Sanni',
    tagline: 'Une vraie boutique pour les vendeurs WhatsApp, sans rien installer pour leurs clients.',
    facts: [
      { label: 'Mon rôle', value: 'Fondateur. Conception, développement, déploiement et support, en autonomie' },
      { label: 'En ligne depuis', value: 'Septembre 2026' },
      {
        label: 'Technologies',
        value: 'Next.js, TypeScript, Supabase, Tailwind CSS, PWA, Firebase Cloud Messaging, Resend',
      },
      {
        label: 'Premiers résultats',
        value: '32 vendeurs inscrits et 24 boutiques en ligne en 3 semaines, sans publicité',
      },
    ],
    heroImageAlt: "Page d'accueil de Sanni et une boutique de vendeur sur mobile",
    sections: [
      {
        title: 'Le problème',
        blocks: [
          {
            kind: 'p',
            text: 'Beaucoup de commerçants vendent sur WhatsApp et Facebook. Ils publient leurs articles dans leurs groupes, puis demandent aux intéressés de leur écrire en privé.',
          },
          {
            kind: 'p',
            text: "Résultat : des dizaines de messages qui posent les mêmes questions. Quel est le prix ? Ce modèle est-il disponible ? Comment se passe la livraison ? Le vendeur passe des heures à répondre, souvent à des personnes qui n'achètent pas, et les vraies commandes se perdent au milieu de ses conversations.",
          },
        ],
      },
      {
        title: 'Ce que fait Sanni',
        blocks: [
          {
            kind: 'p',
            text: 'Le vendeur crée sa boutique sur Sanni, publie ses articles une seule fois, puis partage un lien dans ses groupes WhatsApp ou sur Facebook. Ses clients y trouvent tout : photos, prix, disponibilité. Ils commandent eux-mêmes, sans rien installer et sans créer de compte.',
          },
          {
            kind: 'p',
            text: "Côté vendeur, chaque commande est rangée : qui a commandé, quoi, et combien il doit payer. Sanni s'adapte aux deux façons de vendre que je vois autour de moi : la précommande, où le vendeur réunit les commandes avant d'aller chez son fournisseur, et la vente d'un stock déjà en main.",
          },
        ],
      },
      {
        title: 'La campagne, au cœur de la précommande',
        aside: {
          ...campaignShot,
          alt: "Écran de campagne d'un vendeur Sanni : clôture, commandes à confirmer, montant réuni, fournisseur et distribution",
        },
        blocks: [
          {
            kind: 'p',
            text: 'Pour la précommande, le vendeur ouvre une campagne avec une date de clôture. Il suit les commandes à confirmer et le montant déjà réuni. Après la clôture, il passe au fournisseur, puis suit la distribution, commande par commande.',
          },
        ],
      },
      {
        title: 'Décision technique : une PWA, pas une application',
        blocks: [
          {
            kind: 'p',
            text: "La raison principale, c'est le client. Il arrive depuis un lien WhatsApp. Lui demander d'installer une application avant de voir les articles, c'est le perdre. Avec une PWA, le lien ouvre directement la boutique.",
          },
          {
            kind: 'p',
            text: "Pour le vendeur, Sanni reste installable sur l'écran d'accueil comme une application. Et pour moi, c'était beaucoup plus rapide à construire seul : un seul code web, pas de choix entre natif et multiplateforme, et pas d'attente de validation sur les stores.",
          },
          {
            kind: 'p',
            text: "Le compromis accepté : Sanni n'est pas visible sur le Play Store. On le trouve par son lien, là où les vendeurs et leurs clients sont déjà : WhatsApp et Facebook.",
          },
        ],
      },
      {
        title: "Le vrai défi n'est pas technique",
        blocks: [
          {
            kind: 'p',
            text: "Le problème existe, et les premières inscriptions l'ont confirmé. Mais le vrai défi, c'est l'activation : peu de vendeurs vont seuls de l'inscription à leur première boutique publiée, puis partagée dans leurs groupes.",
          },
          {
            kind: 'p',
            text: "Ce que je fais pour y répondre : j'accompagne moi-même les vendeurs jusqu'à leur première campagne partagée, pour comprendre où ils bloquent. Et je prépare des vidéos de démonstration pour montrer, en quelques minutes, comment Sanni fonctionne.",
          },
        ],
      },
      {
        title: "Ce que j'en retiens",
        blocks: [
          {
            kind: 'p',
            text: "Résoudre un vrai problème ne suffit pas. Il faut que le vendeur atteigne vite son premier succès : une boutique partagée, puis une première commande. Le parcours qui l'y mène fait partie du produit, au même titre que le code.",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Sanni, case study',
      description:
        'Sanni gives WhatsApp and Facebook sellers a real shop. Why a PWA, how pre-order campaigns work, and the real challenge: seller activation.',
      ogDescription: 'A real shop for WhatsApp sellers, with nothing for their customers to install.',
    },
    title: 'Sanni',
    tagline: 'A real shop for WhatsApp sellers, with nothing for their customers to install.',
    facts: [
      { label: 'My role', value: 'Founder. Design, development, deployment and support, on my own' },
      { label: 'Live since', value: 'September 2026' },
      {
        label: 'Tech stack',
        value: 'Next.js, TypeScript, Supabase, Tailwind CSS, PWA, Firebase Cloud Messaging, Resend',
      },
      {
        label: 'Early results',
        value: '32 sellers signed up and 24 shops online in 3 weeks, with no advertising',
      },
    ],
    heroImageAlt: 'Sanni home page and a seller shop on mobile',
    sections: [
      {
        title: 'The problem',
        blocks: [
          {
            kind: 'p',
            text: 'Many sellers sell on WhatsApp and Facebook. They post their items in their groups, then ask anyone interested to message them privately.',
          },
          {
            kind: 'p',
            text: "The result: dozens of messages asking the same questions. What's the price? Is this model available? How does delivery work? Sellers spend hours replying, often to people who never buy, and real orders get lost in their conversations.",
          },
        ],
      },
      {
        title: 'What Sanni does',
        blocks: [
          {
            kind: 'p',
            text: 'Sellers create their shop on Sanni, post their items once, then share a link in their WhatsApp groups or on Facebook. Customers find everything there: photos, prices, availability. They order on their own, with nothing to install and no account to create.',
          },
          {
            kind: 'p',
            text: 'On the seller side, every order is organised: who ordered, what, and how much they owe. Sanni fits the two ways of selling I see around me: pre-orders, where sellers collect orders before going to their supplier, and selling stock already in hand.',
          },
        ],
      },
      {
        title: 'The campaign, at the heart of pre-orders',
        aside: {
          ...campaignShot,
          alt: "A Sanni seller's campaign screen: closing date, orders to confirm, amount collected, supplier and delivery",
        },
        blocks: [
          {
            kind: 'p',
            text: 'For pre-orders, the seller opens a campaign with a closing date. They track the orders to confirm and the amount already collected. After closing, they move on to the supplier, then track delivery, order by order.',
          },
        ],
      },
      {
        title: 'Technical decision: a PWA, not an app',
        blocks: [
          {
            kind: 'p',
            text: 'The main reason is the customer. They arrive from a WhatsApp link. Asking them to install an app before they can see the items means losing them. With a PWA, the link opens the shop directly.',
          },
          {
            kind: 'p',
            text: "For sellers, Sanni can still be installed on the home screen like an app. And for me, it was much faster to build alone: a single web codebase, no choice between native and cross-platform, and no waiting for app store review.",
          },
          {
            kind: 'p',
            text: "The trade-off I accepted: Sanni isn't on the Play Store. People find it through its link, where sellers and their customers already are: WhatsApp and Facebook.",
          },
        ],
      },
      {
        title: "The real challenge isn't technical",
        blocks: [
          {
            kind: 'p',
            text: 'The problem is real, and the first sign-ups confirmed it. But the real challenge is activation: few sellers go on their own from signing up to their first published shop, shared in their groups.',
          },
          {
            kind: 'p',
            text: "What I'm doing about it: I personally walk sellers through to their first shared campaign, to understand where they get stuck. And I'm preparing demo videos to show, in a few minutes, how Sanni works.",
          },
        ],
      },
      {
        title: 'What I took away',
        blocks: [
          {
            kind: 'p',
            text: 'Solving a real problem is not enough. Sellers need to reach their first win quickly: a shared shop, then a first order. The path that gets them there is part of the product, just like the code.',
          },
        ],
      },
    ],
  },
};
