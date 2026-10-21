const roles = [
  {
    title: 'Je développe',
    text: "Applications mobiles en Flutter, Kotlin et React Native, sites et plateformes web en Next.js, avec Supabase derrière. Développeur mobile chez NG Tech.",
  },
  {
    title: 'Je lance',
    text: "Je mets mes produits entre les mains de vrais utilisateurs, et je les fais évoluer avec eux. SoliBox est né à l'Orange Digital Center, 2e place de l'Orange Summer Challenge 2025.",
  },
  {
    title: 'Je transmets',
    text: "Responsable Masterclass & Formation chez FATA Guinée. Plus de 30 personnes formées en informatique, et des étudiants de 1re année formés à l'université Gamal Abdel Nasser.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-content mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2
            id="about-title"
            className="font-unbounded font-bold tracking-[-0.03em] leading-[1] text-text text-[clamp(2rem,4vw,3.25rem)]"
          >
            Du code au produit, et du produit aux gens.
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-md">
            Je suis en 4e année de Génie informatique, parcours génie logiciel, à l&apos;Université
            Gamal Abdel Nasser de Conakry. J&apos;apprends en construisant.
          </p>
        </div>

        <ul className="lg:col-span-7 divide-y divide-border border-y border-border">
          {roles.map((role) => (
            <li key={role.title} className="py-7 grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-8">
              <h3 className="text-lg font-semibold text-text">{role.title}</h3>
              <p className="text-text-muted leading-relaxed">{role.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
