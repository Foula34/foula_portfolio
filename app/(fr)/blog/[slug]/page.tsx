import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ui } from '@/content/ui';
import { formatDate, getPost, getPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  // L'image de partage vient de opengraph-image.tsx, dans ce même dossier.
  return {
    metadataBase: new URL(SITE_URL),
    title: `${post.title} · Foula Fofana`,
    description: post.description,
    authors: [{ name: 'Foula Fofana' }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'fr_FR',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Foula Fofana'],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = encodeURIComponent(`${SITE_URL}/blog/${post.slug}`);
  const shares = [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${post.title} `)}${url}` },
  ];

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar ui={ui.fr} homeHref="/" switchHref="/en" solid />
      <main className="px-6 pt-28 lg:pt-36 pb-24">
        <article className="max-w-[42rem] mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text">
            <ArrowLeft size={16} />
            Tous les articles
          </Link>
          <h1 className="mt-8 font-unbounded font-bold tracking-[-0.03em] leading-[1.08] text-[clamp(2rem,5vw,3.1rem)]">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-text-muted">
            Foula Fofana · {formatDate(post.date)} · {post.readingMinutes} min de lecture
          </p>

          {/* Contenu écrit par Foula dans content/blog : HTML produit au build, source de confiance. */}
          <div className="article-body mt-12" dangerouslySetInnerHTML={{ __html: post.html }} />

          <footer className="mt-16 pt-10 border-t border-border">
            <p className="text-sm text-text-muted">Partager cet article</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {shares.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-border hover:border-text px-4 py-2 text-sm transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl bg-bg-alt p-6 sm:p-8">
              <p className="font-unbounded font-semibold text-lg">Foula Fofana</p>
              <p className="mt-2 text-text-muted leading-relaxed">
                Développeur et entrepreneur à Conakry. Cofondateur et CEO de SoliBox, créateur de Sanni et de Lab
                Oratoire.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/#projects"
                  className="inline-flex items-center rounded-full bg-accent hover:bg-accent-hover text-bg px-5 py-3 font-medium transition-colors"
                >
                  Voir mes projets
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full border border-text/20 hover:border-text px-5 py-3 font-medium transition-colors"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer ui={ui.fr.footer} />
    </div>
  );
}
