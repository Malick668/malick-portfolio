import React from "react";

type DatasetProps = {
  caseStudy: any;
};

export default function Dataset({ caseStudy }: DatasetProps) {
  const variables = [
    {
      name: "Forme juridique",
      description:
        "Type de structure juridique adopté par l'entreprise.",
      examples: "SARL, GIE, ADCNC, etc.",
    },
    {
      name: "Secteur d'activité",
      description:
        "Domaine principal dans lequel l'entreprise exerce son activité.",
      examples: "Agriculture, eau et électricité, commerce, etc.",
    },
    {
      name: "Localisation",
      description:
        "Informations permettant de situer les entreprises dans la région.",
      examples: "Départements et communes de la région de Diourbel.",
    },
    {
      name: "Caractéristiques des entreprises",
      description:
        "Variables décrivant le profil des entreprises étudiées.",
      examples: "Informations issues du répertoire NINEA.",
    },
  ];

  return (
    <section className="mt-20">

      <p className="font-semibold uppercase tracking-widest text-blue-600">
        Données
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Jeu de données
      </h2>

      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
        L'étude s'appuie sur des données issues du répertoire NINEA et porte
        sur les entreprises créées dans la région de Diourbel. Les variables
        ont été préparées afin de permettre l'analyse descriptive et
        l'application de l'Analyse des Correspondances Multiples.
      </p>

      {/* Variables analysées */}
      <div className="mt-10">

        <h3 className="text-2xl font-semibold text-slate-900">
          Variables analysées
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {variables.map((variable) => (
            <div
              key={variable.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <h4 className="text-xl font-semibold text-slate-900">
                {variable.name}
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                {variable.description}
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                {variable.examples}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}