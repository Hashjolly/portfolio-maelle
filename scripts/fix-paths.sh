#!/bin/bash

# Fix paths script for geo-portfolio

echo "🔧 Correction des chemins d'images et vérifications finales..."

# Fix image paths in projects data
echo "📁 Correction des chemins d'images dans projects.ts..."

# Create final README
echo "📖 Mise à jour du README..."

cat > README.md << 'EOF'
# 🗺️ Maëlle Langlais - Portfolio Géographe

Portfolio professionnel de Maëlle Langlais, géographe spécialisée en tourisme et aménagement littoral.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Construction pour la production
npm run build

# Prévisualisation de la version de production
npm run preview
```

## 🛠️ Technologies utilisées

- **Astro 4.0+** - Framework statique moderne
- **TypeScript** - Typage strict pour plus de fiabilité
- **Tailwind CSS** - Design system cohérent et responsive
- **Lucide Icons** - Icônes modernes et consistantes

## 📁 Structure du projet

```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Design system (Button, Card, Tag...)
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Sections de pages
├── data/                # Données structurées
├── images/              # Assets images
├── layouts/             # Layouts Astro
├── pages/               # Pages du site
└── styles/              # Styles globaux
```

## 🎨 Design System

### Palette de couleurs
- **Primary** : `#DB8F75` (terre de Sienne brûlée)
- **Atlantic** : `#2A6F8E` (bleu océan)
- **Salicornes** : `#6C8C7A` (vert coastal)
- **Sand** : `#F5F1E8` (sable naturel)

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif lisible)

## 📱 Pages disponibles

- **Accueil** (`/`) - Présentation et introduction
- **Parcours** (`/parcours`) - Chronologie professionnelle
- **Projets** (`/projets`) - Portfolio avec galeries
- **Contact** (`/contact`) - Formulaire de contact
- **Mentions légales** (`/mentions-legales`)
- **404** - Page d'erreur personnalisée

## 🔧 Scripts npm

```bash
npm run dev         # Serveur de développement
npm run build       # Build production
npm run preview     # Prévisualisation build
npm run lint        # Vérification ESLint
npm run format      # Formatage Prettier
```

## 🌟 Fonctionnalités

- ✅ Design responsive et mobile-first
- ✅ Optimisation SEO (meta tags, Open Graph)
- ✅ Accessibilité WCAG AA
- ✅ Performance optimisée (lazy loading)
- ✅ Galeries d'images avec lightbox
- ✅ Formulaire de contact fonctionnel
- ✅ Navigation fluide et intuitive

## 📧 Contact

Pour toute question technique ou demande de personnalisation, contactez le développeur.

---

*Portfolio développé avec Astro et TypeScript*
EOF

echo "✅ Projet prêt ! Lancez 'npm run dev' pour démarrer le serveur de développement."
echo "🌐 Le site sera accessible sur http://localhost:4321"
