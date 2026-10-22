import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cases } from '@/content/cases';
import { home } from '@/content/home';
import { caseSlugs, type CaseSlug, type Locale } from './i18n';
import { pageMetadata } from './metadata';

export function homeMetadata(locale: Locale): Metadata {
  const t = home[locale];
  return pageMetadata({
    locale,
    title: t.meta.title,
    description: t.meta.description,
    image: { url: '/images/foula.jpg', alt: 'Foula Fofana' },
    ogLocale: t.meta.ogLocale,
  });
}

export function caseStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export function toCaseSlug(slug: string): CaseSlug {
  if (!(caseSlugs as readonly string[]).includes(slug)) notFound();
  return slug as CaseSlug;
}

export function caseMetadata(locale: Locale, slug: CaseSlug): Metadata {
  const { content, theme } = cases[slug];
  const c = content[locale];
  return pageMetadata({
    locale,
    slug,
    title: `${c.meta.title} · Foula Fofana`,
    description: c.meta.description,
    ogDescription: c.meta.ogDescription,
    image: { url: theme.heroImage.src, alt: c.heroImageAlt },
    ogLocale: home[locale].meta.ogLocale,
  });
}
