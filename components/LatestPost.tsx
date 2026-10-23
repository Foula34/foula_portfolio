import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate, getPosts } from '@/lib/blog';

// Encart « Dernier article » de l'accueil (français seulement : le blog n'existe qu'en français).
// L'image est celle des aperçus de partage, générée pour chaque article.
export default function LatestPost() {
  const post = getPosts()[0];
  if (!post) return null;
  const href = `/blog/${post.slug}`;

  return (
    <section aria-labelledby="latest-post-title" className="px-6 pb-24 lg:pb-32 bg-bg">
      <div className="max-w-content mx-auto border-t border-border pt-12 lg:pt-16">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="latest-post-title" className="text-sm font-medium text-text-muted">
            Dernier article
          </h2>
          <Link href="/blog" className="text-sm text-text-muted hover:text-text transition-colors">
            Tous les articles
          </Link>
        </div>

        <Link href={href} className="group mt-6 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <div className="hidden lg:block lg:col-span-5 overflow-hidden rounded-2xl">
            <Image
              src={`${href}/partage.jpg`}
              alt=""
              width={1200}
              height={630}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm text-text-muted">
              {formatDate(post.date)} · {post.readingMinutes} min de lecture
            </p>
            <h3 className="mt-3 font-unbounded font-semibold text-2xl lg:text-3xl tracking-[-0.02em] leading-tight text-text group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="mt-4 text-lg text-text-muted leading-relaxed max-w-2xl">{post.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-medium text-text">
              Lire l’article
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
