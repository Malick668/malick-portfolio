export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Malick FAYE. Tous droits réservés.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href="https://github.com/Malick668"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/malick-faye-594829259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition hover:text-blue-600"
          >
            LinkedIn
          </a>

          <a
            href="mailto:malickfaye66805@gmail.com"
            className="text-slate-600 transition hover:text-blue-600"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}