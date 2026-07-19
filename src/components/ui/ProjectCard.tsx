import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-white">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="text-6xl">📊</div>

              <p className="mt-3 text-sm text-slate-500">
                Capture du projet à venir
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-8">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {project.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-100"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}