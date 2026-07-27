export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  objectives: string[];
  technologies: string[];
  image: string | null;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "creation-entreprises-diourbel",
    title: "Analyse des caractéristiques de la création d'entreprise",
    organization: "ANSD",
    period: "2022",
    location: "Diourbel, Sénégal",
    description:
      "Mémoire réalisé dans le cadre de mon stage au Service Régional de la Statistique et de la Démographie.",

    objectives: [
      "Décrire les caractéristiques des entreprises créées.",
      "Étudier les relations entre les variables.",
      "Mettre en œuvre une ACM.",
      "Formuler des recommandations."
    ],

    technologies: [
      "R",
      "Stata",
      "ACM",
      "Khi²"
    ],

    image: null,
  },
];