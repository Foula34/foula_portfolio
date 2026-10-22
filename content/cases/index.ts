import type { CaseSlug } from '@/lib/i18n';
import type { CaseStudyContent } from '../types';
import type { Locale } from '@/lib/i18n';
import { solibox } from './solibox';
import { sanni } from './sanni';
import { labOratoire } from './lab-oratoire';

// Ce qui ne dépend pas de la langue : couleurs du produit, image principale, lien.
export interface CaseTheme {
  headerBg: string;
  headerFg: string;
  headerMuted: string;
  headerLine: string;
  buttonBg: string;
  buttonFg: string;
  diagramAccent: string;
  asideFrame: string;
  heroImage: { src: string; width: number; height: number };
  url: string;
  urlLabel: string;
}

export const cases: Record<CaseSlug, { content: Record<Locale, CaseStudyContent>; theme: CaseTheme }> = {
  solibox: {
    content: solibox,
    theme: {
      headerBg: '#F88300',
      headerFg: '#1E1200',
      headerMuted: '#4D2E00',
      headerLine: 'rgba(30, 18, 0, 0.25)',
      buttonBg: '#1E1200',
      buttonFg: '#F88300',
      diagramAccent: '#F88300',
      asideFrame: '#0A0F14',
      heroImage: { src: '/images/solibox-app.png', width: 1348, height: 607 },
      url: 'https://soliboxgn.com',
      urlLabel: 'soliboxgn.com',
    },
  },
  sanni: {
    content: sanni,
    theme: {
      headerBg: '#1D1927',
      headerFg: '#F6F1E9',
      headerMuted: '#A9A2B8',
      headerLine: 'rgba(246, 241, 233, 0.2)',
      buttonBg: '#E8650F',
      buttonFg: '#1D1927',
      diagramAccent: '#E8650F',
      asideFrame: '#1D1927',
      heroImage: { src: '/images/sanni.jpg', width: 1600, height: 1000 },
      url: 'https://sanniya.com',
      urlLabel: 'sanniya.com',
    },
  },
  'lab-oratoire': {
    content: labOratoire,
    theme: {
      headerBg: '#0E1730',
      headerFg: '#F3EFE4',
      headerMuted: '#9AA4C0',
      headerLine: 'rgba(243, 239, 228, 0.2)',
      buttonBg: '#0E1730',
      buttonFg: '#E2B33C',
      diagramAccent: '#E2B33C',
      asideFrame: '#0E1730',
      heroImage: { src: '/images/lab-oratoire.png', width: 1348, height: 607 },
      url: 'https://lab-oratoiregn.com',
      urlLabel: 'lab-oratoiregn.com',
    },
  },
};
