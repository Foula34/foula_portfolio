'use client';

import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import type { UiText } from '@/content/types';

// Le thème est porté par l'attribut data-theme de <html>, posé avant l'affichage
// par le script du layout. Pas besoin d'état React : le CSS choisit l'icône.
function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Stockage indisponible (navigation privée) : le thème vaut pour la visite.
  }
}

// `solid` : barre toujours opaque, pour les pages dont le haut est coloré (études de cas).
// `homeHref` : accueil de la langue en cours ; `switchHref` : la même page dans l'autre langue.
export default function Navbar({
  ui,
  homeHref,
  switchHref,
  solid = false,
}: {
  ui: UiText;
  homeHref: string;
  switchHref: string;
  solid?: boolean;
}) {
  // « / » ou « /en », suivi de l'ancre de la section : /#projects, /en#projects.
  const base = homeHref;
  const navLinks = [
    { name: ui.nav.projects, href: `${base}#projects` },
    { name: ui.nav.story, href: `${base}#story` },
    { name: ui.nav.skills, href: `${base}#skills` },
    ...(ui.nav.blog ? [{ name: ui.nav.blog, href: '/blog' }] : []),
    { name: ui.nav.contact, href: `${base}#contact` },
  ];
  // Changer de langue recharge la page : chaque langue a sa propre mise en page (<html lang>).
  const languageSwitch = (
    <a
      href={switchHref}
      hrefLang={ui.switchLanguage.label.toLowerCase()}
      aria-label={ui.switchLanguage.aria}
      className="text-sm font-medium text-text-muted hover:text-accent border border-border rounded-full px-2.5 py-1 transition-colors duration-200"
    >
      {ui.switchLanguage.label}
    </a>
  );
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    // Native anchor navigation + CSS `scroll-behavior: smooth` + `scroll-padding-top`
    // handle the actual scroll. We only close the mobile menu here.
    setIsOpen(false);
  };

  const isOpaque = solid || scrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isOpaque ? 'bg-bg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href={homeHref}
            onClick={handleNavClick}
            className="font-display text-xl text-text hover:text-accent transition-colors duration-200"
          >
            Foula Fofana
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            {languageSwitch}
            <button
              onClick={toggleTheme}
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label={ui.themeToggle}
            >
              <Sun size={18} strokeWidth={1.75} className="theme-icon-dark" />
              <Moon size={18} strokeWidth={1.75} className="theme-icon-light" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4">
            {languageSwitch}
            <button
              onClick={toggleTheme}
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label={ui.themeToggle}
            >
              <Sun size={18} strokeWidth={1.75} className="theme-icon-dark" />
              <Moon size={18} strokeWidth={1.75} className="theme-icon-light" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-accent transition-colors duration-200"
              aria-label={ui.menuToggle}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="block py-3 font-display text-2xl text-text hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
