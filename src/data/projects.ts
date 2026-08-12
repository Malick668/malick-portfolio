export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string | null;
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Adventure Works — Sales & Commercial Performance Dashboard",
    category: "Business Intelligence",
    description:
      "Dashboard Power BI interactif dédié à l'analyse des performances commerciales d'Adventure Works : chiffre d'affaires, ventes, produits, territoires et performance des commerciaux.",
    image: null,
    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
    ],
    github: "https://github.com/Malick668/Sales-Performance-Dashboard",
    demo: null,
    featured: true,
    date: "2026",
  },
  {
    id: 2,
    title: "Application Streamlit & MySQL",
    category: "Data Engineering",
    description:
      "Application web permettant d'interagir avec une base MySQL : ajout, modification, suppression et consultation des données.",
    image: null,
    technologies: ["Python", "Streamlit", "MySQL"],
    github: null,
    demo: null,
    featured: true,
    date: "2026",
  },
];