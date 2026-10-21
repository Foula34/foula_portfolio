import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

// Polices embarquées dans le projet (paquet `geist`) : servies par le site lui-même,
// sans requête vers Google, et sans saut de texte au chargement.

const siteUrl = 'https://foula-portfolio.vercel.app';
const title = 'Foula Fofana — Développeur web & mobile';
const description =
  'Développeur web et mobile basé à Conakry. Cofondateur et CEO de SoliBox, 1er prix national POESAM 2026. Créateur de Sanni et Lab Oratoire.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${title} · Cofondateur de SoliBox`,
  description,
  authors: [{ name: 'Foula Fofana' }],
  keywords: [
    'Foula Fofana',
    'développeur',
    'Next.js',
    'Flutter',
    'Supabase',
    'SoliBox',
    'Sanni',
    'Lab Oratoire',
    'Conakry',
    'Guinée',
    'portfolio',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    title,
    description,
    images: [{ url: '/images/foula.jpg', alt: 'Foula Fofana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/foula.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

// Appliqué avant l'affichage pour éviter un flash de mauvais thème.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      data-theme="light"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
