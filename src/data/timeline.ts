export type TimelineEvent = {
  year?: number;
  years?: number[];
  title: string;
  location: string;
  description: string;
  types?: string[];
  tags?: string[];
};

export const timelineData: TimelineEvent[] = [
  {
    year: 2024,
    title: 'Assistante de projet',
    location: 'Service commercialisation éthique, Charentes Tourisme (CDT), La Rochelle (17)',
    description: `-	Travail de recherche sur le tourisme éducatifs et ses enjeux 
-	Enquête terrain auprès des écoles du territoire pour identifier les besoins et freins liés aux sorties scolaires 
-	Conception d’un plan de formation 
-	Interviews et réalisation de capsules vidéos`,
    types: ['Expérience', 'Stage'],
  },
  {
    years: [2023, 2025],
    title: 'Master Territoires, Images, Médiation et Environnement',
    location: 'Université Bordeaux Montaigne, Pessac (33)',
    description: `- Analyser de terrains des projets territoriaux concernant des enjeux environnementaux et en faire des diagnostics
- Produire et expérimenter des supports créatifs et critiques de médiation au service des acteurs du territoire
- Maîtriser de l'image et de réalisation de productions audiovisuelles au service de l'animation territoriale
- Explorer de nouveaux types d'écritures scientifiques dans une perspective de recherche`,
    types: ['Formation', 'Certification'],
  },
  {
    years: [2023, 2025],
    title: "Vacataire d'inscription",
    location: 'Service scolarité centrale, Université Bordeaux Montaigne, Pessac (33)',
    description: `-	Réalisation des inscriptions administratives des étudiants (création de dossiers et vérification des pièces justificatives) 
-	Accueil, Information et orientation des étudiants par téléphone, mail, en présentiel 
-	Formation et accompagnement des nouveaux vacataires, transmission des procédures et bonnes pratiques`,
    types: ['Emploi saisonnier'],
  },
  {
    year: 2022,
    title: 'Chargée de projet',
    location: 'Service technique Mairie de St Palais-sur-Mer (17)',
    description: `-	Réalisation d’outils pédagogique et de médiation 
-	Travail sur le mise en place d’un forum de l’environnement`,
    types: ['Expérience', 'Stage'],
  },
  {
    years: [2020, 2021],
    title: 'Réceptionniste en camping',
    location: 'Capfun, Les Chênes - Médis (17)',
    description: `-	Accueil des vacanciers, gestions des arrivées et départs, enregistrement des réservations  
-	Renseignement des clients sur les services du camping, les activités touristiques locales et traitement des demandes courantes 
-	Encaissement, facturation, gestion administrative des dossiers et communication avec les autres services (animation, maintenance)`,
    types: ['Emploi saisonnier'],
  },
  {
    years: [2019, 2022],
    title: "Agent d'accueil",
    location: 'Banque Populaire, Saujon (17)',
    description: `-	Accueil physique et téléphonique des clients, identification des besoins et prise de rdv 
-	Réalisation d’opérations courantes 
-	Mise à jour des dossiers clients et accompagnement dans l’utilisation des services en lignes`,
    types: ['Emploi saisonnier'],
  },
  {
    years: [2018, 2021],
    title: 'Licence en Géographie et Aménagement',
    location: 'Université Bordeaux Montaigne, Pessac (33)',
    description: `Parcours géographie sociales et politiques, développement des territoires`,
    types: ['Certification', 'Formation'],
    tags: ['techniques d’enquêtes', 'interactions sociétés et milieux', 'droit', 'SIG'],
  },
  {
    year: 2018,
    title: 'Animatrice',
    location: 'Centre de loisirs, Rétaud (17)',
    description: `
-	Encadrement et animation d’enfants de 6 à 8 ans lors des activités quotidiennes et sorties
-	Conception et mise en place d’activités ludiques, sportives, créatives et pédagogiques adaptées aux âges
-	Participation à l’élaboration et au suivi du projet pédagogique avec l’équipe d’animation
    `,
    types: ['Expérience'],
  },
  {
    year: 2018,
    title: 'BAFA',
    location: 'Familles Rurales (17)',
    description: ``,
    types: ['Certification'],
    tags: ['animation', 'encadrement', 'pédagogie'],
  },
  {
    year: 2017,
    title: 'Service civique',
    location: 'École élémentaire Condorcet, Angoulême (16)',
    description: `
-	Animation d’ateliers informatique et artistique
-	Soutien individualisé ou en petits groupes auprès des élèves en difficulté
-	Encadrement des temps périscolaires (cantine, récréation, sorties scolaires)
`,
    types: ['Expérience'],
    tags: ['pédagogie', 'adaptabilité', 'gestion de groupe'],
  },
  {
    years: [2015, 2017],
    title: 'BTS Management des Unités Commerciales',
    location: 'Lycée Marguerite de Valois, Angoulême (16)',
    description: ``,
    types: ['Formation', 'Certification'],
    tags: ['communication', 'droit', 'marketing', 'gestion'],
  },
  {
    years: [2015, 2017],
    title: 'Hôtesse de caisse',
    location: 'Leclerc, Saintes (17)',
    description: ` 
-	Encaissement des achats (espèces, carte bancaire, chèques, bons) et respect des procédures de sécurité et de contrôle des moyens de paiement
-	Vérification et comptage de caisse en ouverture et fermeture
-	Information et orientation des clients dans le magasin
`,
    types: ['Emploi saisonnier', 'Job étudiant'],
  },
  {
    year: 2015,
    title: 'Baccalauréat Économique et Social',
    location: 'Lycée Bellevue, Saintes (17)',
    description: `**Diplôme de fin d'études secondaires** :
      
- Option **Sciences politiques**`,
    types: ['Certification'],
  },
] as const;
