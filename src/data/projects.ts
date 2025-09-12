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
    tags: ['conception visuelle', 'médiation'],
    cover: '/images/projects/covers/touche_pas_a_ma_dune.jpg',
    gallery: [
      '/images/projects/touche_pas_a_ma_dune(2).jpg',
      '/images/projects/touche_pas_a_ma_dune(3).jpg',
      '/images/projects/touche_pas_a_ma_dune(4).jpg',
      '/images/projects/touche_pas_a_ma_dune(5).jpg',
    ],
    summary:
      'Série d’affiches informatives destinées aux plages à forte fréquentation touristique.',
    context: `### Contexte du stage
      
Durant mon stage à **Saint-Palais-sur-Mer**, j'ai été chargée de créer des visuels de sensibilisation pour préserver les écosystèmes dunaires.

#### Objectifs de la mission
- Créer des **visuels simples et impactants**
- Rendre les messages **compréhensibles par le grand public**
- Sensibiliser aux enjeux de **préservation des dunes**

> Les dunes sont des écosystèmes fragiles qui nécessitent une protection particulière face à la pression touristique.

### Approche créative

J'ai développé une série d'affiches avec :
1. **Messages clairs** et directs
2. **Visuels attractifs** et pédagogiques  
3. **Codes couleurs** adaptés à l'environnement littoral

*L'objectif était de faire prendre conscience de la fragilité de ces espaces naturels tout en maintenant un ton bienveillant.*`,
    contributions: [
      'Rédaction d’un message accrocheur',
      'Création des visuels',
      'Présentation de la série d’affiche aux élus de la commune pour choisir le visuel final',
    ],
    featured: false,
  },
  {
    slug: 'lagunage-biodiversite',
    title: 'Lagunage et biodiversité — Panneaux explicatifs',
    year: 2022,
    tags: ['travail de recherche', 'conception visuelle', 'médiation'],
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
    title: 'Film « Traverser »',
    year: 2023,
    tags: ['montage vidéo', 'conduite d’entretien', 'enquête terrain', 'réalisation audiovisuelle'],
    cover: '/images/projects/covers/affiche_film_traverser.png',
    gallery: ['/videos/TRAVERSER.mp4'],
    summary:
      'Création d’un film documentaire universitaire pour la mission Fleuve de Bordeaux Métropole.',
    context: `Ce film a été coréalisé dans le cadre du **master TIME**, que j'ai coréalisé à la demande de **Bordeaux Métropole** dans le cadre de la mission Fleuve.

La mission consistait à recueillir la parole des habitants. Pour ce faire, nous nous sommes immergés dans la vie urbaine, à travers :
- des comptages
- des repérages 
- des enquêtes et entretiens approfondis

Nous avons choisi de nous concentrer sur la thématique des **infrastructures de franchissement**, tels que les ponts emblématiques et le bateau.

### Notre approche méthodologique

Ces éléments deviennent des protagonistes à part entière, incarnant les connexions physiques et symboliques entre les deux rives de la Garonne.

Notre choix d'interviewer *deux étudiants* était stratégique :
1. **Représentation** : ils sont souvent sous-représentés dans les décisions politiques
2. **Mobilité** : leur mobilité dynamique façonne celle de la ville

> Traverser met également en lumière les temporalités des habitants, en soulignant le rythme quotidien des trajets domicile-travail.

Au-delà des infrastructures, le documentaire explore la vision des habitants sur la Garonne : qu'apporte-t-elle à leur quotidien ? Comment perçoivent-ils ce fleuve qui traverse leur ville ?`,
    synopsis:
      'Le film plonge au cœur du quotidien des habitants bordelais, en explorant leur relation intime avec la Garonne, le fleuve qui façonne la vie de la ville.',
    featured: true,
  },
  {
    slug: 'offre-scolaire-charentes',
    title: 'Développement de l’offre scolaire en Charentes',
    year: 2024,
    tags: [
      'conduite d’entretien',
      'réalisation audiovisuelle',
      'montage vidéo',
      'travail de recherche',
    ],
    cover: '/images/projects/covers/logo_charente_tourisme.png',
    gallery: [
      '/videos/charentes_tourisme/INTRODUCTION VERSION FINALE.mp4',
      '/videos/charentes_tourisme/PRESENTATION CIBLE VERSION FINALE.mp4',
      "/videos/charentes_tourisme/CONCEPTION DE L'OFFRE VERSION FINALE.mp4",
      "/videos/charentes_tourisme/PROMOTION DE L'OFFRE VERSION FINALE.mp4",
    ],
    summary:
      'Étude, enquête et conception d’outils pour renforcer l’accueil du public scolaire dans l’offre touristique des Charentes.',
    context:
      'Dans le cadre de mon stage de master au sein de Charentes Tourisme, j’ai mené un travail de recherche et de terrain visant à mieux comprendre les freins, attentes et besoins des établissements scolaires (maternelles et primaires) concernant les sorties pédagogiques.',
    contributions: [
      'Diffusion de questionnaires et réalisation d’entretiens auprès d’écoles',
      'Recensement et cartographie des offres pédagogiques existantes à destination des scolaires',
      'Entretiens et échanges avec des prestataires touristiques pour analyser leurs dispositifs et attentes',
      'Élaboration d’un plan de formation pour accompagner les prestataires dans la création d’offres adaptées au public scolaire',
      'Réalisation d’un module vidéo pédagogique et montage de capsules pour la formation',
      'Présentation du projet devant des élus et des acteurs institutionnels',
    ],
    featured: true,
  },
  {
    slug: 'chateau-olivier',
    title: 'Le travail de la vigne et du vin',
    year: 2023,
    tags: ['conduite d’entretien', 'conception visuelle', 'travail de recherche '],
    cover: '/images/projects/covers/chateau_olivier.png',
    gallery: ['/images/projects/chateau_calendrier.png', '/images/projects/chateau_lexique.png'],
    summary:
      'Création de posters pédagogiques pour sensibiliser les visiteurs au travail de la vigne et du vin.',
    context:
      'Réalisation de deux posters destinés aux visiteurs du Château Olivier à Pessac/Léognan dans le cadre du master TIME.',
    contributions: [
      'Le premier poster présente un calendrier cyclique décrivant le travail de la vigne, le cycle végétatif du raisin et les étapes de production du vin blanc et du vin rouge sur une année.',
      "Le second poster est un lexique détaillé expliquant les différentes étapes et termes liés à la viticulture et à l'œnologie. Ces supports ont été affichés dans la salle de dégustation afin d’informer et de sensibiliser le public au travail viticole et au processus de fabrication du vin.",
    ],
  },
  {
    slug: 'film-gentrification',
    title: 'Film « Nouvelle hair à Saint-Michel »',
    year: 2023,
    tags: ['réalisation audiovisuelle', 'montage vidéo', 'conduite d’entretien'],
    cover: '/images/projects/covers/film_gentrification.png',
    gallery: ['/videos/nouvelle_hair.mp4'],
    summary:
      'Documentaire explorant la gentrification du quartier Saint-Michel à Bordeaux à travers le regard des salons de coiffure.',
    context:
      'Ce film a été coréalisé dans le cadre du master TIME, à l’issue d’un travail académique portant sur les lieux de la gentrification à Bordeaux. Notre démarche cinématographique a consisté à mettre en lumière la voix des commerçants, considérés comme des sentinelles sociales, afin de comprendre l’impact de la gentrification sur leur activité, leur clientèle et leur quartier. Deux coiffeurs incarnent cette dualité :	- un coiffeur-barbier traditionnel, ancré dans le tissu populaire et fidèle à une clientèle diverse ; - une coiffeuse moderne, à la tête d’un salon dernier cri, symbolisant l’arrivée d’une clientèle plus aisée. Le contraste de ces témoignages révèle les tensions mais aussi les synergies qui accompagnent les mutations urbaines, offrant ainsi une lecture intime et authentique de la gentrification.',
    synopsis:
      'Nouvelle Hair à Saint-Michel est un documentaire qui explore les nuances de la gentrification dans un quartier populaire de Bordeaux. À travers le prisme des salons de coiffure, le film donne la parole à des coiffeurs, acteurs clés du quartier, qui témoignent des transformations profondes et parfois controversées de leur lieu de travail.',
  },
  {
    slug: 'memoire-de-recherche',
    title: 'Mémoire de recherche : discours et images en ligne',
    year: 2025,
    tags: [
      'gestion de projet',
      'enquête terrain',
      'conduite d’entretien',
      'méthodologie',
      'travail de recherche',
      'analyse critique',
      'esprit de synthèse',
    ],
    cover: '/images/projects/covers/memoire_cover.jpg',
    summary:
      'Mémoire de recherche analysant la représentation de la nature dans les campings de Charente-Maritime.',
    context:
      'Ce mémoire a été réalisé dans le cadre de mon master TIME (Tourisme, Innovation et Médiations) à l’Université Bordeaux Montaigne. L’objectif était d’analyser comment la nature est représentée, valorisée et perçue dans l’univers du camping, un mode d’hébergement touristique lié à l’expérience du plein air. Ma méthodologie a combiné plusieurs approches : élaboration d’une typologie des campings,	analyse des sites internet (discours textuels et visuels),	observation de terrain,	enquête par questionnaire auprès des campeurs, entretiens avec des gestionnaires d’éco-camping.',
    outcomes: [
      'Les différentes manières dont la nature est mise en scène et intégrée aux stratégies de communication',
      'La place des initiatives écologiques et du discours environnemental',
      'Les écarts entre la mise en avant marketing de la nature et les pratiques réelles des gestionnaires.',
    ],
    document: 'documents/MEMOIRE_LANGLAIS_MAELLE.pdf',
    featured: true,
  },
  {
    slug: 'seminaire-portfolio-culturel',
    title: 'Portfolio des manifestations culturelles et scientifiques',
    year: 2024,
    tags: [
      'analyse critique',
      'esprit de synthèse',
      'curiosité intellectuelle',
      'conception visuelle',
    ],
    cover: '/images/projects/covers/seminaire.png',
    summary:
      'Exploration et analyse de conférences, expositions, projections et festivals suivis durant mon master, témoignant de mon intérêt pour l’art, le cinéma, la culture et la recherche scientifique.',
    context:
      'Dans le cadre de mon master, j’ai constitué un portfolio recensant et analysant les différentes manifestations culturelles et scientifiques auxquelles j’ai participé. Cet exercice m’a permis de  nourrir mes recherches académiques par des apports extérieurs.',
    outcomes: [
      'Témoigner d’une curiosité personnelle et académique pour des thématiques variées (art, cinéma, urbanisme, environnement, patrimoine, sciences sociales, etc.',
      'Développer ma capacité à analyser et restituer des événements culturels en lien avec mes champs d’étude.',
    ],
    document: 'documents/seminaire.pdf',
  },
] as const;

export const getFeaturedProjects = () => projectsData.filter((project) => project.featured);
export const getProjectBySlug = (slug: string) =>
  projectsData.find((project) => project.slug === slug);
export const getProjectsByTag = (tag: string) =>
  projectsData.filter((project) => project.tags.indexOf(tag) !== -1);
