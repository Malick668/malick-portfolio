export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string | null;
  technologies: string[];
  github: string | null;
  linkedin: string | null;
  demo: string | null;
  report: string | null;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Adventure Works - Sales & Commercial Performance Dashboard",
    category: "Business Intelligence",
    description:
      "Dashboard Power BI interactif dédié à l'analyse des performances commerciales d'Adventure Works : chiffre d'affaires, ventes, produits, territoires et performance des commerciaux.",
    image: "/projects/adventure-works-dashboard.png",
    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
    ],
    github: "https://github.com/Malick668/Sales-Performance-Dashboard",
    linkedin: "https://www.linkedin.com/posts/malick-faye-594829259_powerbi-dataanalyst-businessintelligence-ugcPost-7495091685413023745-T6Xx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-pEgABVRmGHIOF5c7H_KIzyLywMTfV6XA",
    demo: null,
    report: null,
    featured: true,
    date: "2026",
  },
{
  id: 3,
  title: "Olist E-Commerce Sales & Customer Analytics",
  category: "Data Analysis & Business Intelligence",
  description:
    "Analyse complète des ventes et du comportement client du e-commerce brésilien Olist : préparation des données, transformations et requêtes PostgreSQL, analyse statistique et création d'un dashboard Power BI interactif.",
  image: "/projects/olist-ecommerce-dashboard.png",
  technologies: [
    "PostgreSQL",
    "SQL",
    "Power BI",
    "DAX",
    "Power Query",
  ],
  github: "https://github.com/Malick668/olist-ecommerce-sales-analytics",
  linkedin:
    "https://www.linkedin.com/posts/malick-faye-594829259_powerbi-dataanalyst-businessintelligence-ugcPost-7499103288869478402-z1NE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-pEgABVRmGHIOF5c7H_KIzyLywMTfV6XA",
  demo: null,
  report: null,
  featured: true,
  date: "2026",
},

  {
    id: 2,
    title: "Application Streamlit & MySQL",
    category: "Data Engineering",
    description:
      "Application web permettant d'interagir avec une base MySQL : ajout, modification, suppression et consultation des données.",
    image:"/projects/streamlit-mysql.png",
    technologies: ["Python", "Streamlit", "MySQL", "SQL"],
    github: null,
    linkedin: null,
    demo: null,
    report: null,
    featured: true,
    date: "2026",
  },

  {
  id: 4,
  title: "Traitement et Analyse de Données avec SPSS",
  category: "Data Analysis",
  description:
    "Projet de traitement et d'analyse statistique de données réalisé avec SPSS : préparation des données, identification des valeurs aberrantes, apurement et analyses statistiques.",
  image: "/projects/spss-analyse-donnees.png",
  technologies: [
    "SPSS",
    "Statistique",
    "Data Cleaning",
    "Analyse de données",
  ],
  github: null,
  linkedin: null,
  demo: null,
  report: "/projects/spss-analyse-donnees.pdf",
  featured: true,
  date: "2026",
},
{
  id: 5,
  title: "Application des GLM sur données médicales",
  category: "Data Analysis & Statistical Modeling",
  description:
    "Analyse statistique de données médicales visant à prédire la présence d'une maladie cardiaque : préparation et exploration des données, traitement des valeurs aberrantes, régression logistique, diagnostics statistiques et évaluation des performances du modèle.",
  image: "/projects/glm-medical-analysis.png",
  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "SciPy",
    "Statsmodels",
    "Scikit-learn",
    "Régression logistique",
    "GLM",
  ],
  github: null,
  linkedin: null,
  demo: null,
  report: "/projects/application-glm-donnees-medicales.pdf",
  featured: true,
  date: "2024",
},

];