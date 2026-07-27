import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Titre */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600">
            Expériences
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Mon parcours professionnel
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Les expériences qui ont développé mes compétences techniques et humaines.
          </p>
        </div>

        {/* Nombre d'expériences */}
        <div className="mx-auto mt-16 max-w-4xl space-y-12">
  {experiences.map((experience, index) => (
  <ExperienceCard
    key={experience.id}
    experience={experience}
    isLast={index === experiences.length - 1}
  />
))}
</div>
      </div>
    </section>
  );
}