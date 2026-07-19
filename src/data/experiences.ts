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
    company: "Adam's Cleaning Services",
    position: "Agent d'entretien",
    location: "Sénégal",
    period: "Déc. 2024 – Juil. 2025",
    description: [
      "Nettoyage et entretien des locaux.",
      "Respect des normes d'hygiène et de sécurité.",
      "Travail en équipe et gestion des priorités.",
    ],
    technologies: [
      "Organisation",
      "Rigueur",
      "Travail d'équipe",
    ],
  },

  {
    id: 2,
    company: "EDK Sénégal",
    position: "Employé polyvalent",
    location: "Sénégal",
    period: "Déc. 2023 – Nov. 2024",
    description: [
      "Accueil et accompagnement des clients.",
      "Gestion des rayons et des stocks.",
      "Participation aux opérations quotidiennes.",
    ],
    technologies: [
      "Relation client",
      "Organisation",
      "Polyvalence",
    ],
  },
];