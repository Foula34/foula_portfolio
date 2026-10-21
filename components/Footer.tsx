export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 bg-bg">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-text-muted">
        <p>
          <span className="font-unbounded font-semibold text-text">Foula Fofana</span>, développeur web et
          mobile à Conakry.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="https://github.com/Foula34/foula_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors underline underline-offset-4 decoration-border"
          >
            Voir le code de ce site
          </a>
          <span>© {year}</span>
          <a href="#home" className="hover:text-text transition-colors">
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}
