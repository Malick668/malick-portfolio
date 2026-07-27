export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string[];
}

export const education: Education[] = [
  {
    id: 1,
    institution: "Université de Lorraine",
    degree: "Master 2 – Ingénierie Mathématique pour la Science des Données",
    location: "Nancy, France",
    period: "2025 – 2026",
    description: [
      "Analyse de données et statistiques avancées.",
      "Machine Learning et Intelligence Artificielle.",
      "Data Visualisation avec Power BI et Tableau.",
      "Programmation en Python, R et SQL.",
    ],
  },
  {
    id: 2,
    institution: "Université Alioune Diop de Bambey",
    degree: "Master – Statistique et Informatique Décisionnelle",
    location: "Sénégal",
    period: "2022 – 2024",
    description: [
      "Analyse statistique et modélisation.",
      "Conception de bases de données.",
      "Business Intelligence et reporting.",
      "Développement d'applications de traitement de données.",
    ],
  },
];