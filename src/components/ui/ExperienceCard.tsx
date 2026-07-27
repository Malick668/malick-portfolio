import { Experience } from "@/data/experiences";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-10">
      {/* Point de la timeline */}
      <div className="absolute left-0 top-2 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>

      {/* Ligne verticale */}
      <div className="absolute left-2 top-7 h-full w-0.5 bg-slate-200"></div>

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
  <HiOutlineCalendarDays />
  <span>{experience.period}</span>
</div>
        </div>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
  <HiOutlineMapPin className="text-blue-600" />
  <span>{experience.location}</span>
</div>

        <ul className="mt-6 space-y-2">
          {experience.description.map((item) => (
            <li key={item} className="flex gap-2 text-slate-600">
              <HiCheckCircle className="mt-1 text-blue-600" />
              {item}
            </li>
          ))}
        </ul>

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