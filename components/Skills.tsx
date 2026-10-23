'use client';

import { useState } from 'react';
import {
  siFirebase, siFlutter, siKotlin, siMqtt, siNextdotjs, siPostgresql, siPwa, siReact,
  siResend, siSupabase, siTailwindcss, siTypescript, siVercel, type SimpleIcon,
} from 'simple-icons';
import type { HomeText } from '@/content/types';
import { fill } from '@/lib/format';

type Target = 'solibox' | 'sanni' | 'lab' | 'ngtech';

// Où chaque compétence a réellement servi. MySQL n'apparaît
// dans aucun des projets présentés : il est listé à part, sans lien inventé.
const targets: { id: Target; name: string; bg: string; fg: string }[] = [
  { id: 'solibox', name: 'SoliBox', bg: '#F88300', fg: '#1E1200' },
  { id: 'sanni', name: 'Sanni', bg: '#1D1927', fg: '#F6F1E9' },
  { id: 'lab', name: 'Lab Oratoire', bg: '#0E1730', fg: '#F3EFE4' },
  { id: 'ngtech', name: 'NG Tech', bg: '#3A3F47', fg: '#F5F5F4' },
];

const groups: { key: keyof HomeText['skills']['groups']; skills: { name: string; icon: SimpleIcon; used: Target[] }[] }[] = [
  {
    key: 'mobile',
    skills: [
      { name: 'Flutter', icon: siFlutter, used: ['solibox'] },
      { name: 'Kotlin', icon: siKotlin, used: ['ngtech'] },
      { name: 'React Native', icon: siReact, used: ['ngtech'] },
    ],
  },
  {
    key: 'web',
    skills: [
      { name: 'Next.js', icon: siNextdotjs, used: ['sanni', 'lab'] },
      { name: 'React', icon: siReact, used: ['sanni', 'lab'] },
      { name: 'TypeScript', icon: siTypescript, used: ['sanni'] },
      { name: 'Tailwind CSS', icon: siTailwindcss, used: ['sanni'] },
      { name: 'PWA', icon: siPwa, used: ['sanni', 'lab'] },
      { name: 'Vercel', icon: siVercel, used: ['sanni', 'lab'] },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Supabase', icon: siSupabase, used: ['solibox', 'sanni', 'lab'] },
      { name: 'PostgreSQL', icon: siPostgresql, used: ['solibox', 'sanni', 'lab'] },
      { name: 'MQTT', icon: siMqtt, used: ['solibox'] },
      { name: 'Firebase', icon: siFirebase, used: ['sanni', 'lab'] },
      { name: 'Resend', icon: siResend, used: ['sanni', 'lab'] },
    ],
  },
];

const allSkills = groups.flatMap((g) => g.skills);

// Les logos sombres (Next.js, Vercel, Flutter…) disparaîtraient sur fond sombre :
// en thème sombre, ils prennent la couleur du texte au lieu de leur couleur de marque.
function isDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.2;
}

function SkillLogo({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      className="skill-logo shrink-0"
      data-dim={isDark(icon.hex) ? '' : undefined}
      style={{ '--brand': `#${icon.hex}` } as React.CSSProperties}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

export default function Skills({ t }: { t: HomeText['skills'] }) {
  const [selected, setSelected] = useState('Supabase');
  const used = allSkills.find((s) => s.name === selected)?.used ?? [];
  const notes = t.targets;
  const usesSuffix = t.usesSuffix;

  return (
    <section id="skills" aria-labelledby="skills-title" className="px-6 py-24 lg:py-32 bg-bg">
      <div className="max-w-content mx-auto">
        <h2
          id="skills-title"
          className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-text text-[clamp(2rem,4vw,3.25rem)] max-w-2xl"
        >
          {t.heading}
        </h2>
        <p className="mt-5 text-lg text-text-muted max-w-xl">
          {t.intro}
        </p>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            {groups.map((group) => (
              <div key={group.key}>
                <h3 className="text-sm font-medium text-text-muted mb-3">{t.groups[group.key]}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isOn = skill.name === selected;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        aria-pressed={isOn}
                        onClick={() => setSelected(skill.name)}
                        onMouseEnter={() => setSelected(skill.name)}
                        className={`skill-chip inline-flex items-center gap-2 rounded-full border pl-3 pr-4 py-2 text-base transition-colors ${
                          isOn
                            ? 'bg-text text-bg border-text'
                            : 'border-border text-text hover:border-text'
                        }`}
                      >
                        <SkillLogo icon={skill.icon} />
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <p className="text-sm text-text-muted">{t.also}</p>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <ul className="grid grid-cols-2 gap-3" aria-live="polite">
              {targets.map((tile) => {
                const on = used.includes(tile.id);
                return (
                  <li
                    key={tile.id}
                    className="rounded-2xl p-4 sm:p-5 min-h-[6.5rem] sm:min-h-[8.5rem] flex flex-col justify-between transition-[background-color,color,box-shadow] duration-500"
                    style={
                      on
                        ? { backgroundColor: tile.bg, color: tile.fg }
                        : { backgroundColor: 'var(--bg-alt)', color: 'var(--text-muted)', boxShadow: 'inset 0 0 0 1px var(--border)' }
                    }
                  >
                    <span className="font-unbounded font-semibold text-base sm:text-lg leading-tight">{tile.name}</span>
                    <span className="text-sm">
                      {notes[tile.id]}
                      <span className="sr-only">{on ? fill(usesSuffix, { skill: selected }) : ''}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
