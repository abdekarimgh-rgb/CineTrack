#  CinéTrack

## Présentation du projet

**CinéTrack** est une application web qui permet aux utilisateurs de découvrir et consulter un catalogue de films et de séries. Les données sont récupérées depuis une API MockAPI et affichées dynamiquement à travers une interface simple et responsive.

L'application permet également de rechercher des titres, de filtrer les résultats, de naviguer entre les pages et de gérer une liste de favoris.

## Fonctionnalités principales

###  Catalogue

- Affichage des films et des séries sous forme de cards.
- Présentation de l'image, du titre, de l'année de sortie et du type.
- Affichage dynamique des données récupérées depuis l'API.

###  Recherche et filtrage

- Recherche d'un film ou d'une série par son titre.
- Filtrage par type : Tous, Films et Séries.
- Possibilité d'utiliser la recherche et le filtre simultanément.

###  Pagination

- Affichage de 8 éléments par page.
- Navigation entre les différentes pages.
- Retour automatique à la première page après une recherche ou un changement de filtre.

###  Modal

- Ouverture d'une fenêtre modale en cliquant sur une card.
- Affichage des informations détaillées :
  - Image et titre.
  - Type et année de sortie.
  - Durée du film ou nombre de saisons.
  - Genres.
  - Réalisateurs.
  - Pays de production.
  - Description.

###  Gestion des favoris

- Ajout et suppression des favoris avec un bouton cœur.
- Affichage des favoris dans une sidebar fixe.
- Suppression d'un favori avec un bouton X.
- Sauvegarde des favoris dans le `localStorage`.
- Conservation des favoris après actualisation de la page.

###  Gestion des erreurs

- Vérification de la réponse de l'API avec `response.ok`.
- Gestion des erreurs avec `try/catch`.
- Affichage d'un message en cas d'échec du chargement des données.

## Technologies utilisées

| Technologie     | Utilisation                             |
| --------------- | --------------------------------------- |
| HTML5           | Structure de l'application              |
| Tailwind CSS    | Mise en forme et responsive design      |
| JavaScript ES6+ | Logique et interactions                 |
| Fetch API       | Récupération des données                |
| Async / Await   | Gestion des opérations asynchrones      |
| Modules ES6     | Organisation du code avec import/export |
| LocalStorage    | Sauvegarde des favoris                  |
| MockAPI         | Fourniture des données                  |

## Concepts JavaScript utilisés

- `map()` : génération des cards à partir des données.
- `filter()` : recherche et filtrage des films et des séries.
- `find()` : récupération des informations d'un titre sélectionné.
- `reduce()` : comptage des favoris par type.
- `addEventListener()` : gestion des événements utilisateur.
- `stopPropagation()` : empêcher le clic sur le bouton favori d'ouvrir la modal.
- `JSON.stringify()` et `JSON.parse()` : conversion et stockage des favoris.
- Callbacks personnalisés : réutilisation des fonctions de rendu.

## Organisation du projet

```text
CineTrack/
│
├── index.html
│
├── css/
│   ├── input.css
│   └── output.css
│
├── js/
│   ├── main.js
│   ├── api.js
│   ├── render.js
│   ├── modal.js
│   ├── filters.js
│   ├── pagination.js
│   └── favorites.js
│
└── assets/
    └── images/
```

### Rôle des fichiers JavaScript

| Fichier         | Responsabilité                          |
| --------------- | --------------------------------------- |
| `api.js`        | Récupération des données depuis MockAPI |
| `render.js`     | Génération et affichage des cards       |
| `modal.js`      | Gestion de la fenêtre modale            |
| `filters.js`    | Recherche et filtrage                   |
| `pagination.js` | Gestion de la pagination                |
| `favorites.js`  | Gestion et sauvegarde des favoris       |

## Installation et lancement

1. Cloner le dépôt GitHub :

```bash
git clone URL_DU_DEPOT
```

2. Accéder au dossier du projet :

```bash
cd CineTrack
```

3. Vérifier que l'URL de l'API MockAPI est correctement configurée dans `js/api.js`.

4. Ouvrir le projet avec **Live Server** depuis VS Code.

## Utilisation

1. Consulter les films et les séries disponibles.
2. Rechercher un titre à l'aide de la barre de recherche.
3. Filtrer les résultats selon le type de contenu.
4. Naviguer entre les pages.
5. Cliquer sur une card pour consulter ses détails.
6. Ajouter ou retirer des titres de la liste des favoris.

## Objectif pédagogique

Ce projet a pour objectif de mettre en pratique les notions fondamentales de JavaScript, notamment la manipulation du DOM, les opérations asynchrones, les méthodes de tableaux, le stockage local et l'organisation du code avec les modules ES6.

Il permet également de comprendre le fonctionnement de l'Event Loop, des callbacks et de la propagation des événements.

---

**Projet :** CinéTrack
**Technologies :** HTML5, Tailwind CSS, JavaScript ES6+ et MockAPI
**Type :** Projet individuel
**Date limite de soumission :** 13/11/2026
