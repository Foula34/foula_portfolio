import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import FlowDiagram from './FlowDiagram';
import type { CaseBlock, CaseSection } from '@/content/types';
import type { CaseTheme } from '@/content/cases';
import type { CaseStudyContent, UiText } from '@/content/types';

// Le texte entre *astérisques* passe en italique (ex. : *polling*).
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}

function Block({ block, accent }: { block: CaseBlock; accent: string }) {
  switch (block.kind) {
    case 'p':
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case 'h3':
      return <h3 className="pt-4 text-text font-semibold text-xl">{block.text}</h3>;
    case 'diagram':
      return <FlowDiagram accent={accent} nodes={block.nodes} links={block.links} caption={block.caption} />;
    case 'roles':
      return (
        <dl className="divide-y divide-border border-y border-border text-base">
          {block.rows.map((r) => (
            <div key={r.who} className="py-4 grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-6">
              <dt className="font-semibold text-text">{r.who}</dt>
              <dd>{r.access}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

function Section({ section, theme }: { section: CaseSection; theme: CaseTheme }) {
  const body = (
    <div className="space-y-5 text-lg leading-relaxed text-text-muted max-w-[42rem]">
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} accent={theme.diagramAccent} />
      ))}
    </div>
  );

  // Section avec capture d'écran : texte à gauche, téléphone à droite.
  if (section.aside) {
    const a = section.aside;
    return (
      <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-14 border-t border-border items-start">
        <div className="lg:col-span-8 space-y-5">
          <h2 className="font-unbounded font-semibold text-2xl tracking-[-0.02em] leading-tight text-text">
            {section.title}
          </h2>
          {body}
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <Image
            src={a.src}
            alt={a.alt}
            width={a.width}
            height={a.height}
            sizes="260px"
            className="w-[220px] sm:w-[260px] rounded-[1.75rem] ring-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
            style={{ '--tw-ring-color': theme.asideFrame } as React.CSSProperties}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="grid lg:grid-cols-12 gap-4 lg:gap-12 py-14 border-t border-border">
      <h2 className="lg:col-span-4 font-unbounded font-semibold text-2xl tracking-[-0.02em] leading-tight text-text">
        {section.title}
      </h2>
      <div className="lg:col-span-8">{body}</div>
    </section>
  );
}

export default function CaseStudy({
  content,
  theme,
  ui,
  backHref,
  othersHref,
}: {
  content: CaseStudyContent;
  theme: CaseTheme;
  ui: UiText['caseStudy'];
  backHref: string;
  othersHref: string;
}) {
  return (
    <main className="pt-16 lg:pt-20">
      <header
        className="px-6 pt-12 lg:pt-16 pb-16 lg:pb-20"
        style={{ backgroundColor: theme.headerBg, color: theme.headerFg }}
      >
        <div className="max-w-content mx-auto">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
            <ArrowLeft size={16} />
            {ui.back}
          </Link>
          <h1 className="mt-8 font-unbounded font-extrabold tracking-[-0.04em] leading-[0.92] text-[clamp(2.8rem,9vw,7rem)]">
            {content.title}
          </h1>
          <p className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight max-w-3xl leading-snug">
            {content.tagline}
          </p>
          <dl
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t pt-8"
            style={{ borderColor: theme.headerLine }}
          >
            {content.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm" style={{ color: theme.headerMuted }}>
                  {f.label}
                </dt>
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
              src={theme.heroImage.src}
              alt={content.heroImageAlt}
              width={theme.heroImage.width}
              height={theme.heroImage.height}
              priority
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="w-full rounded-2xl ring-1 ring-border"
            />
          </div>

          {content.sections.map((section) => (
            <Section key={section.title} section={section} theme={theme} />
          ))}

          <div className="py-14 border-t border-border flex flex-wrap items-center gap-4">
            <a
              href={theme.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium hover:-translate-y-0.5 transition-transform"
              style={{ backgroundColor: theme.buttonBg, color: theme.buttonFg }}
            >
              {ui.visit} {theme.urlLabel}
              <ArrowUpRight size={18} />
            </a>
            <Link
              href={othersHref}
              className="inline-flex items-center gap-2 rounded-full border border-text/20 hover:border-text px-6 py-3.5 font-medium text-text transition-colors"
            >
              {ui.others}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
