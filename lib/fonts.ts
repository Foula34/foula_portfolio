import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';

// Polices embarquées dans le projet : servies par le site lui-même, sans requête vers Google.
// Unbounded, large et affirmée, est réservée au nom et aux titres.
const unbounded = localFont({
  src: '../node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2',
  variable: '--font-unbounded',
  weight: '200 900',
  display: 'swap',
});

export const fontVariables = `${GeistSans.variable} ${unbounded.variable}`;
