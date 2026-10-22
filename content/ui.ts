import type { Locale } from '@/lib/i18n';
import type { UiText } from './types';

export const ui: Record<Locale, UiText> = {
  fr: {
    nav: { projects: 'Projets', story: 'Mon histoire', skills: 'Compétences', contact: 'Contact' },
    themeToggle: 'Changer de thème',
    menuToggle: 'Ouvrir ou fermer le menu',
    switchLanguage: { label: 'EN', aria: 'Read in English' },
    footer: {
      tagline: 'développeur et entrepreneur à Conakry.',
      sourceCode: 'Voir le code de ce site',
      backToTop: 'Retour en haut',
    },
    caseStudy: { back: 'Retour aux projets', others: 'Voir les autres projets', visit: 'Visiter' },
  },
  en: {
    nav: { projects: 'Projects', story: 'My story', skills: 'Skills', contact: 'Contact' },
    themeToggle: 'Toggle theme',
    menuToggle: 'Open or close the menu',
    switchLanguage: { label: 'FR', aria: 'Lire en français' },
    footer: {
      tagline: 'developer and entrepreneur in Conakry.',
      sourceCode: 'View the source of this site',
      backToTop: 'Back to top',
    },
    caseStudy: { back: 'Back to projects', others: 'See the other projects', visit: 'Visit' },
  },
};
