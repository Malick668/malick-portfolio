import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Titre */}
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Projets
          </p>

          <h3 className="mt-2 text-4xl font-bold text-slate-900">
            Quelques réalisations
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Découvrez quelques projets que j&apos;ai réalisés en Data Analysis,
            Business Intelligence et Machine Learning.
          </p>
        </div>

        {/* Cartes */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}