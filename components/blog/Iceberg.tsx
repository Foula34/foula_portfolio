// Illustration : le code n'est que la partie visible du travail.
const below = [
  'Comprendre le problème',
  'Faire connaître la solution',
  'Accompagner les premiers utilisateurs',
  'Faire adopter le produit',
];

export default function Iceberg() {
  return (
    <figure className="my-12">
      <div className="overflow-hidden rounded-2xl ring-1 ring-border">
        {/* Au-dessus de l'eau : seulement la pointe. */}
        <div className="relative bg-bg-alt h-36 sm:h-40 flex items-end justify-center">
          <svg viewBox="0 0 200 90" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 sm:w-52" aria-hidden="true">
            <path d="M20 90 L82 18 L96 30 L110 8 L180 90 Z" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
          </svg>
          <p className="relative mb-4 font-unbounded font-semibold text-text text-base sm:text-lg">Le code</p>
        </div>
        {/* La ligne de flottaison. */}
        <svg viewBox="0 0 400 12" preserveAspectRatio="none" className="block w-full h-3 -mt-px" aria-hidden="true">
          <path d="M0 6 Q 25 0 50 6 T 100 6 T 150 6 T 200 6 T 250 6 T 300 6 T 350 6 T 400 6 V12 H0 Z" fill="#12324F" />
        </svg>
        {/* Sous l'eau : tout le reste. */}
        <div className="relative bg-[#12324F] px-6 pt-8 pb-10 sm:px-10">
          <svg
            viewBox="0 0 400 220"
            preserveAspectRatio="none"
            className="absolute inset-x-6 top-0 bottom-4 w-[calc(100%-3rem)] h-[calc(100%-1rem)]"
            aria-hidden="true"
          >
            <path d="M150 0 L250 0 L330 60 L385 150 L330 215 L70 215 L15 140 L70 55 Z" fill="#1E4A70" />
          </svg>
          <ul className="relative grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {below.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-[#0B2238]/70 px-4 py-3 text-center text-[15px] font-medium leading-snug text-[#EAF2FA]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-text-muted">
        Mon avis : le code n&apos;est que la partie visible du travail. Tout le reste se passe sous la surface.
      </figcaption>
    </figure>
  );
}
