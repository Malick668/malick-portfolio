export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-600">
          Malick FAYE
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
  <a
    href="#home"
    className="cursor-pointer rounded-md px-3 py-2 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
  >
    Accueil
  </a>
</li>

          <li>
  <a
    href="#about"
    className="cursor-pointer rounded-md px-3 py-2 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
  >
    À propos
  </a>
</li>

          <li>
  <a
    href="#skills"
    className="cursor-pointer rounded-md px-3 py-2 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
  >
    Compétences
  </a>
</li>

          <li>
  <a
    href="#projects"
    className="cursor-pointer rounded-md px-3 py-2 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
  >
    Projets
  </a>
</li>

          <li>
  <a
    href="#contact"
    className="cursor-pointer rounded-md px-3 py-2 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
  >
    Contact
  </a>
</li>
        </ul>
      </div>
    </nav>
  );
}