export type Project = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  cover: string;
  gallery?: string[];
  document?: string;
  summary?: string;
  context?: string;
  synopsis?: string;
  contributions?: string[];
  outcomes?: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projectsData: Project[] = [
  {
    slug: 'sensibilisation-dunes',
    title: '« Ne touche pas à ma dune » — Affiches de sensibilisation',
    year: 2022,
    tags: ['conception visuelle'],
    cover: '/images/projects/covers/dune_image_projet.png',
    gallery: [
      '/images/projects/touche_pas_a_ma_dune(2).jpg',
      '/images/projects/touche_pas_a_ma_dune(3).jpg',
      '/images/projects/touche_pas_a_ma_dune(4).jpg',
      '/images/projects/touche_pas_a_ma_dune(5).jpg',
    ],
    summary:
      'Série d’affiches informatives destinées aux plages à forte fréquentation touristique.',
    context: `Dans le cadre de mon stage à **Saint-Palais-sur-Mer**, j'ai été chargée de créer des visuels de sensibilisation pour préserver les écosystèmes dunaires. 

**Objectifs de la mission**
  -	Créer des visuels simples et impactants
  -	Rendre les messages compréhensibles par le grand public
  -	Sensibiliser aux enjeux de préservation des dunes`,
    featured: false,
  },
  {
    slug: 'lagunage-biodiversite',
    title: '« Lagunage et biodiversité » — Panneaux explicatifs',
    year: 2022,
    tags: ['travail de recherche', 'conception visuelle', 'esprit de synthèse'],
    cover: '/images/projects/covers/lagunage.png',
    gallery: [
      '/images/projects/covers/lagunage.png',
      '/images/projects/lagunage_texte_explicatif.png',
      '/images/projects/biodiversité_lagunage.png',
    ],
    summary:
      'Panneaux pédagogiques expliquant le fonctionnement d’un système de lagunage et valorisant sa biodiversité.',
    context:
      "Dans le cadre de mon stage à Saint-Palais-sur-Mer, j'ai créé des visuels explicatifs sur le système de lagunage situé dans un marais de la commune. Cet espace paraissait « non entretenu » aux yeux des visiteurs à cause de sa végétation abondante, d'où la nécessité de valoriser son rôle écologique afin d’obtenir une meilleure compréhension du public.",
    contributions: [
      'Travail de recherche sur les systèmes de lagunage et sur la biodiversité du site',
      'Création de visuels pédagogiques',
      'Sensibilisation auprès du public',
    ],
    featured: false,
  },
  {
    slug: 'traverser-film',
    title: '« Traverser » - Film',
    year: 2023,
    tags: ['montage vidéo', 'conduite d’entretien', 'enquête terrain', 'réalisation audiovisuelle'],
    cover: '/images/projects/covers/affiche_film_traverser.png',
    gallery: ['/videos/TRAVERSER.mp4'],
    summary: 'Film documentaire sur le fleuve Garonne.',
    context: `La mission consistait à recueillir la parole des habitants de Bordeaux, concernant le fleuve. Nous avons choisi de l’étudier sous le prisme de la traversée du fleuve.  Pour cela, nous avons réalisé un travail d’observation terrain, de comptage et d’entretiens auprès de deux étudiants. 

Nous avons choisi de nous concentrer sur la thématique des **infrastructures de franchissement**, tels que les ponts et le bateau. Ces éléments deviennent des protagonistes à part entière, incarnant les connexions physiques et symboliques entre les deux rives de la Garonne. Notre choix d’interviewer deux étudiants était stratégique : d’une part, ils sont souvent sous-représentés dans les décisions politiques, et d’autre part, leur mobilité dynamique façonne celle de la ville.

*Traverser* met également en lumière les temporalités des habitants, en soulignant le rythme quotidien des trajets domicile-travail. Les ponts deviennent des lieux de transition et de rencontre, symboles de connectivité et de passage.
`,
    synopsis: `Le film plonge au cœur du quotidien des habitants bordelais, en explorant leur relation intime avec la Garonne, le fleuve qui façonne la vie de la ville.
>*Traverser* est un film documentaire issu du master TIME, coréalisé à la suite d’une commande de **Bordeaux Métropole** dans le cadre de la mission Fleuve.
`,
    featured: true,
  },
  {
    slug: 'offre-scolaire-charentes',
    title: '« Tourisme éducatif » - l’offre scolaire en Charentes',
    year: 2024,
    tags: [
      'conduite d’entretien',
      'réalisation audiovisuelle',
      'montage vidéo',
      'travail de recherche',
    ],
    cover: '/images/projects/covers/toursime_scolaire_image.png',
    gallery: [
      '/videos/charentes_tourisme/INTRODUCTION VERSION FINALE.mp4',
      '/videos/charentes_tourisme/PRESENTATION CIBLE VERSION FINALE.mp4',
      "/videos/charentes_tourisme/CONCEPTION DE L'OFFRE VERSION FINALE.mp4",
      "/videos/charentes_tourisme/PROMOTION DE L'OFFRE VERSION FINALE.mp4",
    ],
    summary: 'Étude et enquête concernant le tourisme pédagogique en Charentes.',
    context: `
Dans le cadre de mon stage de master au sein de Charentes Tourisme, j’ai mené un travail de recherche et d’enquête visant à mieux comprendre les freins, attentes et besoins des établissements scolaires (maternelles et primaires) de Charente et Charente-Maritime concernant les sorties éducatives. Ensuite, j’ai réalisé des entretiens avec des médiatrices culturelles de différents sites culturels afin de créer des capsules vidéos.

Les vidéos ci-dessous traitent des thématiques suivants :
1. Les avances d’accueillir du public scolaire
2. Définir le tourisme scolaire
3. L’offre à destinations des scolaires
4. La promotion de l’offre`,
    contributions: [
      'Diffusion de questionnaires auprès d’écoles',
      'Recensement des offres pédagogiques existantes à destination des scolaires',
      'Échanges avec des médiatrices culturelles sur le tourisme scolaire, sous forme d’entretiens filmés',
      'Transcription des entretiens, analyse des discours et écriture des capsules vidéos',
      'Élaboration d’un plan de formation pour accompagner les prestataires dans la création d’offres adaptées au public scolaire',
      'Réalisation d’un module vidéo pédagogique et montage de capsules pour la formation',
      'Montage et réalisation des capsules vidéos',
    ],
    featured: true,
  },
  {
    slug: 'chateau-olivier',
    title:
      '« Que se cache-t-il derrière une bouteille de vin ? » - Le travail de la vigne et du vin',
    year: 2023,
    tags: [
      'conduite d’entretien',
      'conception visuelle',
      'travail de recherche',
      'enquête terrain',
    ],
    cover: '/images/projects/covers/chateau_olivier.png',
    gallery: ['/images/projects/chateau_calendrier.png', '/images/projects/chateau_lexique.png'],
    summary:
      'Création de posters pédagogiques pour sensibiliser les visiteurs au travail de la vigne et du vin.',
    context: `
Réalisation de deux posters pédagogiques pour le Château Olivier à Pessac/Léognan dans le cadre du master TIME. Le but était de proposer un outil de médiation à destinations des visiteurs. Nous avons donc choisi de mettre en lumière le travail de la vigne et du vin, pour sensibiliser et informer le public au travail viticole et au processus de fabrication du vin.
-	Le premier poster présente un calendrier cyclique décrivant le travail de la vigne et son cycle végétatif, ainsi que les étapes de production du vin blanc et du vin rouge.
-	Le second poster est un lexique détaillé expliquant les différentes étapes et termes liés à la viticulture et à l’œnologie.
    `,
    contributions: [
      'Entretien mené auprès des employés',
      'Travail de recherche sur le cycle de la vigne',
      'Réalisation des posters',
      'Présentation des livrables auprès des propriétaires du château',
    ],
  },
  {
    slug: 'film-gentrification',
    title: '« Nouvelle hair pour Saint-Michel » - Film',
    year: 2023,
    tags: ['réalisation audiovisuelle', 'montage vidéo', 'conduite d’entretien', 'enquête terrain'],
    cover: '/images/projects/covers/film_gentrification.png',
    gallery: ['/videos/nouvelle_hair.mp4'],
    summary:
      'Documentaire explorant la gentrification du quartier Saint-Michel à Bordeaux à travers le regard des commercants.',
    context: `Notre démarche cinématographique a consisté à mettre en lumière la voix des commerçants, afin de comprendre l’impact de la gentrification sur le quartier, leur activité et leur clientèle. Deux coiffeurs incarnent cette dualité ; un coiffeur-barbier, ancré dans le tissu populaire et fidèle à une clientèle diverse, et une coiffeuse spécialisé dans le végétal, à la tête d’un salon concept store, symbolisant l’arrivée d’une clientèle plus aisée.
>  Ce film a été coréalisé dans le cadre du master TIME, à l’issue d’un travail académique portant sur les lieux de la gentrification à Bordeaux.
`,
    synopsis:
      '*Nouvelle Hair pour Saint-Michel* est un documentaire qui explore les nuances de la gentrification dans un quartier populaire de Bordeaux. Le film donne la parole à des coiffeurs, acteurs clés du quartier, qui témoignent des transformations profondes et parfois controversées de leur lieu de travail. Le contraste de ces témoignages révèle les tensions mais aussi les synergies qui accompagnent les mutations urbaines, offrant ainsi une lecture intime et authentique de la gentrification.',
  },
  {
    slug: 'memoire-de-recherche',
    title: '« Discours et image de nature » - Mémoire de recherche',
    year: 2025,
    tags: [
      'enquête terrain',
      'conduite d’entretien',
      'travail de recherche',
      'analyse critique',
      'esprit de synthèse',
    ],
    cover: '/images/projects/covers/memoire_cover.jpg',
    summary:
      'Étude universitaire sur la représentation de la nature à travers la communication en ligne des campings de Charente-Maritime.',
    context: `Ce mémoire a été réalisé dans le cadre de mon master à l’Université Bordeaux Montaigne. L’objectif était d’analyser comment la nature est représentée à travers la communication en ligne des campings, un mode d’hébergement touristique lié à l’expérience du plein air.

Ma méthodologie a combiné plusieurs approches tels que l’élaboration d’une typologie des campings, l’analyse des sites internet (discours textuels et visuels), l’observation de terrain, l’enquête par questionnaire auprès des campeurs, l’entretiens avec des gestionnaires de campings.`,
    outcomes: [
      'Les différentes manières dont la nature est mise en scène et intégrée aux stratégies de communication,',
      'La place des initiatives écologiques et du discours environnemental',
      'Les écarts entre la mise en avant marketing de la nature et les pratiques réelles des gestionnaires',
    ],
    document: 'documents/MEMOIRE_LANGLAIS_MAELLE.pdf',
    featured: true,
  },
  {
    slug: 'seminaire-portfolio-culturel',
    title: 'Portfolio des manifestations culturelles et scientifiques',
    year: 2024,
    tags: ['analyse critique', 'esprit de synthèse', 'conception visuelle'],
    cover: '/images/projects/covers/seminaire.png',
    summary: 'Registre des manifestations culturelles suivies durant le deux années de master.',
    context: `
Dans le cadre de mon master, j’ai constitué un portfolio recensant et analysant les différentes manifestations culturelles et scientifiques auxquelles j’ai participé. 

**Objectifs de ce travail**
-	Nourrir mes recherches académiques par des apports extérieurs
-	Nourrir ma curiosité personnelle et académique pour des thématiques variées (art, cinéma, urbanisme, environnement, patrimoine, sciences sociales, etc.)
-	Développer ma capacité à restituer des événements culturels en lien avec mes champs d’étude
    `,
    document: 'documents/seminaire.pdf',
  },
] as const;

export const getFeaturedProjects = () => projectsData.filter((project) => project.featured);
export const getProjectBySlug = (slug: string) =>
  projectsData.find((project) => project.slug === slug);
export const getProjectsByTag = (tag: string) =>
  projectsData.filter((project) => project.tags.indexOf(tag) !== -1);
