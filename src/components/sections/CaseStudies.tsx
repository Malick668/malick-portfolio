import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Titre */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-wider text-blue-600">
            Études de cas
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Analyses de données en situation réelle
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Des études menées sur des données réelles afin de répondre à des
            problématiques statistiques et décisionnelles.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
            />
          ))}
        </div>

      </div>
    </section>
  );
}