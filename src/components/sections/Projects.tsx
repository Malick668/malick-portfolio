import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Titre */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600">
            Projets
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Quelques réalisations
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Découvrez quelques projets que j'ai réalisés en Data Analysis,
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