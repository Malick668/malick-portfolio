import { Experience } from "@/data/experiences";
import { HiCheckCircle } from "react-icons/hi2";

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export default function ExperienceCard({
  experience,
  isLast,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8">

      {/* Point de la timeline */}
      <div className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>

      {/* Ligne verticale */}
      {!isLast && (
        <div className="absolute left-[9px] top-7 h-full w-0.5 bg-slate-200"></div>
      )}

      {/* Carte */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {experience.position}
            </h3>

            <p className="mt-1 font-medium text-blue-600">
              {experience.company}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
            {experience.period}
          </div>

        </div>

        <div className="mt-2 text-slate-500">
          {experience.location}
        </div>

        {/* Missions */}
        <ul className="mt-6 space-y-2">
          {experience.description.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-slate-600"
            >
              <HiCheckCircle className="mt-1 shrink-0 text-blue-600" />
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}