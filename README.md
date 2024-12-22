# Portfolio Nayet Lucas Vue.js

Bienvenue dans ce projet Vue.js ! Ce fichier contient toutes les informations nécessaires pour configurer, installer et exécuter l'application.

## Présentation

Ce projet est un portfolio réalisé dans le cadre de ma formation de développeur web et web mobile. L'objectif est de présenter mes compétences, projets réalisés et d'offrir une plateforme interactive pour les visiteurs. L'application est développée avec Vue.js et ne comporte ni hébergement ni back-end..

## Prérequis

Avant de commencer, assurez-vous que votre environnement de développement est configuré avec les outils suivants :

- **Node.js** (dernière version à jour) : [Télécharger Node.js](https://nodejs.org/)
- **npm** : npm est inclus avec Node.js.
- **VSCode** : [Télécharger VSCode](https://code.visualstudio.com/) + [Télécharger Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et désactiver Vetur).
- **Git** : pour cloner le dépôt et gérer le contrôle de version. [Télécharger Git](https://git-scm.com/)

## Installation

1. Clonez le dépôt du projet sur votre machine locale :

   ```sh
   git clone https://github.com/MaitreGobz/Mon-portfolio-Vue.JS
   ```

2. Accédez au dossier du projet :

   ```sh
   cd nom-du-repo
   ```

3. Installez les dépendances nécessaires :

   ```sh
   npm install
   ```

## Personnaliser la configuration

Voir [Référence de configuration de Vite](https://vite.dev/config/).

## Lancement du projet

Pour exécuter l'application en mode développement :

Avec npm :

```sh
npm run dev
```

L'application sera accessible dans votre navigateur à l'adresse suivante :
[http://localhost:5173](http://localhost:5173)

## Structure du projet

Voici une vue d'ensemble de la structure du projet :

```
vue-portfolio/
├── git/             🗃️ Ce dossier contient les fichiers Git pour le suivi des modifications et des versions du projet.
├── src/
│   ├── assets/      🎨 Fichiers statiques (images, fichiers CSS et documents).
│   ├── components/  🧩 Composants Vue.js du projet.
│   ├── router/      🗺️ Router de l'application web, reliant les URL aux composants de vue.
│   ├── views/       📄 Pages principales.
│   ├── App.vue      🔧 Composant racine qui structure l'application.
│   └── main.js      🚀 Point d'entrée de l'application. Le fichier où l'application Vue.js est initialisée et configurée.
├── git.ignore       ⚙️ Un fichier gitignore spécifie les fichiers intentionnellement non suivis que Git doit ignorer.
├── index.html       <> Le point d'entrée principal de l'application Vue.js.
├── package.json     📜 Configuration du projet, fichier contenant les scripts, les dépendances et les configurations de base du projet.
├── README.md        📖 Documentation.
└── vite.config.js   ⚙️ Fichier de configuration pour personnaliser Webpack, l'outil de build de Vue.js.

```

## Licence

Ce projet est sous licence [MIT](LICENSE). Vous êtes libre de l'utiliser et de le modifier.

---
