import Image from 'next/image';

// Captures utilisables dans les articles. Les dimensions servent à next/image.
const known: Record<string, { width: number; height: number }> = {
  '/images/sanni.jpg': { width: 1600, height: 1000 },
  '/images/sanni-campagne.jpg': { width: 720, height: 1320 },
  '/images/lab-oratoire.png': { width: 1348, height: 607 },
  '/images/solibox-app.png': { width: 1348, height: 607 },
};

export default function BlogImage({
  src,
  alt,
  caption,
  variant,
}: {
  src: string;
  alt: string;
  caption?: string;
  variant: 'wide' | 'phone';
}) {
  const size = known[src];
  if (!size) throw new Error(`Image inconnue dans l'article : ${src}. Ajoute ses dimensions dans BlogImage.tsx.`);
  return (
    <figure className="my-12">
      {variant === 'phone' ? (
        <div className="flex justify-center rounded-2xl bg-bg-alt py-8">
          <Image
            src={src}
            alt={alt}
            width={size.width}
            height={size.height}
            sizes="260px"
            className="w-[220px] sm:w-[260px] rounded-[1.75rem] ring-8 ring-[#1D1927] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          sizes="(min-width: 768px) 672px, 100vw"
          className="w-full rounded-2xl ring-1 ring-border"
        />
      )}
      {caption && <figcaption className="mt-3 text-sm text-text-muted">{caption}</figcaption>}
    </figure>
  );
}
