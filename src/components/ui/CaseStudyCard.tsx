import { CaseStudy } from "@/data/caseStudies";
import {
  HiOutlineBuildingOffice2,
  HiOutlineMapPin,
  HiOutlineCalendarDays,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import Link from "next/link";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <p className="font-semibold uppercase tracking-widest text-blue-600">
        Étude de cas
      </p>

      <h3 className="mt-3 text-3xl font-bold text-slate-900">
        {caseStudy.title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-6 text-slate-600">

        <div className="flex items-center gap-2">
          <HiOutlineBuildingOffice2 />
          {caseStudy.organization}
        </div>

        <div className="flex items-center gap-2">
          <HiOutlineMapPin />
          {caseStudy.location}
        </div>

        <div className="flex items-center gap-2">
          <HiOutlineCalendarDays />
          {caseStudy.period}
        </div>

      </div>

      <p className="mt-6 leading-8 text-slate-600">
        {caseStudy.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {caseStudy.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
  href={`/case-studies/${caseStudy.slug}`}
  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
>
  Voir l'étude
  <HiOutlineArrowRight />
</Link>

    </div>
  );
}