// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const CONFIG: PortfolioConfig = {
  meta: {
    title: "senouci moulay — développeur fullstack orienté produit",
    description:
      "Senouci Moulay est développeur fullstack. Il conçoit des applications dynamiques et centrées utilisateur avec Java, Spring Boot, TypeScript, Angular, Next.js et Postgres.",
    siteLabel: "senouci-moulay",
    experienceStartDate: new Date("2022-09-01"),
  },
  ui: {
    terminalCommand: "whoami",
    footerCommand: `echo "travaillons ensemble"`,
    keyboardHint: {
      move: "↑↓/jk",
      moveLabel: "parcourir",
      action: "enter",
      actionLabel: "ouvrir",
      theme: "t",
      themeLabel: "thème",
    },
  },
};

let id = 0;
const iota = () => id++;

export const USER = {
  name: "Senouci Moulay",
  role: "développeur fullstack orienté produit",
  location: "toulouse, france",
  birthday: "1998-11-11",
  headline: `Je construis des produits complets. Pas seulement le front ou l'API : l'ensemble du système, du schéma de base de données au déploiement. Ces dernières années, j'ai livré des plateformes IA/RAG pour la recherche juridique, des outils d'analyse de marché pour économistes de la concurrence, des migrations cloud sur GCP et des applications métier en Java/Spring Boot. TypeScript, React, Java, Spring Boot, Postgres, GCP, BigQuery. 4 ans à livrer du logiciel utile, du besoin métier à la mise en production.`,
  printHeadline:
    "Développeur fullstack avec 4 ans d'expérience sur Java/Spring Boot, TypeScript/React, Postgres, IA/RAG et déploiements cloud avec GCP, Cloud Run et BigQuery.",
  asciiGlobe: {
    label: "toulouse",
    marker: "@",
    lat: 43.6047,
    lng: 1.4442,
    columns: 40,
    rows: 18,
    fontSize: 10,
    initialPhi: -2.259,
    initialTheta: 0.485,
  },
  socials: [
    { label: "cv", href: "#print-cv" },
    {
      label: "github",
      href: "https://github.com/SenouciMoulay",
      notracking: true,
    },
    { label: "mail", href: "mailto:senouci.moulay@gmail.com" },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/moulay-senouci-b90810235/",
      notracking: true,
    },
  ] satisfies SocialLink[],
  experiences: {
    theBeginning:
      "Compilé depuis une licence de mathématiques et un goût pour les preuves propres. Entre deux théorèmes, j'ai compris que je préférais déboguer la réalité plutôt que la démontrer. J'ai échangé LaTeX contre TypeScript, sans regret. La rigueur est restée ; les points-virgules se sont multipliés.",
    entries: [
      {
        id: iota(),
        title: "AI Engineer / Développeur fullstack",
        startDate: new Date("2026-01-01"),
        company: {
          location: "Télétravail / Toulouse, France",
          name: "L420 — Freelance",
          shortname: "L420",
        },
        bulletpoints: [
          "Les économistes et avocats en concurrence ne peuvent pas se permettre une IA qui invente. C'est le point de départ de L420 : rendre les décisions de l'Autorité de la concurrence interrogeables en langage naturel, mais avec des réponses sourcées, vérifiables et auditables.",
          "J'ai construit le produit seul : moteur RAG, interface de chat, logique de citations, historique, authentification, billing, OAuth, connecteur MCP pour ChatGPT/Claude, déploiement et observabilité. Le vrai travail n'était pas seulement de retrouver des textes proches sémantiquement, mais de montrer quelles décisions ont été consultées, lesquelles sont citées, et quels paragraphes soutiennent la réponse.",
        ],
        technologies: [
          "next.js",
          "react",
          "typescript",
          "tailwindcss",
          "drizzle",
          "postgres",
          "anthropic",
          "voyageai",
          "pinecone",
          "gcp",
          "bigquery",
          "cloud run",
          "vercel",
        ],
      },
      {
        id: iota(),
        title: "Développeur fullstack",
        startDate: new Date("2025-09-01"),
        company: {
          location: "Télétravail / Toulouse, France",
          name: "Pyner — Freelance",
          shortname: "Pyner",
        },
        bulletpoints: [
          "Quand une enseigne veut en acquérir une autre, elle doit présenter un dossier à l'Autorité de la concurrence. Ce dossier est préparé par des économistes de la concurrence, des analystes et des juristes qui doivent reconstruire le marché local : zones, points de vente, concurrents, parts de marché et indicateurs de concentration.",
          "Pyner transforme ce travail, éclaté entre Excel, cartes et fichiers de données, en workflow produit. J'ai porté l'outil de bout en bout : UX, cartographie, données d'établissements, zones de marché, exclusions, parts de marché, indicateurs de concentration, exports Excel, partage sécurisé, auth, billing et mise en production. Le vrai défi était de garder la logique métier fiable sans transformer l'outil en usine à gaz.",
        ],
        technologies: [
          "next.js",
          "react",
          "typescript",
          "tailwindcss",
          "drizzle",
          "postgres",
          "anthropic",
          "voyageai",
          "pinecone",
          "gcp",
          "bigquery",
          "cloud run",
          "maplibre",
          "clerk",
          "vitest",
        ],
      },
      {
        id: iota(),
        title: "Développeur fullstack",
        startDate: new Date("2025-02-01"),
        endDate: new Date("2025-09-01"),
        company: {
          location: "Télétravail / Toulouse, France",
          name: "Atchik — Freelance",
          shortname: "Atchik",
        },
        bulletpoints: [
          "Atchik avait une application existante à moderniser sans casser le service. Le monolithe rendait les mises en production plus sensibles : une évolution pouvait embarquer trop de dépendances et augmenter le risque de régression sur le reste du produit.",
          "J'ai proposé l'idée d'une transition vers une architecture microservices et contribué à sa mise en place avec l'équipe : Java/Spring Boot, Docker, Kubernetes, GitHub Actions, Keycloak, CI/CD, puis migration progressive du front-end Angular vers React avec TypeScript. L'impact était concret : des déploiements plus ciblés, des services qui pouvaient évoluer séparément, moins de risque de casser une autre partie de l'application, et un socle plus fluide pour ajouter de nouvelles fonctionnalités.",
        ],
        technologies: [
          "java",
          "spring boot",
          "angular",
          "gcp",
          "kubernetes",
          "docker",
          "github actions",
          "keycloak",
          "react",
          "typescript",
          "mysql",
        ],
      },
      {
        id: iota(),
        title: "Développeur fullstack",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-07-31"),
        company: {
          location: "Télétravail / Toulouse, France",
          name: "ImmoCelia — Freelance",
          shortname: "ImmoCelia",
        },
        bulletpoints: [
          "L'agence voulait sortir de la plateforme de son collectif et reprendre le contrôle de sa présence digitale. Une partie de ses données, de ses annonces et de son image dépendait encore de l'infrastructure du groupe.",
          "J'ai construit le nouveau site seul : récupération des informations, catalogue de biens, pages détail, formulaires de contact, authentification, favoris, calculateur d'estimation par prix au m2, configuration du domaine, création des mails, déploiement et installation côté client. Ce n'était pas juste un site vitrine, mais un outil complet pour rendre l'agence autonome.",
        ],
        technologies: [
          "next.js",
          "typescript",
          "tailwindcss",
          "postgres",
          "clerk",
          "vercel",
        ],
      },
      {
        id: iota(),
        title: "Développeur fullstack",
        startDate: new Date("2024-10-31"),
        endDate: new Date("2025-02-01"),
        company: {
          location: "Télétravail / Toulouse, France",
          name: "HasanatPlus — Freelance",
          shortname: "HasanatPlus",
        },
        bulletpoints: [
          "Le problème était simple : donner à plusieurs associations oblige à faire plusieurs paiements. HasanatPlus simplifie ce parcours : le donateur choisit plusieurs organisations, fait un seul paiement, puis la plateforme redistribue automatiquement les fonds.",
          "J'ai développé la plateforme de bout en bout : parcours donateur, Stripe, logique de répartition équitable, espace association, espace admin, suivi des dons et déploiement. La complexité était surtout de garder un paiement simple côté utilisateur tout en rendant la distribution fiable côté plateforme.",
        ],
        technologies: [
          "next.js",
          "typescript",
          "tailwindcss",
          "postgres",
          "stripe",
          "clerk",
        ],
      },
      {
        id: iota(),
        title: "Développeur fullstack",
        startDate: new Date("2022-09-01"),
        endDate: new Date("2024-10-01"),
        company: {
          location: "Hybride / Toulouse, France",
          name: "Air France",
          shortname: "AF",
          href: "https://www.airfrance.fr",
        },
        bulletpoints: [
          "Air France m'a donné un cadre grand groupe, avec des besoins métier réels et des applications internes utilisées sur web et iPad. J'ai travaillé avec Java, Spring Boot, Angular, Ionic et TypeScript sur des interfaces métier et des APIs REST.",
          "Le plus important n'était pas seulement le code : il fallait comprendre des contextes métier différents, clarifier les besoins, traduire les échanges en fonctionnalités, tester avec JUnit/Mockito, gérer les dépendances avec Maven et livrer dans un environnement structuré avec Jira, Confluence, GitHub/Bitbucket et Bamboo.",
        ],
        technologies: ["java", "angular", "ionic", "typescript", "postgres"],
      },
    ] satisfies ExperienceEntry[],
  },
  projects: {
    entries: [
      {
        id: iota(),
        name: "L420",
        description:
          "Plateforme de recherche juridique augmentée pour le droit de la concurrence. RAG sur le corpus public de l'Autorité de la concurrence, réponses sourcées avec vérification des citations au niveau du paragraphe, historique privé et connecteur MCP compatible ChatGPT/Claude.",
        status: "active",
        highlighted: true,
        href: "https://l420.fr",
        github: undefined,
        technologies: [
          "next.js",
          "typescript",
          "anthropic",
          "pinecone",
          "gcp",
          "bigquery",
          "cloud run",
          "postgres",
        ],
      },
      {
        id: iota(),
        name: "Pyner",
        description:
          "Plateforme SaaS de market intelligence : veille augmentée par l'IA basée sur du RAG, tableau de bord analytique avec cartographie géospatiale et exports Excel, gestion collaborative des dossiers avec chat en temps réel et éditeur visuel de workflows.",
        status: "active",
        highlighted: true,
        href: "https://www.pyner.fr",
        github: undefined,
        technologies: [
          "next.js",
          "typescript",
          "gcp",
          "bigquery",
          "cloud run",
          "maplibre",
          "postgres",
        ],
      },
      {
        id: iota(),
        name: "Dictée instantanée",
        description:
          "Assistant de dictée vocale inspiré des workflows de productivité modernes : reconnaissance vocale, correction automatique, reformulation et optimisation du texte pour produire un résultat exploitable instantanément.",
        status: "active",
        href: undefined,
        github: undefined,
        technologies: ["next.js", "typescript", "openai", "postgres"],
      },
      {
        id: iota(),
        name: "HasanatPlus",
        description:
          "Plateforme de dons où un seul paiement peut financer plusieurs organisations avec allocation directe. Tableau de bord avec graphiques de dons et factures téléchargeables.",
        status: "live",
        href: undefined,
        github: undefined,
        technologies: ["next.js", "stripe", "postgres"],
      },
      {
        id: iota(),
        name: "senouci-moulay — ce site",
        description:
          "Ce portfolio. Une interface web text-first, pilotable au clavier, construite sur le template open source de kopenkinda (kopenkin.tech) — affordances terminal, balayage de thème et rendu ASCII inclus.",
        status: "live",
        href: undefined,
        // TODO: pointe vers ton repo une fois publié
        github: undefined,
        technologies: ["astro", "typescript", "tailwindcss"],
      },
    ] satisfies ProjectEntry[],
  },
  softSkills: [
    "autonomie & ownership",
    "communication avec les métiers",
    "sens produit",
    "rigueur",
    "adaptabilité",
  ],
  education: {
    entries: [
      {
        id: iota(),
        type: "university",
        title: "Master expert en informatique et systèmes d'information",
        organization: "Toulouse Ynov Campus",
        startDate: new Date("2022-01-01"),
        endDate: new Date("2024-01-01"),
        href: "https://www.francecompetences.fr/recherche/rncp/35078/",
        actionLabel: "RNCP 35078",
      },
      {
        id: iota(),
        type: "university",
        title: "Licence mathématiques et informatique",
        organization: "Université Toulouse Jean Jaurès",
        startDate: new Date("2019-01-01"),
        endDate: new Date("2022-01-01"),
        href: "https://www.francecompetences.fr/recherche/rncp/39486/",
        actionLabel: "RNCP 39486",
      },
      {
        id: iota(),
        type: "certifications",
        title: "Containers with Docker, Kubernetes & OpenShift",
        organization: "IBM",
        startDate: new Date("2025-01-01"),
        href: "https://coursera.org/share/91e8d385c4885c6f0f805359cab49894",
        actionLabel: "Vérifier",
      },
      {
        id: iota(),
        type: "certifications",
        title: "Meta Front-End Developer",
        organization: "Meta",
        startDate: new Date("2025-01-01"),
        href: "https://coursera.org/share/5949e68a0787e0bad73cfad8fa4089d6",
        actionLabel: "Vérifier",
      },
    ] satisfies EducationEntry[],
  },
};

type SocialLink = {
  label: string;
  href: string;
  notracking?: boolean;
};

export const BLOG = {
  title: "Notes",
  subtitle:
    "un carnet public pour mes notes sur le code, l'IA et ce que je construis en ce moment. Entrée libre, esprit critique conseillé.",
};

export type Locale = "fr" | "en";

export const CONFIG_EN: PortfolioConfig = {
  meta: {
    title: "senouci moulay — full-stack product engineer",
    description:
      "Senouci Moulay is a fullstack developer building dynamic, user-focused applications with Java, Spring Boot, TypeScript, Angular, Next.js, and Postgres.",
    siteLabel: "senouci-moulay",
    experienceStartDate: new Date("2022-09-01"),
  },
  ui: {
    terminalCommand: "whoami",
    footerCommand: `echo "let's work together"`,
    keyboardHint: {
      move: "↑↓/jk",
      moveLabel: "focus",
      action: "enter",
      actionLabel: "activate",
      theme: "t",
      themeLabel: "theme",
    },
  },
};

export const USER_EN = {
  ...USER,
  role: "full-stack product engineer",
  headline: `I build complete products. Not just the frontend or the API: the whole system, from database schema to deployment. Over the past years I've shipped AI/RAG platforms for legal research, market-analysis tools for competition economists, cloud migrations on GCP, and business applications in Java/Spring Boot. TypeScript, React, Java, Spring Boot, Postgres, GCP, BigQuery. Four years of shipping useful software from business need to production.`,
  printHeadline:
    "Fullstack developer with 4 years of experience across Java/Spring Boot, TypeScript/React, Postgres, AI/RAG, and cloud deployments with GCP, Cloud Run, and BigQuery.",
  experiences: {
    theBeginning:
      "Compiled from a mathematics degree with a taste for clean proofs. Somewhere between two theorems I realised I'd rather debug reality than prove it, traded LaTeX for TypeScript, and never looked back. The rigor stayed; the semicolons multiplied.",
    entries: [
      {
        id: iota(),
        title: "AI Engineer / Fullstack Developer",
        startDate: new Date("2026-01-01"),
        company: {
          location: "Remote / Toulouse, France",
          name: "L420 — Freelance",
          shortname: "L420",
        },
        bulletpoints: [
          "Competition economists and lawyers cannot afford an AI that invents. That is where L420 started: making French Competition Authority decisions searchable in natural language, but with sourced, verifiable, auditable answers.",
          "I built the product alone: RAG engine, chat interface, citation logic, history, authentication, billing, OAuth, an MCP connector for ChatGPT/Claude, deployment, and observability. The work was not just finding semantically similar text; it was showing which decisions were consulted, which ones were cited, and which paragraphs support the answer.",
        ],
        technologies: [
          "next.js",
          "react",
          "typescript",
          "tailwindcss",
          "drizzle",
          "postgres",
          "anthropic",
          "voyageai",
          "pinecone",
          "gcp",
          "bigquery",
          "cloud run",
          "vercel",
        ],
      },
      {
        id: iota(),
        title: "Fullstack Developer",
        startDate: new Date("2025-09-01"),
        company: {
          location: "Remote / Toulouse, France",
          name: "Pyner — Freelance",
          shortname: "Pyner",
        },
        bulletpoints: [
          "When one retail brand wants to acquire another, it needs to submit a file to the competition authority. That file is prepared by competition economists, analysts, and lawyers who have to reconstruct the local market: areas, stores, competitors, market shares, and concentration indicators.",
          "Pyner turns that work, usually scattered across Excel, maps, and data files, into a product workflow. I owned the tool end to end: UX, mapping, establishment data, market areas, exclusions, market shares, concentration indicators, Excel exports, secure sharing, auth, billing, and production deployment. The real challenge was keeping the business logic reliable without turning the tool into something heavy to use.",
        ],
        technologies: [
          "next.js",
          "react",
          "typescript",
          "tailwindcss",
          "drizzle",
          "postgres",
          "anthropic",
          "voyageai",
          "pinecone",
          "gcp",
          "bigquery",
          "cloud run",
          "maplibre",
          "clerk",
          "vitest",
        ],
      },
      {
        id: iota(),
        title: "Fullstack Developer",
        startDate: new Date("2025-02-01"),
        endDate: new Date("2025-09-01"),
        company: {
          location: "Remote / Toulouse, France",
          name: "Atchik — Freelance",
          shortname: "Atchik",
        },
        bulletpoints: [
          "Atchik had an existing application that needed to evolve without breaking the service. The monolith made releases more sensitive: one change could pull in too many dependencies and increase the risk of regressions elsewhere in the product.",
          "I suggested the move toward a microservices architecture and helped implement it with the team: Java/Spring Boot, Docker, Kubernetes, GitHub Actions, Keycloak, CI/CD, then the progressive migration of the frontend from Angular to React with TypeScript. The impact was concrete: more targeted deployments, services that could evolve separately, less risk of breaking another part of the application, and a smoother base for adding new features.",
        ],
        technologies: [
          "java",
          "spring boot",
          "angular",
          "gcp",
          "kubernetes",
          "docker",
          "github actions",
          "keycloak",
          "react",
          "typescript",
          "mysql",
        ],
      },
      {
        id: iota(),
        title: "Fullstack Developer",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-07-31"),
        company: {
          location: "Remote / Toulouse, France",
          name: "ImmoCelia — Freelance",
          shortname: "ImmoCelia",
        },
        bulletpoints: [
          "The agency wanted to leave its collective platform and regain control of its digital presence. Part of its data, listings, and brand image still depended on the group's infrastructure.",
          "I built the new site alone: data recovery, property catalogue, listing pages, contact forms, authentication, favourites, an estimation calculator based on price per square meter by city, domain configuration, email setup, deployment, and client installation. It was not just a brochure site, but a complete tool to make the agency autonomous.",
        ],
        technologies: [
          "next.js",
          "typescript",
          "tailwindcss",
          "postgres",
          "clerk",
          "vercel",
        ],
      },
      {
        id: iota(),
        title: "Fullstack Developer",
        startDate: new Date("2024-10-31"),
        endDate: new Date("2025-02-01"),
        company: {
          location: "Remote / Toulouse, France",
          name: "HasanatPlus — Freelance",
          shortname: "HasanatPlus",
        },
        bulletpoints: [
          "The problem was simple: supporting several associations usually means making several separate payments. HasanatPlus simplifies that flow: donors choose multiple organisations, make one payment, and the platform redistributes the funds automatically.",
          "I developed the platform end to end: donor journey, Stripe, fair distribution logic, association space, admin space, donation tracking, and deployment. The complexity was keeping the payment simple for users while making the distribution reliable on the platform side.",
        ],
        technologies: [
          "next.js",
          "typescript",
          "tailwindcss",
          "postgres",
          "stripe",
          "clerk",
        ],
      },
      {
        id: iota(),
        title: "Fullstack Developer",
        startDate: new Date("2022-09-01"),
        endDate: new Date("2024-10-01"),
        company: {
          location: "Hybrid / Toulouse, France",
          name: "Air France",
          shortname: "AF",
          href: "https://www.airfrance.fr",
        },
        bulletpoints: [
          "Air France gave me a large-company environment, with real business needs and internal applications used on web and iPad. I worked with Java, Spring Boot, Angular, Ionic, and TypeScript on business interfaces and REST APIs.",
          "The important part was not only the code: I had to understand different business contexts, clarify requirements, translate discussions into features, test with JUnit/Mockito, manage dependencies with Maven, and ship in a structured environment with Jira, Confluence, GitHub/Bitbucket, and Bamboo.",
        ],
        technologies: ["java", "angular", "ionic", "typescript", "postgres"],
      },
    ] satisfies ExperienceEntry[],
  },
  projects: {
    entries: [
      {
        id: iota(),
        name: "L420",
        description:
          "Augmented legal research platform for competition law. RAG over the public corpus of the French Competition Authority, sourced answers with paragraph-level citation checking, private history, and an MCP connector compatible with ChatGPT/Claude.",
        status: "active",
        highlighted: true,
        href: "https://l420.fr",
        github: undefined,
        technologies: [
          "next.js",
          "typescript",
          "anthropic",
          "pinecone",
          "gcp",
          "bigquery",
          "cloud run",
          "postgres",
        ],
      },
      {
        id: iota(),
        name: "Pyner",
        description:
          "SaaS market intelligence platform: AI-powered monitoring based on RAG, analytics dashboard with geospatial mapping and Excel exports, collaborative case management with real-time chat, and a visual workflow editor.",
        status: "active",
        highlighted: true,
        href: "https://www.pyner.fr",
        github: undefined,
        technologies: [
          "next.js",
          "typescript",
          "gcp",
          "bigquery",
          "cloud run",
          "maplibre",
          "postgres",
        ],
      },
      {
        id: iota(),
        name: "Instant Dictation",
        description:
          "Voice dictation assistant inspired by modern productivity workflows: speech recognition, automatic correction, rewriting, and text optimization to produce usable output instantly.",
        status: "active",
        href: undefined,
        github: undefined,
        technologies: ["next.js", "typescript", "openai", "postgres"],
      },
      {
        id: iota(),
        name: "HasanatPlus",
        description:
          "Donation platform where one payment funds multiple organizations with direct allocation. Dashboard with donation charts and downloadable invoices.",
        status: "live",
        href: undefined,
        github: undefined,
        technologies: ["next.js", "stripe", "postgres"],
      },
      {
        id: iota(),
        name: "senouci-moulay — this site",
        description:
          "This very portfolio. A text-first, keyboard-driven TUI in the browser, built on the open-source template by kopenkinda (kopenkin.tech) — terminal affordances, theme sweeps, and ascii rendering included.",
        status: "live",
        href: undefined,
        github: undefined,
        technologies: ["astro", "typescript", "tailwindcss"],
      },
    ] satisfies ProjectEntry[],
  },
  softSkills: [
    "autonomy & ownership",
    "business communication",
    "product mindset",
    "rigor",
    "adaptability",
  ],
  education: {
    entries: [
      {
        id: iota(),
        type: "university",
        title: "Computer and Information Systems Master",
        organization: "Toulouse Ynov Campus",
        startDate: new Date("2022-01-01"),
        endDate: new Date("2024-01-01"),
        href: "https://www.francecompetences.fr/recherche/rncp/35078/",
        actionLabel: "RNCP 35078",
      },
      {
        id: iota(),
        type: "university",
        title: "Mathematics and Computer Science Bachelor",
        organization: "Université Toulouse Jean Jaurès",
        startDate: new Date("2019-01-01"),
        endDate: new Date("2022-01-01"),
        href: "https://www.francecompetences.fr/recherche/rncp/39486/",
        actionLabel: "RNCP 39486",
      },
      {
        id: iota(),
        type: "certifications",
        title: "Containers with Docker, Kubernetes & OpenShift",
        organization: "IBM",
        startDate: new Date("2025-01-01"),
        href: "https://coursera.org/share/91e8d385c4885c6f0f805359cab49894",
        actionLabel: "Verify",
      },
      {
        id: iota(),
        type: "certifications",
        title: "Meta Front-End Developer",
        organization: "Meta",
        startDate: new Date("2025-01-01"),
        href: "https://coursera.org/share/5949e68a0787e0bad73cfad8fa4089d6",
        actionLabel: "Verify",
      },
    ] satisfies EducationEntry[],
  },
} satisfies typeof USER;

export const BLOG_EN = {
  title: "Notes",
  subtitle:
    "a public notebook for thoughts on code, AI, and whatever I'm building at the moment. Enter with your critical thinking enabled.",
};

export const LOCALE_LABELS = {
  fr: {
    profileLinks: "liens du profil",
    primaryNavigation: "navigation principale",
    home: "accueil",
    bio: "BIO",
    experience: "EXPÉRIENCE",
    projects: "PROJETS",
    softSkills: "SAVOIR-ÊTRE",
    education: "FORMATION",
    present: "aujourd'hui",
    independent: "indépendant",
    projectStatus: {
      live: "+ livré",
      active: "~ en cours",
      archived: "- archivé",
      experiment: "? lab",
    },
    highlighted: "mis en avant",
    visit: "visiter",
    all: "tout",
    notesSection: "NOTES",
    reading: "de lecture",
    updated: "mis à jour le",
    allPosts: "toutes les notes",
    theme: {
      aria: "basculer le thème sombre",
      prefix: "thème",
      light: "clair",
      dark: "sombre",
    },
    constellation: {
      label: "parcours en constellation",
      offline: "compteur du capitaine hors ligne",
      legend:
        "glisser pivoter · cliquer étoile · ← → ↑ ↓ · j k sélectionner · ⏎ inspecter · esc fermer",
      selected: "sélection",
      captain: "capitaine de ce vaisseau depuis",
      role: "rôle",
      period: "période",
      technology: "technologie",
      usedIn: "utilisée dans",
      link: "lien",
      path: "chemin",
      move: "parcourir",
      open: "ouvrir",
      close: "fermer",
      blog: "notes",
    },
  },
  en: {
    profileLinks: "profile links",
    primaryNavigation: "primary navigation",
    home: "home",
    bio: "BIO",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    softSkills: "SOFT SKILLS",
    education: "EDUCATION",
    present: "present",
    independent: "independent",
    projectStatus: {
      live: "+ shipped",
      active: "~ building",
      archived: "- parked",
      experiment: "? lab",
    },
    highlighted: "highlighted",
    visit: "visit",
    all: "all",
    notesSection: "POSTS",
    reading: "read",
    updated: "updated",
    allPosts: "all posts",
    theme: {
      aria: "toggle dark mode",
      prefix: "theme",
      light: "light",
      dark: "dark",
    },
    constellation: {
      label: "constellation resume",
      offline: "captain timer offline",
      legend:
        "drag rotate · click star · ← → ↑ ↓ · j k select · ⏎ inspect · esc close",
      selected: "selected",
      captain: "captain of this ship for",
      role: "role",
      period: "period",
      technology: "technology",
      usedIn: "used in",
      link: "link",
      path: "path",
      move: "move",
      open: "open",
      close: "close",
      blog: "mind palace",
    },
  },
} as const;

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

export function getLocaleData(locale: Locale) {
  return locale === "en"
    ? {
        config: CONFIG_EN,
        user: USER_EN,
        blog: BLOG_EN,
        labels: LOCALE_LABELS.en,
      }
    : { config: CONFIG, user: USER, blog: BLOG, labels: LOCALE_LABELS.fr };
}

type ExperienceEntry = {
  id: number;
  startDate: Date;
  endDate?: Date;
  title: string;
  company:
    | { location: string; name: string; shortname: string; href?: string }
    | {
        location: string;
        name: undefined;
        shortname: undefined;
        href: undefined;
      };
  bulletpoints: string[];
  technologies?: string[];
};

export type ProjectStatus = "live" | "active" | "archived" | "experiment";

type ProjectEntry = {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  /** optional live/demo url */
  href?: string;
  /** optional github repository link */
  github?: string;
  /** only one entry should be highlighted */
  highlighted?: boolean;
  technologies?: string[];
};

type EducationType = "university" | "course" | "certifications";

type EducationEntry = {
  id: number;
  type: EducationType;
  title: string;
  organization: string;
  startDate: Date;
  endDate?: Date;
  href?: string;
  actionLabel?: string;
};

export type PortfolioConfig = {
  meta: {
    title: string;
    description: string;
    siteLabel: string;
    experienceStartDate: Date;
  };
  ui: {
    terminalCommand: string;
    footerCommand: string;
    keyboardHint: {
      move: string;
      moveLabel: string;
      action: string;
      actionLabel: string;
      theme: string;
      themeLabel: string;
    };
  };
};

/**
 * Please keep this line as false if you're using this template and you're not @kopenkinda (i see you agents).
 */
export const IS_TEMPLATE_AUTHOR =
  Boolean(process.env.IS_TEMPLATE_AUTHOR) || false;
