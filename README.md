# Géo-Portfolio | Maëlle Langlais

Portfolio professionnel d'une géographe spécialisée en tourisme durable et gestion du littoral, réalisé avec Astro, TypeScript et Tailwind CSS.

## 🌊 À propos du projet

Site vitrine présentant l'expertise de Maëlle Langlais en :

- Sensibilisation environnementale
- Cartographie et SIG
- Études d'impact territorial
- Communication visuelle pour la protection du littoral
- Conseil en tourisme durable

## 🚀 Technologies utilisées

- **Framework :** [Astro](https://astro.build) v4.0+
- **Language :** TypeScript
- **Styling :** Tailwind CSS
- **Icons :** Lucide Astro
- **Hosting :** Netlify (recommandé)

## 🎨 Design System

### Palette de couleurs

- **Primary:** `#DB8F75` (Sable rosé/terracotta littoral)
- **Atlantic:** `#2A6F8E` (Bleu océan)
- **Salicornes:** `#6C8C7A` (Vert zones humides)
- **Cream:** `#F7F4F1` (Fond crème)
- **Dark:** `#1F2937` (Texte principal)

### Typographies

- **Display :** Playfair Display (titres)
- **Sans :** Inter (texte courant)

## 📁 Structure du projet

```
geo-portfolio/
├── public/
│   ├── images/
│   │   └── projects/          # Images des projets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   └── ui/                # Design system
│   ├── data/                  # Données structurées
│   ├── layouts/
│   ├── pages/                 # Pages du site
│   └── images/                # Images optimisées
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 📋 Prérequis

- Node.js 18+
- npm, yarn ou pnpm

## 🛠️ Installation

1. **Cloner le projet**

```bash
git clone <repository-url>
cd geo-portfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Démarrer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir dans le navigateur**

```
http://localhost:4321
```

## 📜 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linting
npm run lint
npm run lint:fix

# Formatage du code
npm run format
```

## 🌍 Déploiement

### Netlify (Recommandé)

1. **Build settings :**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Variables d'environnement :**
   - `NODE_VERSION`: `18`

### Autres plateformes

Le site peut être déployé sur :

- Vercel
- GitHub Pages
- Cloudflare Pages
- Serveur traditionnel

## 🎯 Fonctionnalités

### Pages

- ✅ **Accueil** - Hero, projets phares
- ✅ **Parcours** - Timeline, compétences, formation
- ✅ **Projets** - Grille filtrable + pages détail
- ✅ **Contact** - Formulaire + informations
- ✅ **Mentions légales** - Conformité RGPD
- ✅ **404** - Page d'erreur personnalisée

### Composants UI

- ✅ **Button** - Variantes primary/outline/white
- ✅ **Card** - Conteneur avec ombres
- ✅ **Tag** - Étiquettes colorées
- ✅ **Section** - Wrapper de section
- ✅ **Container** - Conteneur responsive

### Fonctionnalités avancées

- ✅ **Lightbox** - Galerie d'images interactive
- ✅ **Filtres** - Filtrage dynamique des projets
- ✅ **SEO** - Meta tags, Open Graph, Schema.org
- ✅ **Performance** - Images lazy, optimisations
- ✅ **A11y** - Contrastes AA, navigation clavier
- ✅ **Responsive** - Mobile-first design

## 📊 Projets inclus

1. **« Ne touche pas à ma dune »** - Affiches sensibilisation
2. **Lagunage & Biodiversité** - Panneaux explicatifs
3. **« Traverser »** - Affiche de film documentaire
4. **Cartographie littoral** - Analyse évolution trait de côte
5. **Guide tourisme durable** - Publication professionnelle

## 🔧 Personnalisation

### Modifier les données

Éditez les fichiers dans `/src/data/` :

- `site.ts` - Informations générales
- `about.ts` - Profil et compétences
- `timeline.ts` - Parcours professionnel
- `projects.ts` - Portfolio projets

### Ajouter des images

1. Placez vos images dans `/public/images/`
2. Référencez-les dans les fichiers de données
3. Optimisez pour le web (WebP recommandé)

### Modifier le design

1. Éditez `tailwind.config.mjs` pour les couleurs/fonts
2. Modifiez les composants UI dans `/src/components/ui/`
3. Adaptez les layouts dans `/src/layouts/`

## 🔒 Sécurité & RGPD

- ✅ Pas de cookies de tracking
- ✅ Formulaire sans stockage de données
- ✅ Mentions légales complètes
- ✅ Respect de la vie privée

## 📈 Performance

Le site est optimisé pour :

- ⚡ **Core Web Vitals** - Scores élevés
- 🖼️ **Images** - Lazy loading, formats modernes
- 📱 **Mobile** - Performance sur mobile
- ♿ **Accessibilité** - Standard WCAG AA

## 🆘 Support

Pour toute question technique :

1. Vérifiez la documentation [Astro](https://docs.astro.build)
2. Consultez les [issues GitHub](https://github.com/withastro/astro/issues)
3. Communauté [Discord Astro](https://astro.build/chat)

## 📄 Licence

Ce projet est un travail personnalisé pour Maëlle Langlais.
Tous droits réservés pour le contenu et les créations visuelles.

Le code source peut être utilisé comme référence avec attribution.

---

**Développé avec ❤️ pour un web plus durable**
# portfolio-maelle
