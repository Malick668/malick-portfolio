"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-blue-600"
        >
          Malick FAYE
        </a>

        {/* Navigation Desktop */}
        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#home"
            className="text-lg text-slate-700 transition hover:text-blue-600"
          >
            Accueil
          </a>

          <a
            href="#about"
            className="text-lg text-slate-700 transition hover:text-blue-600"
          >
            À propos
          </a>

          <a
            href="#skills"
            className="text-lg text-slate-700 transition hover:text-blue-600"
          >
            Compétences
          </a>

          <a
            href="#projects"
            className="text-lg text-slate-700 transition hover:text-blue-600"
          >
            Projets
          </a>

          <a
            href="#contact"
            className="text-lg text-slate-700 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Bouton hamburger Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-3xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-6 py-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-lg text-slate-700 transition hover:text-blue-600"
            >
              Accueil
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-lg text-slate-700 transition hover:text-blue-600"
            >
              À propos
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-lg text-slate-700 transition hover:text-blue-600"
            >
              Compétences
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-lg text-slate-700 transition hover:text-blue-600"
            >
              Projets
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-4 text-lg text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}