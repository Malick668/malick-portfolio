import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/ui/CertificationCard";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Certifications
          </p>

          <h3 className="mt-2 text-4xl font-bold text-slate-900">
            Certifications & formations
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Quelques certifications et formations qui complètent mon parcours
            dans le domaine de la Data et de la Business Intelligence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}