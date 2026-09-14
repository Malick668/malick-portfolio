export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  certificateUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 4,
    title: "Introduction to Programming with Python",
    organization: "Harvard University - CS50",
    date: "2026",
    description:
      "Certification obtenue après avoir terminé CS50's Introduction to Programming with Python, comprenant neuf problem sets et un projet final.",
    certificateUrl: "/certificates/cs50-python-2026.png",
  },

  {
    id: 3,
    title: "Power BI - Formation complète",
    organization: "Udemy",
    date: "28 juillet 2026",
    description:
      "Formation complète Power BI d'une durée de 33,5 heures.",
    certificateUrl: "/certificates/power-bi-formation-udemy.pdf",
  },

  {
    id: 2,
    title: "Traitement des données - Niveau 1",
    organization: "FORCE-N",
    date: "Juillet 2024",
    description:
      "Certification en traitement des données délivrée dans le cadre du programme FORCE-N.",
    certificateUrl: "/certificates/traitement-donnees-niveau-1-force-n.pdf",
  },

  {
    id: 1,
    title: "Data Analysis",
    organization: "FORCE-N",
    date: "Mars 2024",
    description:
      "Certification en Data Analysis délivrée dans le cadre du programme FORCE-N.",
    certificateUrl: "/certificates/data-analysis-force-n.pdf",
  },
];