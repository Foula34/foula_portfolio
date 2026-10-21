'use client';

import { useState } from 'react';

type Target = 'solibox' | 'sanni' | 'lab' | 'ngtech';

// Où chaque compétence a réellement servi. MySQL n'apparaît
// dans aucun des projets présentés : il est listé à part, sans lien inventé.
const targets: { id: Target; name: string; note: string; bg: string; fg: string }[] = [
  { id: 'solibox', name: 'SoliBox', note: 'Application mobile IoT', bg: '#F88300', fg: '#1E1200' },
  { id: 'sanni', name: 'Sanni', note: 'Boutique en ligne', bg: '#1D1927', fg: '#F6F1E9' },
  { id: 'lab', name: 'Lab Oratoire', note: 'Plateforme communautaire', bg: '#0E1730', fg: '#F3EFE4' },
  { id: 'ngtech', name: 'NG Tech', note: 'Développeur mobile', bg: '#3A3F47', fg: '#F5F5F4' },
];

const groups: { name: string; skills: { name: string; used: Target[] }[] }[] = [
  {
    name: 'Mobile',
    skills: [
      { name: 'Flutter', used: ['solibox'] },
      { name: 'Kotlin', used: ['ngtech'] },
      { name: 'React Native', used: ['ngtech'] },
    ],
  },
  {
    name: 'Web',
    skills: [
      { name: 'Next.js', used: ['sanni', 'lab'] },
      { name: 'React', used: ['sanni', 'lab'] },
      { name: 'TypeScript', used: ['sanni'] },
      { name: 'Tailwind CSS', used: ['sanni'] },
      { name: 'PWA', used: ['sanni', 'lab'] },
      { name: 'Vercel', used: ['sanni', 'lab'] },
    ],
  },
  {
    name: 'Back-end',
    skills: [
      { name: 'Supabase', used: ['solibox', 'sanni', 'lab'] },
      { name: 'PostgreSQL', used: ['solibox', 'sanni', 'lab'] },
      { name: 'MQTT', used: ['solibox'] },
      { name: 'Firebase', used: ['lab'] },
    ],
  },
];

const allSkills = groups.flatMap((g) => g.skills);

export default function Skills() {
  const [selected, setSelected] = useState('Supabase');
  const used = allSkills.find((s) => s.name === selected)?.used ?? [];

  return (
    <section id="skills" aria-labelledby="skills-title" className="px-6 py-24 lg:py-32 bg-bg">
      <div className="max-w-content mx-auto">
        <h2
          id="skills-title"
          className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-text text-[clamp(2rem,4vw,3.25rem)] max-w-2xl"
        >
          Mes outils, et où je m&apos;en suis servi.
        </h2>
        <p className="mt-5 text-lg text-text-muted max-w-xl">
          Choisis une technologie : les projets où je l&apos;ai utilisée s&apos;allument.
        </p>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            {groups.map((group) => (
              <div key={group.name}>
                <h3 className="text-sm font-medium text-text-muted mb-3">{group.name}</h3>
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
                        className={`rounded-full border px-4 py-2 text-base transition-colors ${
                          isOn
                            ? 'bg-text text-bg border-text'
                            : 'border-border text-text hover:border-text'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <p className="text-sm text-text-muted">Aussi : JavaScript, MySQL, Git et GitHub.</p>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <ul className="grid grid-cols-2 gap-3" aria-live="polite">
              {targets.map((t) => {
                const on = used.includes(t.id);
                return (
                  <li
                    key={t.id}
                    className="rounded-2xl p-4 sm:p-5 min-h-[6.5rem] sm:min-h-[8.5rem] flex flex-col justify-between transition-[background-color,color,opacity,transform] duration-500"
                    style={
                      on
                        ? { backgroundColor: t.bg, color: t.fg }
                        : { backgroundColor: 'var(--bg-alt)', color: 'var(--text-muted)', opacity: 0.7 }
                    }
                  >
                    <span className="font-unbounded font-semibold text-base sm:text-lg leading-tight">{t.name}</span>
                    <span className="text-sm">
                      {t.note}
                      <span className="sr-only">{on ? `, utilise ${selected}` : ''}</span>
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
