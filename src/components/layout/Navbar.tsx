export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo / Nom */}
        <a
          href="#home"
          className="text-xl font-bold text-blue-600"
        >
          Malick FAYE
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-2 font-medium md:flex">
          <li>
            <a
              href="#home"
              className="rounded-md px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Accueil
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="rounded-md px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              À propos
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="rounded-md px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Compétences
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="rounded-md px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Projets
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="rounded-md px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}