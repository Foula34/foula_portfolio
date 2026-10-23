import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Story from './Story';
import Skills from './Skills';
import Contact from './Contact';
import LatestPost from './LatestPost';
import Services from './Services';
import Footer from './Footer';
import { home } from '@/content/home';
import { ui } from '@/content/ui';
import { homePath, type Locale } from '@/lib/i18n';

export default function HomePage({ locale }: { locale: Locale }) {
  const t = home[locale];
  const other: Locale = locale === 'fr' ? 'en' : 'fr';
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar ui={ui[locale]} homeHref={homePath(locale)} switchHref={homePath(other)} />
      <main>
        <Hero t={t.hero} />
        <Projects t={t.projects} locale={locale} />
        <Story t={t.story} />
        <Skills t={t.skills} />
        {locale === 'fr' && <LatestPost />}
        <Services t={t.services} locale={locale} />
        <Contact t={t.contact} />
      </main>
      <Footer ui={ui[locale].footer} />
    </div>
  );
}
