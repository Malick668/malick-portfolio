import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";

import { TbTable } from "react-icons/tb";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
const skills = [
  {
  title: "Python",
  icon: <FaPython className="text-5xl text-[#3776AB]" />,
  items: ["Pandas", "NumPy", "Scikit-learn"],
},
{
  title: "SQL",
  icon: <FaDatabase className="text-5xl text-[#00758F]" />,
  items: ["MySQL", "PostgreSQL", "SQL Server"],
},
{
  title: "Power BI",
  icon: <FaChartBar className="text-5xl text-[#F2C811]" />,
  items: ["DAX", "Power Query", "Reporting"],
},
{
  title: "Tableau",
  icon: <TbTable className="text-5xl text-[#E97627]" />,
  items: ["Dashboards", "Visualisation", "Storytelling"],
},
{
  title: "Talend",
  icon: <HiOutlineCog6Tooth className="text-5xl text-[#FF6D00]" />,
  items: ["ETL", "Data Integration", "Data Quality"],
},
{
  title: "Machine Learning",
  icon: <FaRobot className="text-5xl text-blue-600" />,
  items: ["Classification", "Régression", "Clustering"],
},
];
export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Compétences
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Technologies que j'utilise
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Des outils modernes pour analyser, transformer et valoriser les données.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {skills.map((skill) => (
    <div
      key={skill.title}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl min-h-[320px]"
    >
     <div className="mb-6 flex flex-col items-center">
  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
    {skill.icon}
  </div>

  <h3 className="mt-4 text-2xl font-bold text-slate-900">
    {skill.title}
  </h3>
</div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
  {skill.items.map((item) => (
    <span
      key={item}
      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
    >
      {item}
    </span>
  ))}
</div>
    </div>
  ))}
</div>
        </div>

      </div>
    </section>
  );
}