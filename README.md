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
app/          layout (métadonnées, polices, thème) et page d'accueil
components/   une section par fichier : Hero, Projects, Story, Skills, Contact
public/       images et CV
```
