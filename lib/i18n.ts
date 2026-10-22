// Langues du site. Le français reste à la racine (/, /projets/sanni) pour que les liens déjà
// partagés continuent de marcher ; l'anglais vit sous /en (/en, /en/projects/sanni).
export type Locale = 'fr' | 'en';

export const SITE_URL = 'https://foula-portfolio.vercel.app';

export const caseSlugs = ['solibox', 'sanni', 'lab-oratoire'] as const;
export type CaseSlug = (typeof caseSlugs)[number];

export function homePath(locale: Locale) {
  return locale === 'fr' ? '/' : '/en';
}

export function casePath(locale: Locale, slug: CaseSlug) {
  return locale === 'fr' ? `/projets/${slug}` : `/en/projects/${slug}`;
}

// Balises hreflang : chaque page déclare sa version dans l'autre langue,
// pour que Google montre la bonne selon le visiteur.
export function alternates(locale: Locale, slug?: CaseSlug) {
  const fr = slug ? casePath('fr', slug) : homePath('fr');
  const en = slug ? casePath('en', slug) : homePath('en');
  return {
    canonical: locale === 'fr' ? fr : en,
    languages: { fr, en, 'x-default': fr },
  };
}
