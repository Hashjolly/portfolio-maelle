export type TimelineEvent = {
  year: number;
  title: string;
  location: string;
  description: string;
  type: 'education' | 'experience' | 'certification';
  tags?: string[];
};

export const timelineData: TimelineEvent[] = [
  {
    year: 2024,
    title: 'Consultante indépendante en géographie du tourisme',
    location: 'La Rochelle',
    description: 'Études d\'impact, cartographie et sensibilisation pour collectivités et organismes de tourisme durable.',
    type: 'experience',
    tags: ['freelance', 'consulting', 'tourisme durable']
  },
  {
    year: 2023,
    title: 'Master 2 Géographie - Aménagement et Développement Territorial',
    location: 'Université de La Rochelle',
    description: 'Spécialisation en gestion intégrée des zones côtières et tourisme durable. Mention Très Bien.',
    type: 'education',
    tags: ['master', 'littoral', 'aménagement']
  },
  {
    year: 2022,
    title: 'Stage - Sensibilisation environnementale',
    location: 'Collectivité de Saint-Palais-sur-Mer',
    description: 'Création d\'affiches pédagogiques sur la protection des dunes et valorisation du système de lagunage. 6 mois.',
    type: 'experience',
    tags: ['stage', 'design', 'sensibilisation']
  },
  {
    year: 2021,
    title: 'Licence Géographie et Aménagement',
    location: 'Université de Poitiers',
    description: 'Formation en géographie physique et humaine, SIG, cartographie. Mention Bien.',
    type: 'education',
    tags: ['licence', 'géographie', 'SIG']
  },
  {
    year: 2021,
    title: 'Certification Design Graphique',
    location: 'Formation en ligne (Domestika)',
    description: 'Perfectionnement en design graphique, typographie et mise en page pour la communication environnementale.',
    type: 'certification',
    tags: ['design', 'formation continue']
  },
  {
    year: 2020,
    title: 'Stage terrain - Étude d\'impact littoral',
    location: 'Parc Naturel Régional du Marais Poitevin',
    description: 'Analyse de l\'évolution du trait de côte et impact du tourisme sur les écosystèmes dunaires. 3 mois.',
    type: 'experience',
    tags: ['stage', 'terrain', 'littoral']
  },
  {
    year: 2018,
    title: 'Baccalauréat Scientifique',
    location: 'Lycée René-Josué Valin, La Rochelle',
    description: 'Spécialité SVT, option environnement. Mention Très Bien.',
    type: 'education',
    tags: ['bac', 'sciences']
  }
] as const;
