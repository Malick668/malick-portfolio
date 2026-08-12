import { HiOutlineAcademicCap, HiOutlineCalendarDays } from "react-icons/hi2";
import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <HiOutlineAcademicCap className="text-2xl" />
        </div>

        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
          <HiOutlineCalendarDays />
          {certification.date}
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {certification.title}
      </h3>

      <p className="mt-2 font-medium text-blue-600">
        {certification.organization}
      </p>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {certification.description}
      </p>

      <a
        href={certification.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Voir le certificat
      </a>
    </div>
  );
}