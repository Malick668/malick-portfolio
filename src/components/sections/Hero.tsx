export default function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Disponibilité */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <span className="h-3 w-3 rounded-full bg-green-500" />
            Disponible pour une alternance
          </span>
        </div>

        {/* Avatar */}
        <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-blue-100 text-6xl">
          👨🏾‍💻
        </div>

        {/* Nom */}
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
          Malick FAYE
        </h1>

        {/* Titre */}
        <h2 className="mb-6 text-xl font-semibold text-blue-600 md:text-2xl">
          Data Analyst | Business Intelligence | Machine Learning
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          Je transforme les données en informations exploitables grâce
          à l&apos;analyse statistique, la Business Intelligence et le
          Machine Learning afin d&apos;aider les entreprises à prendre de
          meilleures décisions.
        </p>

        {/* Boutons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Voir mes projets
          </a>

          <a
  href="/CV_Malick_FAYE.pdf"
  download
  className="rounded-lg border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
>
  Télécharger mon CV
</a>
        </div>

        {/* Technologies principales */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Python",
            "SQL",
            "Power BI",
            "Tableau",
            "Machine Learning",
            "Talend ETL",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}