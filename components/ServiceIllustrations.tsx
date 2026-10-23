// Illustrations des offres, dessinées en SVG. Les couleurs passent par des variables CSS
// (fond, traits, encre, accent) : elles suivent le thème clair ou sombre.
// Les animations sont en CSS (voir globals.css, classes .ill-*) et s'arrêtent si l'appareil
// demande moins de mouvement.

const card = 'var(--bg)';
const soft = 'var(--bg-alt)';
const line = 'var(--border)';
const ink = 'var(--text)';
const accent = 'var(--ill-accent)';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

// Applications web : un tableau de bord dans une fenêtre de navigateur.
export function WebIllustration() {
  const bars = [38, 54, 30, 62, 46, 70, 52];
  return (
    <Frame>
      <rect x="10" y="12" width="300" height="196" rx="12" fill={card} stroke={line} strokeWidth="1.5" />
      <line x1="10" y1="40" x2="310" y2="40" stroke={line} strokeWidth="1.5" />
      {[26, 38, 50].map((cx) => (
        <circle key={cx} cx={cx} cy="26" r="4" fill={line} />
      ))}
      <rect x="72" y="19" width="170" height="14" rx="7" fill={soft} />
      <rect x="22" y="52" width="54" height="144" rx="8" fill={soft} />
      {[66, 82, 98, 114].map((y, i) => (
        <rect key={y} x="32" y={y} width={i === 0 ? 34 : 28} height="6" rx="3" fill={i === 0 ? accent : line} />
      ))}
      <rect x="88" y="52" width="120" height="10" rx="5" fill={ink} opacity="0.85" />
      <rect x="88" y="68" width="78" height="6" rx="3" fill={line} />
      {[88, 160, 232].map((x, i) => (
        <g key={x}>
          <rect x={x} y="84" width="64" height="36" rx="8" fill={soft} />
          <rect x={x + 10} y="94" width="22" height="5" rx="2.5" fill={line} />
          <rect x={x + 10} y="105" width={i === 1 ? 40 : 32} height="7" rx="3.5" fill={i === 1 ? accent : ink} opacity={i === 1 ? 1 : 0.8} />
        </g>
      ))}
      <rect x="88" y="130" width="208" height="66" rx="8" fill={soft} />
      {bars.map((h, i) => (
        <rect
          key={i}
          className="ill-bar"
          style={{ '--d': `${i * 60}ms` } as React.CSSProperties}
          x={102 + i * 27}
          y={188 - h}
          width="15"
          height={h}
          rx="4"
          fill={i === 5 ? accent : ink}
          opacity={i === 5 ? 1 : 0.18}
        />
      ))}
      <path
        className="ill-cursor"
        d="M250 150 l0 22 l6 -6 l5 11 l4 -2 l-5 -11 l8 0 z"
        fill={ink}
        stroke={card}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

// Applications mobiles : un téléphone, une notification et un interrupteur connecté.
export function MobileIllustration() {
  return (
    <Frame>
      <rect x="100" y="8" width="120" height="204" rx="22" fill={ink} />
      <rect x="106" y="14" width="108" height="192" rx="17" fill={card} />
      <rect x="140" y="19" width="40" height="8" rx="4" fill={ink} />
      <rect x="117" y="38" width="52" height="7" rx="3.5" fill={ink} opacity="0.85" />
      <circle cx="201" cy="41" r="6" fill={accent} />
      <rect x="117" y="54" width="86" height="58" rx="11" fill={accent} />
      <rect x="127" y="66" width="36" height="6" rx="3" fill={card} opacity="0.9" />
      <rect x="127" y="78" width="56" height="10" rx="5" fill={card} />
      <rect x="127" y="96" width="28" height="6" rx="3" fill={card} opacity="0.7" />
      {[122, 146, 170].map((y, i) => (
        <g key={y}>
          <circle cx="126" cy={y + 8} r="8" fill={soft} stroke={line} />
          <rect x="140" y={y + 3} width={i === 1 ? 40 : 52} height="5" rx="2.5" fill={ink} opacity="0.7" />
          <rect x="140" y={y + 11} width="30" height="4" rx="2" fill={line} />
        </g>
      ))}
      <g className="ill-notif">
        <rect x="226" y="40" width="86" height="38" rx="11" fill={card} stroke={line} strokeWidth="1.5" />
        <circle cx="243" cy="59" r="7" fill={accent} />
        <rect x="256" y="51" width="44" height="5" rx="2.5" fill={ink} opacity="0.8" />
        <rect x="256" y="62" width="30" height="4" rx="2" fill={line} />
      </g>
      <g className="ill-switch">
        <rect x="8" y="128" width="84" height="44" rx="11" fill={card} stroke={line} strokeWidth="1.5" />
        <rect x="20" y="142" width="34" height="16" rx="8" fill={accent} />
        <circle className="ill-knob" cx="46" cy="150" r="6" fill={card} />
        <rect x="62" y="143" width="20" height="5" rx="2.5" fill={ink} opacity="0.7" />
        <rect x="62" y="152" width="14" height="4" rx="2" fill={line} />
      </g>
    </Frame>
  );
}

// Formations : un tableau avec du code, et la salle qui suit.
export function TrainingIllustration() {
  const code: [number, number, boolean][] = [
    [0, 70, true], [16, 96, false], [16, 60, false], [32, 84, true], [16, 40, false], [0, 30, true],
  ];
  return (
    <Frame>
      <rect x="40" y="10" width="240" height="134" rx="12" fill={ink} />
      {code.map(([indent, w, hl], i) => (
        <g key={i}>
          <rect x="56" y={28 + i * 17} width="8" height="6" rx="3" fill={card} opacity="0.25" />
          <rect
            className="ill-code"
            style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
            x={74 + indent}
            y={28 + i * 17}
            width={w}
            height="6"
            rx="3"
            fill={hl ? accent : card}
            opacity={hl ? 1 : 0.6}
          />
        </g>
      ))}
      <rect className="ill-caret" x="108" y="113" width="3" height="10" rx="1.5" fill={accent} />
      <rect x="150" y="144" width="20" height="10" fill={ink} opacity="0.85" />
      {[70, 125, 195, 250].map((cx, i) => (
        <g key={cx} className={i === 2 ? 'ill-hand' : undefined}>
          {i === 2 && <rect x={cx + 13} y="150" width="6" height="26" rx="3" fill={accent} />}
          <circle cx={cx} cy="178" r="12" fill={i === 2 ? accent : line} />
          <path d={`M${cx - 22} 214 a22 18 0 0 1 44 0 z`} fill={i === 2 ? accent : line} />
        </g>
      ))}
    </Frame>
  );
}

// Prise de parole : un micro sous le projecteur, une bulle et le public.
export function SpeakingIllustration() {
  return (
    <Frame>
      <path d="M60 0 L150 0 L196 210 L14 210 Z" fill={accent} opacity="0.12" />
      <ellipse cx="105" cy="206" rx="46" ry="7" fill={line} />
      <line x1="105" y1="120" x2="105" y2="204" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M80 92 a25 25 0 0 0 50 0" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <rect x="90" y="40" width="30" height="66" rx="15" fill={ink} />
      {[56, 68, 80].map((y) => (
        <line key={y} x1="96" y1={y} x2="114" y2={y} stroke={card} strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      ))}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="ill-wave"
          style={{ '--d': `${i * 180}ms` } as React.CSSProperties}
          d={`M${136 + i * 13} ${54 - i * 9} a${26 + i * 13} ${26 + i * 13} 0 0 1 0 ${46 + i * 18}`}
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      <g className="ill-bubble">
        <rect x="196" y="18" width="114" height="58" rx="16" fill={accent} />
        <path d="M212 76 l0 16 l16 -16 z" fill={accent} />
        <rect x="212" y="34" width="70" height="7" rx="3.5" fill={card} />
        <rect x="212" y="49" width="84" height="6" rx="3" fill={card} opacity="0.75" />
        <rect x="212" y="61" width="48" height="6" rx="3" fill={card} opacity="0.75" />
      </g>
      {[214, 252, 290].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="160" r="12" fill={line} />
          <path d={`M${cx - 20} 196 a20 17 0 0 1 40 0 z`} fill={line} />
        </g>
      ))}
    </Frame>
  );
}
