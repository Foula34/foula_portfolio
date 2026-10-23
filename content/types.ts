import type { CaseSlug } from '@/lib/i18n';

// Textes de l'interface commune (navigation, pied de page, études de cas).
export interface UiText {
  // blog : seulement dans les langues où des articles existent (le français pour l'instant).
  nav: { projects: string; story: string; skills: string; contact: string; blog?: string };
  themeToggle: string;
  menuToggle: string;
  switchLanguage: { label: string; aria: string };
  footer: { tagline: string; sourceCode: string; backToTop: string };
  caseStudy: { back: string; others: string; visit: string };
}

export interface HomeText {
  meta: { title: string; description: string; ogLocale: string };
  hero: {
    tagline: string;
    intro: string;
    seeProjects: string;
    downloadCv: string;
    photoAlt: string;
    prizesLabel: string;
    prizes: { name: string; detail: string }[];
  };
  projects: {
    heading: string;
    role: string;
    result: string;
    stack: string;
    readCase: string;
    visit: string;
    items: Record<
      CaseSlug,
      { tagline: string; detail: string; role: string; result: string; imageAlt: string; prize?: string }
    >;
  };
  story: {
    heading: string;
    intro: string;
    // Modèle : {n} et {total} sont remplacés (pas de fonction : le texte va vers un composant client).
    chapterOf: string;
    contactCta: string;
    chapters: { year: string; title: string; text: string; images?: { src: string; width: number; height: number; alt: string }[] }[];
  };
  skills: {
    heading: string;
    intro: string;
    groups: { mobile: string; web: string; backend: string; tools: string };
    targets: Record<'solibox' | 'sanni' | 'lab' | 'ngtech', string>;
    // Modèle lu par les lecteurs d'écran : {skill} est remplacé.
    usesSuffix: string;
  };
  services: {
    heading: string;
    intro: string;
    // tags : pour une offre sans outils techniques (la prise de parole), des mots-clés à la place des logos.
    items: Record<
      'web' | 'mobile' | 'training' | 'speaking',
      { title: string; text: string; proof: string; tags?: string[]; recent?: { label: string; text: string; alt: string } }
    >;
  };
  contact: {
    heading: string;
    intro: string;
    copy: string;
    copied: string;
  };
}

// Contenu d'une étude de cas : une suite de sections faites de blocs simples.
// Le texte entre *astérisques* est affiché en italique.
export type CaseBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | {
      kind: 'diagram';
      nodes: { label: string; note?: string; highlight?: boolean }[];
      links: { label: string; dir: 'both' | 'right' | 'left' }[];
      caption: string;
    }
  | { kind: 'roles'; rows: { who: string; access: string }[] };

export interface CaseSection {
  title: string;
  blocks: CaseBlock[];
  // Capture d'écran affichée à côté du texte (format téléphone).
  // variant 'photo' : une photo simple ; par défaut, une capture d'écran dans un cadre de téléphone.
  aside?: { src: string; width: number; height: number; alt: string; variant?: 'phone' | 'photo' };
}

export interface CaseStudyContent {
  meta: { title: string; description: string; ogDescription: string };
  title: string;
  tagline: string;
  facts: { label: string; value: string }[];
  heroImageAlt: string;
  sections: CaseSection[];
}
