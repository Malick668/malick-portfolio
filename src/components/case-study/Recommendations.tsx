import React from "react";

type RecommendationsProps = {
  caseStudy: any;
};

export default function Recommendations({
  caseStudy,
}: RecommendationsProps) {
  return (
    <section className="mt-24">
      {/* Titre */}
      <div className="max-w-3xl">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Perspectives
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Recommandations
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Les résultats de cette étude permettent de formuler plusieurs
          recommandations pour mieux comprendre et accompagner la dynamique
          entrepreneuriale dans la région de Diourbel.
        </p>
      </div>

      {/* Recommandations */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {/* Recommandation 1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
            01
          </div>

          <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-900">
            Améliorer le suivi des créations d&apos;entreprises
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Mettre en place un suivi régulier des caractéristiques des
            entreprises créées afin d&apos;identifier les évolutions de la
            dynamique entrepreneuriale.
          </p>
        </div>

        {/* Recommandation 2 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
            02
          </div>

          <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-900">
            Adapter l&apos;accompagnement aux profils identifiés
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Les associations mises en évidence par l&apos;ACM peuvent
            contribuer à mieux cibler les dispositifs d&apos;accompagnement
            des entreprises.
          </p>
        </div>

        {/* Recommandation 3 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
            03
          </div>

          <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-900">
            Renforcer l&apos;analyse statistique
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            L&apos;utilisation d&apos;analyses statistiques complémentaires
            permettrait d&apos;approfondir la compréhension des profils et
            des caractéristiques des entreprises.
          </p>
        </div>

      </div>
    </section>
  );
}