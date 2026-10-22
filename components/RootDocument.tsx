import type { Locale } from '@/lib/i18n';
import { fontVariables } from '@/lib/fonts';

// Appliqué avant l'affichage pour éviter un flash de mauvais thème.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

// Squelette HTML commun aux deux langues : seule la valeur de lang change.
export default function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning className={fontVariables}>
      {/* eslint-disable-next-line @next/next/no-head-element -- composant utilisé seulement par les layouts racines */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
