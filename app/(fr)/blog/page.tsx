import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ui } from '@/content/ui';
import { formatDate, getPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/i18n';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Blog · Foula Fofana',
  description: 'Ce que j’apprends en construisant et en lançant des produits à Conakry.',
  alternates: { canonical: '/blog' },
  openGraph: { type: 'website', locale: 'fr_FR', url: '/blog', title: 'Blog · Foula Fofana' },
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar ui={ui.fr} homeHref="/" switchHref="/en" solid />
      <main className="px-6 pt-32 lg:pt-40 pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-[clamp(2.4rem,6vw,4rem)]">
            Blog
          </h1>
          <p className="mt-5 text-lg text-text-muted max-w-xl">
            Ce que j’apprends en construisant et en lançant des produits à Conakry.
          </p>
          <ul className="mt-14 divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-8">
                  <p className="text-sm text-text-muted">
                    {formatDate(post.date)} · {post.readingMinutes} min de lecture
                  </p>
                  <h2 className="mt-2 font-unbounded font-semibold text-2xl tracking-[-0.02em] leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-text-muted leading-relaxed">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer ui={ui.fr.footer} />
    </div>
  );
}
