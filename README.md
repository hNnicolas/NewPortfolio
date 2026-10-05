# Portfolio — Nicolas Huang

Portfolio personnel d'un développeur **Full Stack & IA**, également orienté **expériences web 3D** (Three.js / WebGL). Site one-page, léger et accessible, construit avec **React 19, TypeScript, Vite et Tailwind CSS**.

👉 **Site en ligne : https://nicolashuangfolio.netlify.app/**

---

## Sommaire

- [Contenu du site](#contenu-du-site)
- [Projets présentés](#projets-présentés)
- [Stack technique](#stack-technique)
- [Qualité : accessibilité, SEO, performance](#qualité--accessibilité-seo-performance)
- [Démarrer en local](#démarrer-en-local)
- [Structure du projet](#structure-du-projet)
- [Ajouter un projet](#ajouter-un-projet)
- [Contact](#contact)

---

## Contenu du site

| Section | Contenu |
| --- | --- |
| **About** | Présentation et CV téléchargeable (PDF) |
| **Skills** | Compétences Frontend, Backend, IA / LLM, outils |
| **Languages** | Langues parlées |
| **Experience** | Parcours professionnel et formation |
| **Projects** | Applications web et mobiles (carrousel) |
| **Animations 3D** | Expériences temps réel Three.js / WebGL / GLSL (carrousel) |
| **Contact** | Formulaire (ouvre le client mail), téléphone, réseaux |

Les projets de chaque carrousel sont **classés du plus récent au plus ancien**.

---

## Projets présentés

### Applications

| Projet | Description | Lien |
| --- | --- | --- |
| **WeShareKids — GardePartagée** | App de coparentalité : calendrier de garde temps réel, messagerie, partage de frais, coffre-fort chiffré. React Native (Expo), Express, Prisma, Socket.io, PostgreSQL | [Démo](https://weshare-mobile.vercel.app/) |
| **HappyKids** | Scan de la liste de fournitures scolaires (PDF / photo) et comparateur de prix multi-enseignes | [Démo](https://happykids-frontend.vercel.app/) |
| **NewsFoundry** | Génération automatique de revues de presse par thème, backend IA | [Démo](https://p14-news-foundry-frontend.vercel.app/) |
| **Recettes du Quotidien** | Recherche de recettes avec algorithme et filtres sur mesure | [Démo](https://p5-lespetits-plats.netlify.app/) |
| **Ohmyfood** | Site responsive de restaurants gastronomiques, animations 100 % CSS | [Démo](https://p5-ohmyfood.netlify.app/) |
| **Print It** | Carrousel d'images dynamique en JavaScript | [Démo](https://p3print-it.netlify.app/) |
| **Booki** | Intégration pixel-perfect d'une maquette, HTML / CSS responsive | [Démo](https://p2-booki.netlify.app/) |
| **Explore Norway** | Site vitrine autour de la Norvège | [Démo](https://norway-trip.netlify.app/) |

### Animations 3D

| Projet | Description | Lien |
| --- | --- | --- |
| **Trick or Sheet** 🆕 | Nuit d'Halloween en 3D : explorer la ville hantée de Hollowbrook en fantôme-drap, récolter des bonbons, trouver les clés dorées et vaincre Dracula. Three.js, post-processing (N8AO), PWA | [Jouer](https://trick-or-sheet.vercel.app/) |
| **Studio Ghibli** | Expérience animée inspirée des films d'animation, transitions cinématiques | [Voir](https://studiosghibli.netlify.app/) |
| **Japan Scenary** | Galerie 3D de photos de voyage au Japon, Three.js + GSAP, mode jour / nuit | [Voir](https://japan-scenary.netlify.app/) |
| **Haunted House Ghost** | Maison hantée modélisée sous Blender, lumières et ombres dynamiques | [Voir](https://haunted-house-ghost.vercel.app/) |
| **Beautiful Fireworks** | Feu d'artifice interactif au coucher du soleil, shaders GLSL et bruit de Perlin | [Voir](https://fireworks-sunset.vercel.app/) |
| **Raging Sea** | Océan 3D paramétrable en temps réel (vagues, couleurs, profondeur) | [Voir](https://raging-sea-project.vercel.app/) |
| **Fish Ocean** | Monde sous-marin animé en React Three Fiber | [Voir](https://fish-ocean.vercel.app/) |

---

## Stack technique

- **React 19** + **TypeScript**
- **Vite** (build, découpage des chunks `react` / `icons` pour un cache long terme)
- **Tailwind CSS 3** + PostCSS / Autoprefixer
- **React Icons** / **Lucide**
- **ESLint** (typescript-eslint, react-hooks)
- Déploiement : **Netlify**

---

## Qualité : accessibilité, SEO, performance

**Accessibilité (WCAG AA)**
- HTML sémantique (`header`, `nav`, `main`, `section`, `footer`) et hiérarchie de titres cohérente
- Lien d'évitement « Skip to main content », focus visible sur tous les éléments interactifs
- Carrousels pilotables au clavier (flèches, `Home`, `End`) avec labels ARIA
- Liens externes annoncés aux lecteurs d'écran (« opens in a new tab »)
- Respect de `prefers-reduced-motion`
- Contrastes vérifiés, audit WAVE sans erreur

**SEO**
- Meta title / description, URL canonique
- Open Graph et Twitter Cards
- Données structurées JSON-LD
- `sitemap.xml` et `robots.txt`

**Performance & sobriété**
- Toutes les images en **WebP** (≈ 20–80 Ko par aperçu), chargées en `lazy`
- Image du hero préchargée (`fetchpriority="high"`)
- Aucune dépendance lourde : pas de framework d'animation ni de librairie 3D embarquée — les démos 3D sont hébergées séparément

---

## Démarrer en local

Prérequis : Node.js 20+

```bash
git clone https://github.com/hNnicolas/NewPortfolio.git
cd NewPortfolio
npm install
npm run dev       # serveur de développement
npm run build     # vérification TypeScript + build de production dans dist/
npm run preview   # prévisualiser le build
npm run lint      # ESLint
```

---

## Structure du projet

```text
public/
├── images/            # Aperçus des projets (WebP)
├── CV_Nicolas.pdf
├── sitemap.xml
└── robots.txt
src/
├── components/
│   ├── CardCarousel.tsx   # Carrousel accessible partagé
│   ├── Projets.tsx        # Données + section « Projects »
│   ├── Animations3D.tsx   # Données + section « Animations 3D »
│   └── ...                # Hero, About, Skills, Experience, Contact…
├── data/site.ts       # Navigation, réseaux sociaux, coordonnées
├── hooks/             # useActiveSection (lien actif de la nav)
└── App.tsx
```

---

## Ajouter un projet

1. Ajouter l'aperçu en WebP dans `public/images/` (idéalement l'image Open Graph du projet, ~1200 px de large) :
   ```bash
   cwebp -q 80 og-image.jpg -o public/images/mon-projet.webp
   ```
2. Ajouter une entrée **en tête** du tableau dans `src/components/Projets.tsx` ou `src/components/Animations3D.tsx` (les projets sont classés du plus récent au plus ancien) :
   ```ts
   {
     id: 1,
     title: "Mon projet",
     description: "…",
     image: "/images/mon-projet.webp",
     link: "https://mon-projet.vercel.app/",
   },
   ```

---

## Contact

- Site : https://nicolashuangfolio.netlify.app/
- LinkedIn : https://www.linkedin.com/in/huang-nicolas/
- GitHub : https://github.com/hNnicolas
