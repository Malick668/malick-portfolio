export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  objectives: string[];
  methodology: string[];
  dataset: {
  source: string;
  size: string;
  location: string;
  subject: string;
  results: string[];
};
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
    methodology: [
  "Collecte et préparation des données issues du répertoire NINEA.",
  "Analyse descriptive des caractéristiques des entreprises.",
  "Étude des relations entre les variables avec le test du Khi-deux.",
  "Analyse des Correspondances Multiples (ACM) pour identifier les profils d'entreprises.",
  "Interprétation des résultats et formulation de recommandations."
],

dataset: {
  source: "Répertoire NINEA",
  size: "1001 entreprises",
  location: "Diourbel",
  subject: "Création d'entreprises",
   results: [
    "Les entreprises du secteur des services représentent la plus grande part des créations.",
    "Le test du Khi-deux met en évidence des relations significatives entre certaines caractéristiques.",
    "L'Analyse des Correspondances Multiples (ACM) permet d'identifier différents profils d'entreprises.",
  ],
},    

    technologies: [
      "R",
      "Stata",
      "ACM",
      "Khi²"
    ],

    image: null,
  },
];