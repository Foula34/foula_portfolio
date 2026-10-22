// Illustration : le parcours d'un vendeur Sanni, de l'inscription à la première commande.
const steps = ['Inscription', 'Boutique publiée', 'Lien partagé dans ses groupes', 'Première commande'];

export default function SellerJourney() {
  return (
    <figure className="my-12">
      <div className="rounded-2xl bg-[#1D1927] text-[#F6F1E9] p-6 sm:p-8">
        <p className="text-sm text-[#A9A2B8]">Le parcours d&apos;un vendeur sur Sanni</p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-4 sm:gap-2">
          {steps.map((step, i) => {
            const decisive = i > 0;
            return (
              <li key={step} className="relative flex sm:flex-col items-center gap-3 sm:gap-2 sm:text-center">
                <span
                  className={`shrink-0 grid place-items-center h-10 w-10 rounded-full font-unbounded font-semibold text-sm ${
                    decisive ? 'bg-[#E8650F] text-[#1D1927]' : 'bg-[#F6F1E9]/15 text-[#F6F1E9]'
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-[15px] leading-snug">{step}</span>
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="hidden sm:block absolute top-5 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-px bg-[#F6F1E9]/25" />
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-6 sm:ml-[25%] rounded-xl border border-[#E8650F]/60 px-4 py-3 text-[15px] leading-snug">
          <span className="font-semibold text-[#E8650F]">Là où tout se joue.</span> Le code ne fait pas ce chemin à
          la place du vendeur : il faut l&apos;accompagner.
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-text-muted">
        S&apos;inscrire ne suffit pas. Le vrai succès, c&apos;est la première commande.
      </figcaption>
    </figure>
  );
}
