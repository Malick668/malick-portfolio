import Image from "next/image";

export default function ACM() {
  return (
    <section className="mt-16">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-slate-900">
        Analyse des Correspondances Multiples
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        L'Analyse des Correspondances Multiples (ACM) permet d'identifier
        les associations entre les différentes caractéristiques des
        entreprises et de dégager des profils d'entreprises.
      </p>

      {/* Graphique ACM */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Projection factorielle
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            La projection des modalités sur les deux premiers axes
            factoriels permet de visualiser les principales associations
            entre les formes juridiques et les secteurs d'activité.
          </p>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 p-6">
          <div className="flex justify-center">
            <Image
              src="/image/acm-diourbel.png"
              alt="Graphique de l'Analyse des Correspondances Multiples des entreprises de Diourbel"
              width={800}
              height={600}
              className="h-auto w-full max-w-3xl rounded-xl"
            />
          </div>
        </div>

        {/* Lecture du graphique */}
        <div className="border-t border-slate-100 p-6">
          <h3 className="text-xl font-bold text-slate-900">
            Lecture du graphique
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Le premier axe factoriel explique 21,61 % de l'inertie tandis
            que le deuxième axe en explique 7,87 %. La projection met
            notamment en évidence le rapprochement entre les SARL et les
            activités liées à l'eau et à l'électricité, ainsi qu'entre les
            GIE, les ADCNC et l'agriculture.
          </p>
        </div>
      </div>
    </section>
  );
}