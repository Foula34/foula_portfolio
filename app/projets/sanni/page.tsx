import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/CaseSection';

export const metadata: Metadata = {
  title: 'Sanni, étude de cas · Foula Fofana',
  description:
    "Sanni donne une vraie boutique aux vendeurs WhatsApp et Facebook. Pourquoi une PWA, comment fonctionnent les campagnes de précommande, et le vrai défi : l'activation des vendeurs.",
  openGraph: {
    title: 'Sanni, étude de cas',
    description: 'Une vraie boutique pour les vendeurs WhatsApp, sans rien installer pour leurs clients.',
    images: [{ url: '/images/sanni.jpg', alt: "Page d'accueil de Sanni et une boutique sur mobile" }],
  },
};

const facts = [
  { label: 'Mon rôle', value: 'Fondateur. Conception, développement, déploiement et support, en autonomie' },
  { label: 'En ligne depuis', value: 'Septembre 2026' },
  { label: 'Technologies', value: 'Next.js, TypeScript, Supabase, Tailwind CSS, PWA, Vercel' },
  { label: 'Premiers résultats', value: '32 vendeurs inscrits et 24 boutiques en ligne en 3 semaines, sans publicité' },
];

export default function SanniCaseStudy() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar solid />
      <main className="pt-16 lg:pt-20">
        <header className="bg-[#1D1927] text-[#F6F1E9] px-6 pt-12 lg:pt-16 pb-16 lg:pb-20">
          <div className="max-w-content mx-auto">
            <Link href="/#sanni" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
              <ArrowLeft size={16} />
              Retour aux projets
            </Link>
            <h1 className="mt-8 font-unbounded font-extrabold tracking-[-0.04em] leading-[0.92] text-[clamp(3rem,10vw,7.5rem)]">
              Sanni
            </h1>
            <p className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight max-w-3xl leading-snug">
              Une vraie boutique pour les vendeurs WhatsApp, sans rien installer pour leurs clients.
            </p>
            <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-[#F6F1E9]/20 pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-[#A9A2B8]">{f.label}</dt>
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
                src="/images/sanni.jpg"
                alt="Page d'accueil de Sanni et une boutique de vendeur sur mobile"
                width={1600}
                height={1000}
                priority
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="w-full rounded-2xl ring-1 ring-border"
              />
            </div>

            <Section title="Le problème">
              <p>
                Beaucoup de commerçants vendent sur WhatsApp et Facebook. Ils publient leurs articles dans leurs
                groupes, puis demandent aux intéressés de leur écrire en privé.
              </p>
              <p>
                Résultat : des dizaines de messages qui posent les mêmes questions. Quel est le prix ? Ce modèle est-il
                disponible ? Comment se passe la livraison ? Le vendeur passe des heures à répondre, souvent à des
                personnes qui n&apos;achètent pas, et les vraies commandes se perdent au milieu de ses conversations.
              </p>
            </Section>

            <Section title="Ce que fait Sanni">
              <p>
                Le vendeur crée sa boutique sur Sanni, publie ses articles une seule fois, puis partage un lien dans
                ses groupes WhatsApp ou sur Facebook. Ses clients y trouvent tout : photos, prix, disponibilité. Ils
                commandent eux-mêmes, sans rien installer et sans créer de compte.
              </p>
              <p>
                Côté vendeur, chaque commande est rangée : qui a commandé, quoi, et combien il doit payer. Sanni
                s&apos;adapte aux deux façons de vendre que je vois autour de moi : la précommande, où le vendeur
                réunit les commandes avant d&apos;aller chez son fournisseur, et la vente d&apos;un stock déjà en
                main.
              </p>
            </Section>

            <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-14 border-t border-border items-center">
              <div className="lg:col-span-4">
                <h2 className="font-unbounded font-semibold text-2xl tracking-[-0.02em] leading-tight text-text">
                  La campagne, au cœur de la précommande
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  Pour la précommande, le vendeur ouvre une campagne avec une date de clôture. Il suit les commandes à
                  confirmer et le montant déjà réuni. Après la clôture, il passe au fournisseur, puis suit la
                  distribution, commande par commande.
                </p>
              </div>
              <div className="lg:col-span-8 flex justify-center">
                <Image
                  src="/images/sanni-campagne.jpg"
                  alt="Écran de campagne d'un vendeur Sanni : clôture, commandes à confirmer, montant réuni, fournisseur et distribution"
                  width={720}
                  height={1320}
                  sizes="320px"
                  className="w-[280px] sm:w-[320px] rounded-[2rem] ring-8 ring-[#1D1927] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </section>

            <Section title="Décision technique : une PWA, pas une application">
              <p>
                La raison principale, c&apos;est le client. Il arrive depuis un lien WhatsApp. Lui demander
                d&apos;installer une application avant de voir les articles, c&apos;est le perdre. Avec une PWA, le
                lien ouvre directement la boutique.
              </p>
              <p>
                Pour le vendeur, Sanni reste installable sur l&apos;écran d&apos;accueil comme une application. Et
                pour moi, c&apos;était beaucoup plus rapide à construire seul : un seul code web, pas de choix entre
                natif et multiplateforme, et pas d&apos;attente de validation sur les stores.
              </p>
              <p>
                Le compromis accepté : Sanni n&apos;est pas visible sur le Play Store. On le trouve par son lien,
                là où les vendeurs et leurs clients sont déjà : WhatsApp et Facebook.
              </p>
            </Section>

            <Section title="Le vrai défi n'est pas technique">
              <p>
                Le problème existe, et les premières inscriptions l&apos;ont confirmé. Mais le vrai défi, c&apos;est
                l&apos;activation : peu de vendeurs vont seuls de l&apos;inscription à leur première boutique publiée,
                puis partagée dans leurs groupes.
              </p>
              <p>
                Ce que je fais pour y répondre : j&apos;accompagne moi-même les vendeurs jusqu&apos;à leur première
                campagne partagée, pour comprendre où ils bloquent. Et je prépare des vidéos de démonstration pour
                montrer, en quelques minutes, comment Sanni fonctionne.
              </p>
            </Section>

            <Section title="Ce que j'en retiens">
              <p>
                Résoudre un vrai problème ne suffit pas. Il faut que le vendeur atteigne vite son premier succès :
                une boutique partagée, puis une première commande. Le parcours qui l&apos;y mène fait partie du
                produit, au même titre que le code.
              </p>
            </Section>

            <div className="py-14 border-t border-border flex flex-wrap items-center gap-4">
              <a
                href="https://sanniya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8650F] text-white px-6 py-3.5 font-medium hover:-translate-y-0.5 transition-transform"
              >
                Visiter sanniya.com
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
