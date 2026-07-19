export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string|null;
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Power BI - Analyse des ventes",
    category: "Business Intelligence",
    description:
      "Création d'un tableau de bord interactif permettant de suivre les ventes, les KPI et les performances commerciales.",
    image: "/projects/powerbi-dashboard.png",
    technologies: ["Power BI", "DAX", "SQL"],
    github: null,
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