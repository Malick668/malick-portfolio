import {
  HiOutlineChartBar,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const results = [
  {
    value: "75,6 %",
    title: "Créateurs âgés de moins de 50 ans",
    description:
      "La majorité des entreprises étudiées sont créées par des personnes âgées de moins de 50 ans.",
  },
  {
    value: "81,86 %",
    title: "Créations dans le commerce",
    description:
      "Le commerce représente la principale activité économique parmi les entreprises créées.",
  },
  {
    value: "89,3 %",
    title: "Entreprises individuelles",
    description:
      "La forme juridique individuelle est largement majoritaire parmi les entreprises créées.",
  },
];

const relationships = [
  "Une relation existe entre le département et l’activité économique.",
  "Une relation de dépendance existe entre le régime juridique et le type d’activité.",
  "Une relation d’indépendance existe entre le type d’activité et le sexe.",
  "Une relation de dépendance existe entre le groupe d’âge et le type d’activité.",
];

export default function Results() {
  return (
    <section className="mt-20">

      {/* En-tête */}
      <div className="flex items-center gap-3">
        <HiOutlineChartBar className="h-8 w-8 text-blue-600" />

        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Analyse des résultats
        </p>
      </div>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Résultats clés
      </h2>

      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
        Les principaux résultats obtenus à partir des analyses statistiques
        réalisées sur les entreprises créées dans la région de Diourbel.
      </p>

      {/* Chiffres clés */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {results.map((result) => (
          <div
            key={result.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >

            <p className="text-4xl font-bold text-blue-600">
              {result.value}
            </p>

            <h3 className="mt-5 text-xl font-semibold leading-7 text-slate-900">
              {result.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {result.description}
            </p>

          </div>
        ))}

      </div>

      {/* Relations statistiques */}
      <div className="mt-16">

        <h3 className="text-2xl font-bold text-slate-900">
          Relations statistiques identifiées
        </h3>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Les analyses statistiques ont également permis d'identifier
          plusieurs relations entre les caractéristiques des entreprises
          et celles de leurs créateurs.
        </p>

        <div className="mt-8 space-y-4">

          {relationships.map((relationship) => (
            <div
              key={relationship}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <div className="mt-0.5 rounded-full bg-blue-50 p-1.5">
                <HiOutlineCheckCircle className="h-5 w-5 text-blue-600" />
              </div>

              <p className="leading-7 text-slate-700">
                {relationship}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}