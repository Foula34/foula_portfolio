// Illustration : la méthode en cinq étapes. Le code n'en est qu'une.
const steps = [
  { verb: 'Enquêter', detail: 'parler aux gens qui vivent le problème' },
  { verb: 'Construire', detail: 'seulement maintenant', code: true },
  { verb: 'Annoncer', detail: 'un vrai moment de lancement' },
  { verb: 'Accompagner', detail: "jusqu'au premier succès" },
  { verb: 'Montrer', detail: 'en vidéo, avec de vrais utilisateurs' },
];

export default function Method() {
  return (
    <figure className="my-12 lg:-mx-32">
      <ol className="grid gap-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li
            key={s.verb}
            className={`rounded-2xl p-4 lg:p-5 flex lg:flex-col gap-3 lg:gap-6 items-start ${
              s.code ? 'bg-bg-alt ring-1 ring-border' : 'bg-accent text-bg'
            }`}
          >
            <span className="font-unbounded font-bold text-2xl leading-none">{i + 1}</span>
            <span>
              <span className="block font-unbounded font-semibold text-base leading-tight">{s.verb}</span>
              <span className={`mt-1 block text-sm leading-snug ${s.code ? 'text-text-muted' : 'opacity-90'}`}>
                {s.detail}
              </span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-sm text-text-muted lg:px-32">
        Ma méthode aujourd&apos;hui. Coder n&apos;est plus qu&apos;une étape sur cinq.
      </figcaption>
    </figure>
  );
}
