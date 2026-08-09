import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

import Dataset from "@/components/case-study/Dataset";
import Results from "@/components/case-study/Results";
import ACM from "@/components/case-study/ACM";
import Recommendations from "@/components/case-study/Recommendations";

import {
  HiOutlineBuildingOffice2,
  HiOutlineMapPin,
  HiOutlineCalendarDays,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const caseStudy = caseStudies[0];

export default function CaseStudyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8">

      {/* Retour au portfolio */}
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 transition hover:text-blue-800"
      >
        ← Retour au portfolio
      </Link>

      {/* En-tête */}
      <section className="mt-14">

        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Étude de cas
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          {caseStudy.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          {caseStudy.description}
        </p>

      </section>

      {/* Informations générales */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">

        {/* Organisation */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <HiOutlineBuildingOffice2 className="h-6 w-6 text-blue-600" />

            <h2 className="font-semibold text-slate-900">
              Organisation
            </h2>
          </div>

          <p className="mt-3 text-slate-600">
            ANSD
          </p>

        </div>

        {/* Localisation */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <HiOutlineMapPin className="h-6 w-6 text-blue-600" />

            <h2 className="font-semibold text-slate-900">
              Localisation
            </h2>
          </div>

          <p className="mt-3 text-slate-600">
            Diourbel, Sénégal
          </p>

        </div>

        {/* Période */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <HiOutlineCalendarDays className="h-6 w-6 text-blue-600" />

            <h2 className="font-semibold text-slate-900">
              Période
            </h2>
          </div>

          <p className="mt-3 text-slate-600">
            2022
          </p>

        </div>

        {/* Technologies */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <HiOutlineWrenchScrewdriver className="h-6 w-6 text-blue-600" />

            <h2 className="font-semibold text-slate-900">
              Technologies
            </h2>
          </div>

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

      </section>

      {/* Contexte */}
      <section className="mt-20">

        <h2 className="text-3xl font-bold text-slate-900">
          Contexte
        </h2>

        <p className="mt-6 leading-8 text-slate-700">
          Cette étude a été réalisée dans le cadre de mon mémoire de fin de
          licence au sein de l&apos;Agence Nationale de la Statistique et de la
          Démographie (ANSD). Elle porte sur l&apos;analyse des caractéristiques
          des entreprises créées dans la région de Diourbel à partir des
          données du répertoire NINEA.
        </p>

      </section>

      {/* Jeu de données */}
      <Dataset caseStudy={caseStudy} />

      {/* Méthodologie */}
<section className="mt-20">

  <p className="font-semibold uppercase tracking-widest text-blue-600">
    Méthodologie
  </p>

  <h2 className="mt-4 text-4xl font-bold text-slate-900">
    De la donnée à l'analyse
  </h2>

  <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
    L'analyse a suivi une démarche structurée allant de la préparation des
    données jusqu'à l'interprétation des résultats statistiques.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-3xl font-bold text-blue-600">01</div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900">
        Préparation
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Nettoyage, structuration et préparation des données issues du
        répertoire NINEA.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-3xl font-bold text-blue-600">02</div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900">
        Exploration
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Analyse descriptive des caractéristiques des entreprises et
        identification des principales tendances.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-3xl font-bold text-blue-600">03</div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900">
        Analyse ACM
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Application de l'Analyse des Correspondances Multiples afin
        d'identifier les associations entre les modalités.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-3xl font-bold text-blue-600">04</div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900">
        Interprétation
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Interprétation des axes factoriels, identification des profils et
        formulation de recommandations.
      </p>
    </div>

  </div>

</section>

      {/* Résultats */}
      <Results />

      {/* Analyse des Correspondances Multiples */}
      <ACM />
      <Recommendations caseStudy={caseStudy} />

      {/* Conclusion */}
<section className="mt-24">

  <p className="font-semibold uppercase tracking-widest text-blue-600">
    Conclusion
  </p>

  <h2 className="mt-4 text-4xl font-bold text-slate-900">
    Une analyse statistique au service de la décision
  </h2>

  <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
    Cette étude a permis de mettre en évidence plusieurs caractéristiques
    des entreprises créées dans la région de Diourbel et d'identifier des
    associations entre leurs formes juridiques et leurs secteurs d'activité.
    L'utilisation de méthodes statistiques, notamment l'Analyse des
    Correspondances Multiples, permet ainsi de transformer les données
    administratives en informations utiles à la compréhension de la dynamique
    entrepreneuriale.
  </p>

  <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-8">
    <h3 className="text-xl font-semibold text-slate-900">
      Compétences mobilisées
    </h3>

    <div className="mt-6 flex flex-wrap gap-3">
      {[
        "Analyse statistique",
        "Analyse des Correspondances Multiples",
        "Data Cleaning",
        "Exploration des données",
        "Data Visualization",
        "Interprétation des résultats",
      ].map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

</section>
  

    </main>
  );
}