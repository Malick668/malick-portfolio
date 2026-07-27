import { education } from "@/data/education";
import EducationCard from "@/components/ui/EducationCard";

export default function Education() {
  return (
    <section id="education" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Titre */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600">
            Formation
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Mon parcours académique
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Les formations qui ont construit mes compétences en statistique,
            data science et ingénierie des données.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-12">
          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              education={item}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}