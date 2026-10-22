# Portfolio de Foula Fofana

Site personnel de Foula Fofana, développeur web et mobile à Conakry, cofondateur et CEO de SoliBox.

En ligne : https://foula-portfolio.vercel.app

## Stack

- **Next.js** (App Router) et **TypeScript**
- **Tailwind CSS** pour le style
- **Framer Motion** pour les animations
- Déploiement sur **Vercel**

## Choix techniques

**Page générée à l'avance (rendu statique).**
Le site était d'abord une application Vite rendue dans le navigateur : sans JavaScript, la page était vide, et les moteurs de recherche comme les aperçus de liens ne voyaient presque rien. Avec Next.js, la page est construite au moment du build. Tout le contenu est dans le HTML, et la page se charge plus vite.

**Chaque projet impose ses couleurs.**
La section projets change de palette selon le projet affiché (SoliBox, Sanni, Lab Oratoire). Les couleurs passent par des variables CSS (`--p-bg`, `--p-fg`…) posées sur la section. Un `IntersectionObserver` détecte le projet au milieu de l'écran, et une transition CSS fait le reste.

**Le thème clair ou sombre, sans état React.**
Un petit script dans le `<head>` pose le thème sur `<html>` avant l'affichage, ce qui évite un flash au chargement. L'icône du bouton est choisie en CSS selon cet attribut.

**Les animations respectent les préférences.**
Si l'appareil demande de réduire les mouvements, les animations sont désactivées et tout le contenu reste affiché normalement.

**Deux langues, sans dupliquer le code.**
Le français reste à la racine (`/`, `/projets/sanni`) pour que les liens déjà partagés continuent de marcher ; l'anglais vit sous `/en`. Chaque langue a sa propre mise en page racine (groupes de routes `app/(fr)` et `app/(en)`), pour que la balise `<html lang>` soit juste. Les textes sont dans `content/`, une page d'étude de cas est un seul composant qui reçoit la langue, et chaque page déclare sa version dans l'autre langue (`hreflang`) pour Google.

**Polices et images servies par le site.**
Les polices (Geist, Unbounded) sont embarquées dans le projet : aucune requête vers Google. Les images passent par `next/image`, qui les redimensionne et les convertit en formats modernes.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Structure

```
app/(fr)/     pages françaises : accueil et /projets/[slug]
app/(en)/en/  pages anglaises : /en et /en/projects/[slug]
components/   sections de l'accueil, composant d'étude de cas, navigation
content/      tous les textes : ui.ts, home.ts, cases/ (fr et en côte à côte) et blog/ (articles en Markdown)
lib/          langues, métadonnées, polices
public/       images et CV
```

Pour corriger un texte, il suffit de modifier le fichier de `content/` concerné, sans toucher aux composants.

## Publier un article

1. Créer un fichier Markdown dans `content/blog/`, par exemple `mon-article.md`. Son nom donne l'adresse : `/blog/mon-article`.
2. Commencer le fichier par cet en-tête :

```md
---
title: Le titre de l'article
description: Une phrase qui résume l'article, pour Google et les aperçus de lien.
date: 2026-10-22
---
```

3. Écrire l'article en Markdown en dessous (`## Intertitre`, `**gras**`, listes avec `-`).
   Pour insérer un visuel, une ligne seule :
   - `[[illustration:iceberg]]` (aussi `parcours`, `methode`), des illustrations dessinées en composants ;
   - `[[image:/images/sanni.jpg|Texte alternatif|Légende|wide]]`, avec `wide` (capture large) ou `phone` (écran de téléphone). Une nouvelle image doit être déclarée avec ses dimensions dans `components/blog/BlogImage.tsx`.
4. Pousser sur `main` : l'article apparaît sur `/blog`, avec son image de partage générée automatiquement.
