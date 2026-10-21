import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/CaseSection';
import FlowDiagram from '@/components/FlowDiagram';

const title = 'Lab Oratoire, étude de cas';
const description =
  "Une plateforme pour pratiquer la prise de parole en public : une architecture légère pensée pour un plan gratuit, et une analyse d'improvisation par IA.";

export const metadata: Metadata = {
  title: `${title} · Foula Fofana`,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/images/lab-oratoire.png', alt: "Page d'accueil de Lab Oratoire" }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/lab-oratoire.png'] },
};

const GOLD = '#E2B33C';

const facts = [
  { label: 'Mon rôle', value: 'Créateur du club, concepteur et développeur de la plateforme' },
  { label: 'Communauté', value: 'Plus de 40 membres, 10 défis lancés, 10 semaines de pratique continue' },
  { label: 'Technologies', value: 'Next.js, Supabase (Auth, PostgreSQL, RLS), PWA, Gemini Flash, Firebase, Resend' },
  { label: 'En ligne', value: 'lab-oratoiregn.com' },
];

export default function LabOratoireCaseStudy() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar solid />
      <main className="pt-16 lg:pt-20">
        <header className="bg-[#0E1730] text-[#F3EFE4] px-6 pt-12 lg:pt-16 pb-16 lg:pb-20">
          <div className="max-w-content mx-auto">
            <Link href="/#lab-oratoire" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
              <ArrowLeft size={16} />
              Retour aux projets
            </Link>
            <h1 className="mt-8 font-unbounded font-extrabold tracking-[-0.04em] leading-[0.92] text-[clamp(2.8rem,9vw,7rem)]">
              Lab Oratoire
            </h1>
            <p className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight max-w-3xl leading-snug">
              Apprendre à parler en public en pratiquant chaque semaine, ensemble.
            </p>
            <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-[#F3EFE4]/20 pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-[#9AA4C0]">{f.label}</dt>
                  <dd className="mt-1 font-medium leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="px-6">
          <div className="max-w-content mx-auto">
            <div className="py-14">
              <Image
                src="/images/lab-oratoire.png"
                alt="Page d'accueil de Lab Oratoire"
                width={1348}
                height={607}
                priority
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="w-full rounded-2xl ring-1 ring-border"
              />
            </div>

            <Section title="Le problème">
              <p>
                Savoir prendre la parole est devenu une compétence demandée partout : en entretien, pour présenter un
                projet, ou simplement pour défendre ce qui nous tient à cœur. Elle s&apos;acquiert en pratiquant.
              </p>
              <p>
                En Guinée, beaucoup en ressentent le besoin, mais trouvent peu d&apos;endroits pour s&apos;exercer.
                D&apos;où l&apos;idée d&apos;un club : réunir ceux qui ont le même problème pour pratiquer
                régulièrement, se dire ce qui va et ce qui ne va pas, et progresser ensemble.
              </p>
            </Section>

            <Section title="Ce que fait la plateforme">
              <p>
                Le club est devenu une plateforme. Chaque semaine, un nouveau défi y est publié. Les membres le
                relèvent, se donnent des retours, suivent leur place au classement et consultent des ressources pour
                se préparer. Une section d&apos;improvisation leur permet aussi de s&apos;entraîner seuls.
              </p>
            </Section>

            <Section title="Décision 1 : une plateforme légère">
              <p>
                Les vidéos des défis sont lourdes, et la plateforme tourne sur le plan gratuit de Supabase. Les
                stocker aurait vite rempli la base. J&apos;ai donc fait un choix d&apos;architecture : les vidéos
                passent par WhatsApp, là où les membres sont déjà, et la plateforme garde tout ce qui est léger. Les
                ressources vidéo sont des vidéos YouTube intégrées, pas des fichiers hébergés.
              </p>
              <p>
                Le risque : que la plateforme devienne secondaire, et que tout se passe sur WhatsApp. Pour
                l&apos;éviter, les défis et les retours ne se trouvent que sur la plateforme. Les membres y reviennent
                donc à chaque défi.
              </p>
              <FlowDiagram
                accent={GOLD}
                nodes={[
                  { label: 'WhatsApp', note: 'vidéos des défis' },
                  { label: 'Membre' },
                  { label: 'Plateforme', note: 'défis, retours, ressources', highlight: true },
                ]}
                links={[
                  { label: 'envoie sa vidéo', dir: 'left' },
                  { label: 'découvre le défi, donne et reçoit des retours', dir: 'both' },
                ]}
                caption="Le lourd reste sur WhatsApp, ce qui fait revenir les membres reste sur la plateforme."
              />
            </Section>

            <Section title="Décision 2 : l'IA contre l'auto-évaluation">
              <p>
                Dans la section improvisation, chaque membre s&apos;évaluait lui-même. Difficile d&apos;être objectif
                sur ses propres tics de langage. On m&apos;a suggéré d&apos;ajouter une analyse par IA, et je l&apos;ai intégrée.
              </p>
              <p>
                Le membre découvre un sujet et dispose de 30 secondes pour réfléchir, puis il s&apos;enregistre. Son
                audio est transcrit en texte, et seul ce texte est envoyé à Gemini Flash, via l&apos;API de Google,
                qui relève les mots parasites et les répétitions, puis fait un retour. L&apos;audio est supprimé dès
                la transcription faite : la base reste légère, et la voix des membres n&apos;est pas conservée.
              </p>
              <FlowDiagram
                accent={GOLD}
                nodes={[
                  { label: 'Enregistrement', note: 'après 30 s de réflexion' },
                  { label: 'Transcription', note: "puis l'audio est supprimé" },
                  { label: 'Gemini Flash', note: 'analyse du texte', highlight: true },
                ]}
                links={[
                  { label: 'audio', dir: 'right' },
                  { label: 'texte seulement', dir: 'right' },
                ]}
                caption="Seule la transcription part vers l'IA, qui renvoie un retour au membre."
              />
              <p>
                Gemini Flash est un modèle léger avec une offre gratuite, ce qui suffit au volume actuel de la
                communauté.
              </p>
            </Section>

            <Section title="Les notifications, sans WhatsApp">
              <p>
                Les membres sont surtout actifs sur WhatsApp : j&apos;aurais voulu les prévenir là-bas à chaque
                nouveau défi. Mais l&apos;API de WhatsApp est payante. J&apos;ai donc combiné trois autres canaux : des notifications dans l&apos;application, des notifications push avec Firebase Cloud
                Messaging, et des emails envoyés avec Resend.
              </p>
            </Section>

            <Section title="Le vrai défi : faire vivre la plateforme">
              <p>
                Toutes les sections ne sont pas utilisées de la même façon. Les défis sont les plus consultés, puis
                l&apos;improvisation. Les ressources, pensées pour aider à se préparer, le sont beaucoup moins.
              </p>
              <p>
                Et comme je gère tout seul, l&apos;activité dépend encore beaucoup de mon énergie. Rendre la
                communauté plus autonome, c&apos;est le chantier sur lequel je travaille.
              </p>
            </Section>

            <Section title="Ce que j'en retiens">
              <p>
                Une bonne architecture tient compte des contraintes réelles : le budget, mais aussi les habitudes des
                utilisateurs. Et une fonctionnalité n&apos;a de valeur que si elle est utilisée : regarder ce que les
                membres font vraiment m&apos;aide à décider où mettre mon énergie.
              </p>
            </Section>

            <div className="py-14 border-t border-border flex flex-wrap items-center gap-4">
              <a
                href="https://lab-oratoiregn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E1730] text-[#E2B33C] px-6 py-3.5 font-medium hover:-translate-y-0.5 transition-transform"
              >
                Visiter lab-oratoiregn.com
                <ArrowUpRight size={18} />
              </a>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-text/20 hover:border-text px-6 py-3.5 font-medium text-text transition-colors"
              >
                Voir les autres projets
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
