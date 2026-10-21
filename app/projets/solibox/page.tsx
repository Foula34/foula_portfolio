import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlowDiagram from '@/components/FlowDiagram';
import Section from '@/components/CaseSection';

export const metadata: Metadata = {
  title: 'SoliBox, étude de cas · Foula Fofana',
  description:
    "Comment l'équipe SoliBox est passée d'un serveur local, puis d'une lecture en boucle sur Supabase, à MQTT pour piloter un boîtier solaire en temps réel.",
  openGraph: {
    title: 'SoliBox, étude de cas',
    description: "Partager le surplus d'énergie solaire entre voisins, et le piloter en temps réel avec MQTT.",
    images: [{ url: '/images/solibox-app.png', alt: "Écrans de l'application SoliBox" }],
  },
  twitter: { card: 'summary_large_image', title: 'SoliBox, étude de cas', description: "Partager le surplus d'énergie solaire entre voisins, et le piloter en temps réel avec MQTT.", images: ['/images/solibox-app.png'] },
};

// SoliBox OS : qui voit quoi (politiques RLS de Supabase, complétées par des vérifications dans le code).
const osRoles = [
  { who: 'CEO et RAF', access: 'Tout, y compris les documents sensibles. Eux seuls valident les dépenses.' },
  { who: "Membres de l'équipe", access: 'Tâches, réunions, produit. Ils peuvent proposer une dépense.' },
  { who: 'Collaborateurs externes', access: 'Seulement ce dont ils ont besoin, sans accès aux finances.' },
  { who: 'Bailleurs de fonds', access: 'Les rapports financiers que nous choisissons de partager, exportables en PDF.' },
];

const facts = [
  { label: 'Mon rôle', value: "Cofondateur et CEO, développeur de l'application mobile" },
  { label: 'Équipe', value: '5 personnes, incubée à Orange Fab Guinée' },
  { label: 'Technologies', value: 'Flutter, ESP32, MQTT (HiveMQ), Supabase' },
  { label: 'Distinctions', value: '1er prix national POESAM 2026, 1er prix SADEN Fulbright 2026, 1er prix Salon des Étudiants Entrepreneurs 2026' },
];

export default function SoliBoxCaseStudy() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar solid />
      <main className="pt-16 lg:pt-20">
        <header className="bg-[#F88300] text-[#1E1200] px-6 pt-12 lg:pt-16 pb-16 lg:pb-20">
          <div className="max-w-content mx-auto">
            <Link href="/#solibox" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
              <ArrowLeft size={16} />
              Retour aux projets
            </Link>
            <h1 className="mt-8 font-unbounded font-extrabold tracking-[-0.04em] leading-[0.92] text-[clamp(3rem,10vw,7.5rem)]">
              SoliBox
            </h1>
            <p className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight max-w-3xl leading-snug">
              Partager le surplus d&apos;énergie solaire entre voisins, et le piloter en temps réel depuis un téléphone.
            </p>
            <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-[#1E1200]/25 pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-[#4D2E00]">{f.label}</dt>
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
                src="/images/solibox-app.png"
                alt="Écrans de l'application mobile SoliBox : consommation, tableau de bord et recharge"
                width={1348}
                height={607}
                priority
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="w-full rounded-2xl ring-1 ring-border"
              />
            </div>

            <Section title="Le problème">
              <p>
                En Guinée, de nombreux foyers ont installé des panneaux solaires. En journée, ils produisent plus
                qu&apos;ils ne consomment : la batterie se charge pendant que la maison est souvent vide, et le surplus
                est perdu.
              </p>
              <p>
                Juste à côté, un voisin a besoin d&apos;électricité mais n&apos;a pas les moyens de s&apos;offrir une
                installation solaire, qui coûte cher. SoliBox relie les deux : le surplus est partagé avec le voisin,
                qui le paie. Le producteur gagne un revenu, le voisin accède à l&apos;énergie.
              </p>
            </Section>

            <Section title="Ce que nous avons construit">
              <p>
                Un boîtier connecté, piloté par un ESP32, qui mesure l&apos;énergie et commande un relais : quand le
                relais est activé, le courant passe vers le voisin ; désactivé, il est coupé.
              </p>
              <p>
                J&apos;ai développé l&apos;application mobile en Flutter. Elle affiche la production et la
                consommation en temps réel, et permet d&apos;activer ou de couper le relais à distance, d&apos;un
                appui sur un bouton.
              </p>
            </Section>

            <Section title="Le vrai défi : parler au boîtier">
              <p>
                Tout repose sur une chose : quand l&apos;utilisateur appuie sur le bouton, le relais doit réagir tout
                de suite, même sur un réseau mobile faible. Il nous a fallu trois essais pour y arriver.
              </p>

              <h3 className="pt-4 text-text font-semibold text-xl">Essai 1 : un serveur local sur l&apos;ESP32</h3>
              <p>
                L&apos;application parlait directement au boîtier. Simple, mais le téléphone et l&apos;ESP32 devaient
                être sur le même réseau Wi-Fi. Impossible de piloter le boîtier à distance.
              </p>
              <FlowDiagram
                nodes={[{ label: 'Application', note: 'téléphone' }, { label: 'ESP32', note: 'serveur local' }]}
                links={[{ label: 'même réseau Wi-Fi obligatoire', dir: 'both' }]}
                caption="Essai 1 : communication directe, limitée au réseau local."
              />

              <h3 className="pt-6 text-text font-semibold text-xl">Essai 2 : Supabase comme passerelle</h3>
              <p>
                L&apos;application écrivait la commande dans une table Supabase, et l&apos;ESP32 relisait cette table
                en boucle pour savoir s&apos;il devait activer le relais. C&apos;est du <em>polling</em> : en HTTP,
                c&apos;est toujours le client qui demande, le boîtier ne peut pas être prévenu.
              </p>
              <p>
                Résultat : un délai entre l&apos;appui et la réaction du relais, qui s&apos;aggravait sur un réseau
                faible, et un boîtier occupé à interroger la base même quand rien ne changeait.
              </p>
              <FlowDiagram
                nodes={[
                  { label: 'Application' },
                  { label: 'Supabase', note: 'table de commande' },
                  { label: 'ESP32' },
                ]}
                links={[
                  { label: 'écrit la commande', dir: 'right' },
                  { label: 'relit la table en boucle', dir: 'left' },
                ]}
                caption="Essai 2 : le boîtier interroge la base à intervalles réguliers."
              />

              <h3 className="pt-6 text-text font-semibold text-xl">Essai 3 : MQTT avec le broker HiveMQ</h3>
              <p>
                MQTT fonctionne en publication et abonnement. L&apos;application et le boîtier gardent une connexion
                ouverte avec un broker, HiveMQ. Quand l&apos;utilisateur appuie sur le bouton, l&apos;application
                publie la commande sur un topic, et le broker la transmet aussitôt au boîtier, abonné à ce topic.
                Dans l&apos;autre sens, chaque nouvelle mesure du boîtier arrive directement dans l&apos;application.
              </p>
              <p>
                Plus de lecture en boucle, plus de minuterie à régler : le boîtier n&apos;interroge plus, il est
                notifié. Les messages MQTT sont aussi très légers, ce qui convient bien à un ESP32.
              </p>
              <FlowDiagram
                nodes={[
                  { label: 'Application' },
                  { label: 'HiveMQ', note: 'broker MQTT', highlight: true },
                  { label: 'ESP32' },
                ]}
                links={[
                  { label: 'publie la commande, reçoit les mesures', dir: 'both' },
                  { label: 'pousse la commande, publie les mesures', dir: 'both' },
                ]}
                caption="Essai 3 : chacun est notifié dès que l'autre publie."
              />
            </Section>

            <Section title="Et Supabase ?">
              <p>
                Supabase est resté, pour ce qu&apos;il fait bien : l&apos;authentification des utilisateurs. MQTT gère
                le temps réel, Supabase gère les comptes.
              </p>
              <p>
                Prochaine étape prévue : garder dans Supabase l&apos;historique de consommation, pour que chaque
                producteur et chaque consommateur sache combien il a partagé ou consommé.
              </p>
            </Section>

            <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-14 border-t border-border">
              <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-text-muted max-w-[42rem]">
                <h2 className="font-unbounded font-semibold text-2xl tracking-[-0.02em] leading-tight text-text">
                  L&apos;outil interne de l&apos;équipe : SoliBox OS
                </h2>
                <p>
                  Piloter une startup, c&apos;est aussi gérer des tâches, des dépenses, des compétitions et des
                  documents. Plutôt que d&apos;éparpiller tout ça entre plusieurs outils externes, j&apos;ai construit
                  SoliBox OS, une plateforme de gestion réservée à l&apos;équipe. Tout est au même endroit, et nos
                  données restent entre nous.
                </p>
                <p>
                  On y suit le pilotage (tableau de bord, tâches, réunions, objectifs), les finances (financements,
                  dépenses, achats, inventaire), le produit (application, hardware, tests), ainsi que nos compétitions,
                  nos prix et nos documents.
                </p>
                <p>
                  Le plus intéressant techniquement, c&apos;est la gestion des accès. Chacun ne voit que ce qui le
                  concerne, et ces règles sont appliquées dans la base de données avec les politiques RLS de Supabase,
                  complétées par des vérifications dans le code :
                </p>
                <dl className="divide-y divide-border border-y border-border text-base">
                  {osRoles.map((r) => (
                    <div key={r.who} className="py-4 grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-6">
                      <dt className="font-semibold text-text">{r.who}</dt>
                      <dd>{r.access}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-base">
                  Même stack que mes autres projets : Next.js, Supabase, Tailwind CSS, Firebase Cloud Messaging et
                  Resend, en PWA.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end lg:items-start">
                <Image
                  src="/images/solibox-os.jpg"
                  alt="Menu de SoliBox OS : pilotage, finances et produit"
                  width={600}
                  height={1600}
                  sizes="260px"
                  className="w-[220px] sm:w-[260px] rounded-[1.75rem] ring-8 ring-[#0A0F14] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </section>

            <Section title="Ce que j'en retiens">
              <p>
                Le bon outil dépend de la façon dont les données circulent. Pour lire des données à la demande, une
                API classique suffit. Pour réagir à un événement en temps réel entre un objet et une application, il
                faut un modèle où l&apos;on est prévenu, pas un modèle où l&apos;on redemande sans cesse.
              </p>
            </Section>

            <div className="py-14 border-t border-border flex flex-wrap items-center gap-4">
              <a
                href="https://soliboxgn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E1200] text-[#F88300] px-6 py-3.5 font-medium hover:-translate-y-0.5 transition-transform"
              >
                Visiter soliboxgn.com
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
