import Navbar from './Navbar';
import Footer from './Footer';
import CaseStudy from './CaseStudy';
import { cases } from '@/content/cases';
import { ui } from '@/content/ui';
import { casePath, homePath, type CaseSlug, type Locale } from '@/lib/i18n';

export default function CasePage({ locale, slug }: { locale: Locale; slug: CaseSlug }) {
  const { content, theme } = cases[slug];
  const other: Locale = locale === 'fr' ? 'en' : 'fr';
  const home = homePath(locale);
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar ui={ui[locale]} homeHref={home} switchHref={casePath(other, slug)} solid />
      <CaseStudy
        content={content[locale]}
        theme={theme}
        ui={ui[locale].caseStudy}
        backHref={`${home}#${slug}`}
        othersHref={`${home}#projects`}
      />
      <Footer ui={ui[locale].footer} />
    </div>
  );
}
