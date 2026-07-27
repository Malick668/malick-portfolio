import { caseStudies } from "@/data/caseStudies";
const caseStudy = caseStudies[0];
export default function CaseStudyPage() {
    const caseStudy = caseStudies[0];
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      {/* En-tête */}
      <section>
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Étude de cas
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
  {caseStudy.title}
</h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          {caseStudy.description}
        </p>

<div className="mt-12 grid gap-6 md:grid-cols-2">

  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="font-semibold text-slate-900">🏢 Organisation</h3>
    <p className="mt-2 text-slate-600">
      {caseStudy.organization}
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="font-semibold text-slate-900">📍 Localisation</h3>
    <p className="mt-2 text-slate-600">
      {caseStudy.location}
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="font-semibold text-slate-900">📅 Période</h3>
    <p className="mt-2 text-slate-600">
      {caseStudy.period}
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="font-semibold text-slate-900">🛠 Technologies</h3>

    <div className="mt-3 flex flex-wrap gap-2">

      {caseStudy.technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
        >
          {tech}
        </span>
      ))}

    </div>

  </div>

</div>


      </section>

      {/* Contexte */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">
          Contexte
        </h2>

        <p className="mt-6 leading-8 text-slate-700">
          Cette étude a été réalisée dans le cadre de mon mémoire de fin de
          licence au sein de l'Agence Nationale de la Statistique et de la
          Démographie (ANSD). Elle porte sur l'analyse des caractéristiques
          des entreprises créées dans la région de Diourbel à partir des
          données du répertoire NINEA.
        </p>
      </section>

      {/* Objectifs */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">
          Objectifs
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
          <li>Décrire les caractéristiques des entreprises créées.</li>
          <li>Étudier les relations entre les variables.</li>
          <li>Mettre en œuvre une Analyse des Correspondances Multiples (ACM).</li>
          <li>Formuler des recommandations à partir des résultats.</li>
        </ul>
      </section>

    </main>
  );
}