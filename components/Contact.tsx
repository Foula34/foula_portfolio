'use client';

import { useState } from 'react';
import { Check, Copy, Phone, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import type { HomeText } from '@/content/types';

const EMAIL = 'fofanafoula70@gmail.com';

const links = [
  { icon: Phone, label: '+224 624 36 68 97', href: 'tel:+224624366897' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/foula-fofana-1769782a5' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Foula34' },
];

export default function Contact({ t }: { t: HomeText['contact'] }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Presse-papiers indisponible : on ouvre la messagerie à la place.
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-6 py-24 lg:py-36 bg-bg-alt">
      <div className="max-w-content mx-auto">
        <h2
          id="contact-title"
          className="font-unbounded font-extrabold tracking-[-0.04em] leading-[0.95] text-text text-[clamp(2.6rem,8vw,6.5rem)]"
        >
          {t.heading}
        </h2>
        <p className="mt-6 text-lg text-text-muted max-w-xl">
          {t.intro}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="text-xl sm:text-3xl font-medium text-text underline decoration-border decoration-2 underline-offset-[6px] hover:decoration-accent transition-colors break-all"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-text/20 hover:border-text px-4 py-2 text-sm text-text transition-colors"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span aria-live="polite">{copied ? t.copied : t.copy}</span>
          </button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {links.map(({ icon: Icon, label, href }) => {
            const external = href.startsWith('http');
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors"
                >
                  <Icon size={18} />
                  {label}
                  {external && <ArrowUpRight size={14} />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
