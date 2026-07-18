export default function Hero() {
  return (
    <section
  id="home"
  className="bg-slate-50 pt-36 pb-24"
>
      <div className="mx-auto max-w-7xl px-6 text-center">

        <div className="mb-8">
  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
    🟢 Disponible pour une alternance
  </span>
</div>

        <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-blue-100 text-6xl">
          👨🏾‍💻
        </div>

        <h1 className="mb-4 text-6xl font-extrabold text-gray-900">
          Malick FAYE
        </h1>

        <h2 className="mb-6 text-2xl font-semibold text-blue-600">
          Data Analyst | Business Intelligence | Machine Learning
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-8 text-gray-600">
          Je transforme les données en informations exploitables grâce
          à l'analyse statistique, la Business Intelligence et le
          Machine Learning afin d'aider les entreprises à prendre de
          meilleures décisions.
        </p>

        <div className="flex justify-center gap-6">
          <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Voir mes projets
          </button>

          <button className="rounded-lg border border-blue-600 px-8 py-4 font-semibold text-blue-600 hover:bg-blue-50">
            Télécharger mon CV
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">

  <span className="rounded-full bg-white px-4 py-2 shadow">
    Python
  </span>

  <span className="rounded-full bg-white px-4 py-2 shadow">
    SQL
  </span>

  <span className="rounded-full bg-white px-4 py-2 shadow">
    Power BI
  </span>

  <span className="rounded-full bg-white px-4 py-2 shadow">
    Tableau
  </span>

  <span className="rounded-full bg-white px-4 py-2 shadow">
    Machine Learning
  </span>

  <span className="rounded-full bg-white px-4 py-2 shadow">
    Talend ETL
  </span>

</div>

      </div>
    </section>
  );
}