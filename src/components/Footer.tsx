interface FooterProps {
  theme: 'light' | 'dark';
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer
      className={`py-8 px-4 border-t transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-slate-900 border-slate-800'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
        >
          © 2025 Foula Fofana — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
