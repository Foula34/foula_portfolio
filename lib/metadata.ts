import type { Metadata, Viewport } from 'next';
import { SITE_URL, alternates, type CaseSlug, type Locale } from './i18n';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

// Métadonnées d'une page : titre, description, aperçus de lien et versions linguistiques.
export function pageMetadata({
  locale,
  slug,
  title,
  description,
  ogDescription,
  image,
  ogLocale,
}: {
  locale: Locale;
  slug?: CaseSlug;
  title: string;
  description: string;
  ogDescription?: string;
  image: { url: string; alt: string };
  ogLocale: string;
}): Metadata {
  const alt = alternates(locale, slug);
  const shareDescription = ogDescription ?? description;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: 'Foula Fofana' }],
    alternates: alt,
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: alt.canonical,
      title,
      description: shareDescription,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description: shareDescription, images: [image.url] },
  };
}
