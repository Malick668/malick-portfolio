export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Service Régional de la Statistique et de la Démographie (SRSD)",
    position: "Stagiaire Statisticien / Data Analyst",
    location: "Sénégal",
    period: "Juil. 2022 – 6 mois",
    description: [
      "Extraction, préparation et nettoyage des données.",
      "Réalisation d'analyses statistiques descriptives.",
      "Création de tableaux de bord interactifs avec Power BI et Tableau.",
    ],
    technologies: [
      "SQL",
      "Excel",
      "Python",
      "SPSS",
      "STATA",
      "Power BI",
      "Tableau",
    ],
  },

  {
    id: 2,
    company: "Agence Nationale de la Statistique et de la Démographie (ANSD)",
    position: "Superviseur d'enquête",
    location: "Sénégal",
    period: "Août 2024 – 3 mois",
    description: [
      "Supervision des opérations de collecte de données.",
      "Contrôle de la cohérence, de la complétude et de la qualité des données collectées.",
      "Accompagnement et suivi des équipes de collecte.",
    ],
    technologies: [
      "Collecte de données",
      "Contrôle qualité",
      "Excel",
      "Supervision",
    ],
  },

  {
    id: 3,
    company: "Agence Nationale de la Statistique et de la Démographie (ANSD)",
    position: "Contrôleur – RGPH-5",
    location: "Sénégal",
    period: "Mai 2023 – Juin 2023",
    description: [
      "Contrôle des opérations de collecte dans le cadre du 5ᵉ Recensement général de la Population et de l'Habitat.",
      "Vérification de la qualité et de la cohérence des données collectées.",
      "Participation au suivi et au contrôle des opérations de recensement.",
    ],
    technologies: [
      "Collecte de données",
      "Contrôle qualité",
      "Statistiques",
      "RGPH-5",
    ],
  },

  {
    id: 4,
    company: "Agence Nationale de la Statistique et de la Démographie (ANSD)",
    position: "Agent de collecte – EMSAS II",
    location: "Sénégal",
    period: "Nov. 2023 – Déc. 2023",
    description: [
      "Collecte de données dans le cadre de l'étude monographique sur l'extraction du sable au Sénégal.",
      "Recueil et vérification des informations auprès des sources enquêtées.",
      "Participation aux opérations de collecte et de contrôle des données.",
    ],
    technologies: [
      "Collecte de données",
      "Enquête statistique",
      "Contrôle qualité",
      "Statistiques",
    ],
  },

  {
    id: 5,
    company: "Reed Bef",
    position: "Commis de cuisine",
    location: "Houdemont, Nancy",
    period: "Depuis déc. 2025",
    description: [
      "Préparation des commandes.",
      "Participation aux opérations quotidiennes en cuisine.",
      "Respect des normes d'hygiène et de sécurité alimentaire.",
      "Travail en équipe et gestion des priorités.",
    ],
    technologies: [
      "Organisation",
      "Rigueur",
      "Travail d'équipe",
      "Gestion des priorités",
    ],
  },
];