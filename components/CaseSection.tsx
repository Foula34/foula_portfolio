// Section d'une étude de cas : titre à gauche, texte à droite sur ordinateur.
export default function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid lg:grid-cols-12 gap-4 lg:gap-12 py-14 border-t border-border">
      <h2 className="lg:col-span-4 font-unbounded font-semibold text-2xl tracking-[-0.02em] leading-tight text-text">
        {title}
      </h2>
      <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-text-muted max-w-[42rem]">{children}</div>
    </section>
  );
}
