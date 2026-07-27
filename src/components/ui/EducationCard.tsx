import { Education } from "@/data/education";
import {
  HiOutlineAcademicCap,
  HiOutlineMapPin,
  HiOutlineCalendarDays,
  HiCheckCircle,
} from "react-icons/hi2";

interface EducationCardProps {
  education: Education;
  isLast: boolean;
}

export default function EducationCard({
  education,
  isLast,
}: EducationCardProps) {
  return (
    <div className="relative pl-10">
      {/* Point de la timeline */}
      <div className="absolute left-0 top-2 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-blue-100" />

      {/* Ligne verticale */}
      {!isLast && (
        <div className="absolute left-2 top-7 h-full w-0.5 bg-slate-300" />
      )}

      {/* Carte */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <HiOutlineAcademicCap className="text-2xl text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                {education.degree}
              </h3>
            </div>

            <p className="mt-2 font-medium text-blue-600">
              {education.institution}
            </p>

            <div className="mt-2 flex items-center gap-2 text-slate-500">
              <HiOutlineMapPin className="text-blue-600" />
              <span>{education.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
            <HiOutlineCalendarDays />
            <span>{education.period}</span>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {education.description.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600">
              <HiCheckCircle className="mt-1 text-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}