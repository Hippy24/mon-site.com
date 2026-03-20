const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");
const langButtons = document.querySelectorAll(".lang-btn");
const toggleButtons = document.querySelectorAll(".toggle-courses-btn");
const experienceToggleButtons = document.querySelectorAll(".toggle-experience-btn");
const sections = document.querySelectorAll("section[id]");
const reveals = document.querySelectorAll(".reveal");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    overlay.classList.add("show");
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
  });
});

function activateMenuOnScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const currentLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      currentLinks.forEach(link => link.classList.add("active"));
    }
  });
}

window.addEventListener("scroll", activateMenuOnScroll);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const translations = {
  fr: {
    "nav-about": "À propos",
    "nav-education": "Parcours académique",
    "nav-experience": "Expériences professionnelles",
    "nav-skills": "Compétences",
    "nav-projects": "Projets",
    "nav-contact": "Contact",

    "nav-about-mobile": "À propos",
    "nav-education-mobile": "Parcours académique",
    "nav-experience-mobile": "Expériences professionnelles",
    "nav-skills-mobile": "Compétences",
    "nav-projects-mobile": "Projets",
    "nav-contact-mobile": "Contact",

    "cv-btn-text-mobile": '<i class="fas fa-download"></i> Télécharger mon CV',
    "hero-cv-btn": '<i class="fas fa-download"></i> Télécharger mon CV',
    "hero-badge": "Étudiant en Master Data Science en Santé",
    "hero-tagline": "Entre expertise clinique et intelligence des données",
    "hero-description": "J’exploite les données de santé pour produire des analyses robustes, des modèles utiles et des visualisations claires au service de la recherche, de la décision et de l’innovation biomédicale.",
    "hero-projects-btn": '<i class="fas fa-folder-open"></i> Voir mes projets',

    "hero-stat-title-1": "Data Science",
    "hero-stat-text-1": "Python • R • SQL",
    "hero-stat-title-2": "Santé",
    "hero-stat-text-2": "Imagerie • Biomédical • Épidémiologie",
    "hero-stat-title-3": "Valorisation",
    "hero-stat-text-3": "Dashboards • ML • Data management",

    "hero-card-chip": "Health Data Dashboard",
    "hero-card-title": "Analyse biomédicale & visualisation",
    "hero-card-text": "Croisement entre données cliniques, modélisation statistique et exploration interactive.",
    "hero-tag-card-1": "Machine Learning",
    "hero-tag-card-2": "Biostatistiques",
    "hero-tag-card-3": "Dashboarding",

    "about-heading": "À propos de moi",
    "about-p1": "🏥 Je suis actuellement étudiant en <strong>Master 1 Data Science en Santé</strong> à l’Université de Lille. Mon profil se situe à l’intersection de la santé, de l’analyse de données et des outils numériques, avec une volonté forte de mettre la science des données au service de problématiques concrètes dans le domaine biomédical.",
    "about-p2": "🔬 Mon parcours s’appuie sur une première formation en <strong>imagerie médicale et radiobiologie</strong>, qui m’a permis d’acquérir une connaissance du milieu hospitalier, des pratiques cliniques et de la réalité du terrain en santé. Cette base scientifique et professionnelle m’a naturellement conduit vers une spécialisation en <strong>data science appliquée à la santé</strong>, afin de développer des compétences plus avancées en modélisation, en visualisation de données, en apprentissage automatique et en exploitation de bases de données complexes.",
    "about-p3": "📊 Je m’intéresse particulièrement à l’analyse de données biomédicales, à la bioinformatique, au machine learning, à la création de dashboards interactifs et à la valorisation de données utiles à la recherche ou à l’aide à la décision. J’apprécie les projets qui combinent rigueur méthodologique, impact concret et dimension interdisciplinaire.",
    "about-p4": "💡 Aujourd’hui, je souhaite continuer à développer ce profil en contribuant à des projets ambitieux dans lesquels je peux mobiliser à la fois mes connaissances du secteur de la santé et mes compétences techniques en data science. Mon objectif est de participer à la production d’outils d’analyse fiables, de modèles pertinents et de visualisations claires permettant de mieux comprendre les données et d’en tirer une réelle valeur.",

    "education-heading": "Mon parcours académique",
    "edu-title-1": "Master 1 Data Science en Santé (en cours)",
    "edu-title-2": "Licence Professionnelle en Génie d’Imagerie Médicale et de Radiobiologie",
    "edu-intro-1": "Cette formation me permet d’articuler des compétences avancées en statistiques, informatique, sciences biomédicales et santé publique, dans une logique d’analyse, de modélisation et d’innovation appliquée aux données de santé.",
    "edu-intro-2": "Cette formation pluridisciplinaire m’a apporté une base scientifique solide en anatomie, imagerie, radiologie, biologie, physique et pratique clinique, tout en me préparant aux exigences techniques et humaines du milieu hospitalier.",

    "master-cat-1-title": "Fondements quantitatifs et théoriques",
    "master-cat-2-title": "Informatique, données et outils",
    "master-cat-3-title": "Sciences du vivant et biomédecine",
    "master-cat-4-title": "Santé publique, recherche et professionnalisation",

    "m-course-1": "Algorithmique",
    "m-course-2": "Algèbre et analyse",
    "m-course-3": "Mesure et probabilités statistiques",
    "m-course-4": "Statistique paramétrique",
    "m-course-5": "Statistique inférentielle",
    "m-course-6": "Modélisation statistique",
    "m-course-7": "Optimisation",
    "m-course-8": "Fouille de motifs",
    "m-course-9": "Systèmes d’exploitation",
    "m-course-10": "Data management",
    "m-course-11": "Health Data Science Toolbox",
    "m-course-12": "Web scraping et web crawling",
    "m-course-13": "Modélisation informatique",
    "m-course-14": "Informatique biomédicale",
    "m-course-15": "Biologie moléculaire et biologie systémique",
    "m-course-16": "Biochimie",
    "m-course-17": "Biologie cellulaire",
    "m-course-18": "Physiologie et physiopathologie",
    "m-course-19": "Pharmacologie",
    "m-course-20": "Pharmacogénétique / Pharmacogénomique",
    "m-course-21": "Génomique",
    "m-course-22": "Transcriptomique",
    "m-course-23": "Protéomique",
    "m-course-24": "Métabolomique",
    "m-course-25": "Capteurs biomédicaux",
    "m-course-26": "Communication",
    "m-course-27": "Anglais professionnel",
    "m-course-28": "Formation à la recherche",
    "m-course-29": "Santé publique",
    "m-course-30": "Épidémiologie",
    "m-course-31": "Gestion de projets",

    "lic-cat-1-title": "Sciences fondamentales",
    "lic-cat-2-title": "Anatomie, physiologie et disciplines biomédicales",
    "lic-cat-3-title": "Imagerie, radiologie et techniques professionnelles",
    "lic-cat-4-title": "Statistiques, informatique et communication",
    "lic-cat-5-title": "Santé, éthique et environnement professionnel",

    "l-course-1": "Mathématiques",
    "l-course-2": "Physique",
    "l-course-3": "Chimie générale",
    "l-course-4": "Chimie organique",
    "l-course-5": "Biochimie structurale",
    "l-course-6": "Biologie cellulaire",
    "l-course-7": "Microbiologie",
    "l-course-8": "Immunologie",
    "l-course-9": "Biologie moléculaire",
    "l-course-10": "Pharmacologie",
    "l-course-11": "Radiobiologie et radioprotection",
    "l-course-12": "Anatomie : ostéologie, arthrologie et myologie",
    "l-course-13": "Splanchnologie",
    "l-course-14": "Embryologie",
    "l-course-15": "Physiologie humaine",
    "l-course-16": "Anatomie radiologique : tronc, viscères et crâne",
    "l-course-17": "Neuroanatomie",
    "l-course-18": "Sémiologie médicale",
    "l-course-19": "Sémiologie chirurgicale",
    "l-course-20": "Sémiologie radiologique",
    "l-course-21": "Appareillage",
    "l-course-22": "Enregistrement d’images",
    "l-course-23": "Techniques instrumentales",
    "l-course-24": "Techniques radiologiques",
    "l-course-25": "Techniques radiodiagnostiques",
    "l-course-26": "Échographie gynéco-obstétricale",
    "l-course-27": "Biophysique de l’imagerie",
    "l-course-28": "Physique électronique",
    "l-course-29": "Informatique médicale",
    "l-course-30": "Initiation à l’informatique",
    "l-course-31": "Biostatistique",
    "l-course-32": "Anglais technique",
    "l-course-33": "Techniques d’expression et méthodes de communication",
    "l-course-34": "Santé publique",
    "l-course-35": "Déontologie médicale",
    "l-course-36": "Législation du travail",
    "l-course-37": "Soins infirmiers",
    "l-course-38": "Sport",

    "experience-heading": "Mes expériences professionnelles",
    "exp-title-1": "Échographiste",
    "exp-intro-1": "Au cours de mes années d’exercice au sein de ces deux structures, j’ai contribué de manière active au suivi, à l’évaluation échographique et à l’orientation diagnostique des patientes, aussi bien dans le cadre de la grossesse que dans celui des pathologies gynécologiques et des problématiques liées à la fertilité.",
    "exp-subtitle-1": "Pratique clinique",
    "exp-subtitle-2": "Accompagnement des patientes",
    "exp-li-1a": "Réalisation d’échographies gynéco-obstétricales, c’est-à-dire d’examens d’imagerie médicale utilisant les ultrasons pour explorer l’appareil reproducteur féminin et assurer le suivi évolutif de la grossesse.",
    "exp-li-1b": "Participation au suivi et à la prise en charge des femmes enceintes depuis le début de la grossesse jusqu’à terme, dans une logique de surveillance, d’évaluation et d’aide à la décision clinique.",
    "exp-li-1c": "Contribution à la prise en charge de femmes exprimant un désir de maternité, ainsi que de patientes confrontées à des situations d’infertilité primaire ou secondaire.",
    "exp-li-1d": "Appui au repérage précoce, à l’analyse et à l’orientation diagnostique de diverses anomalies obstétricales et pathologies gynécologiques rencontrées en pratique courante.",
    "exp-path-title-1": "Pathologies rencontrées – Grossesse",
    "exp-path-title-2": "Pathologies rencontrées – Système reproducteur",
    "exp-path-1": "Fausse couche",
    "exp-path-2": "Grossesse môlaire",
    "exp-path-3": "Œuf clair",
    "exp-path-4": "Hydrocéphalie fœtale",
    "exp-path-5": "Anencéphalie fœtale",
    "exp-path-6": "Kyste rénal fœtal",
    "exp-path-7": "Omphalocèle",
    "exp-path-8": "Hydramnios / Polyhydramnios",
    "exp-path-9": "Oligoamnios",
    "exp-path-10": "Myomes utérins",
    "exp-path-11": "Kystes ovariens organiques",
    "exp-path-12": "Kystes ovariens fonctionnels",
    "exp-path-13": "Dystrophies ovariennes / syndrome des ovaires polykystiques",
    "exp-path-14": "Kystes endométriosiques",

    "exp-title-2": "Manipulateur en radiologie médicale",
    "exp-intro-2": "Pendant trois années au sein de ce centre hospitalier spécialisé dans la prise en charge des affections respiratoires, j’ai occupé des fonctions de responsabilité au service de radiologie, en contribuant au diagnostic, au suivi des patients et à l’organisation du service dans un cadre institutionnel lié au Programme National de Lutte contre la Tuberculose et au Fonds mondial.",
    "exp-subtitle-3": "Responsabilités principales",
    "exp-subtitle-4": "Organisation et encadrement",
    "exp-li-2a": "Réalisation de radiographies thoraciques et pulmonaires pour le diagnostic et le suivi des affections respiratoires.",
    "exp-li-2b": "Contribution à la prise en charge des patients atteints de pathologies pulmonaires en collaboration avec les médecins et spécialistes.",
    "exp-li-2c": "Supervision du bon fonctionnement du service de radiologie et du bon déroulement des activités quotidiennes.",
    "exp-li-2d": "Rédaction mensuelle des rapports d’activité dans le cadre du suivi institutionnel du service.",
    "exp-li-2e": "Encadrement de stagiaires venus mettre en pratique leurs connaissances théoriques.",
    "exp-li-2f": "Participation à l’exploration radiographique de pathologies non pulmonaires, notamment en contexte traumatique et ostéo-articulaire.",
    "exp-path-title-3": "Pathologies respiratoires prises en charge",
    "exp-path-title-4": "Autres explorations radiographiques",
    "exp-path-15": "Tuberculose",
    "exp-path-16": "Pleurésie",
    "exp-path-17": "Syndromes bronchiques",
    "exp-path-18": "Bronchopneumopathie chronique obstructive",
    "exp-path-19": "Syndrome d’épanchement pleural",
    "exp-path-20": "Traumatismes / accidents de la voie publique (AVP)",
    "exp-path-21": "Arthrose",
    "exp-path-22": "Explorations abdominales",

    "exp-title-3": "Stage en radiologie",
    "exp-li-3a": "Réalisation des radiographies",
    "exp-li-3b": "Traitement d’images radiographiques",

    "skills-heading": "Mes compétences",
    "projects-heading": "Mes projets",
    "project-title-1": "Analyse des tendances épidémiologiques mondiales et facteurs associés à la mortalité liée au cancer de sein",
    "project-li-1a": "Collecte de données par web scraping",
    "project-li-1b": "Intégration de bases IHME / Banque mondiale",
    "project-li-1c": "Nettoyage des données",
    "project-li-1d": "Développement d’un dashboard interactif",
    "project-li-1e": "Modélisation prédictive",
    "project-link-1": "Consulter le projet",

    "project-title-2": "Analyse bibliométrique des thèmes et tendances de recherche sur les facteurs environnementaux et le trouble du spectre de l’autisme chez l’enfant",
    "project-li-2a": "Analyse d’un corpus de 1 574 articles scientifiques",
    "project-li-2b": "Exploitation de données issues de Web of Science",
    "project-li-2c": "Utilisation de bibliometrix",
    "project-li-2d": "Cartographie scientifique sous VOSviewer",
    "project-link-2": "Consulter le projet",

    "project-title-3": "Modélisation statistique des déterminants de l’épaisseur intima-media carotidienne : analyse par régression linéaire multiple",
    "project-li-3a": "Nettoyage des données",
    "project-li-3b": "Analyse descriptive",
    "project-li-3c": "Régression linéaire multiple",
    "project-li-3d": "Sélection des variables significatives",
    "project-li-3e": "Validation statistique du modèle",

    "project-title-4": "Formations certifiantes DataCamp",
    "project-li-4a": "Associate Data Scientist in Python",
    "project-li-4b": "Data Scientist and Statistician in R",
    "project-li-4c": "Associate Data Analyst in SQL",
    "project-link-4": "Consulter",

    "contact-heading": "Contact",
    "footer-text": "© 2026 Hippolyte ADECHIAN"
  },

  en: {
    "nav-about": "About",
    "nav-education": "Academic background",
    "nav-experience": "Professional experience",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    "nav-about-mobile": "About",
    "nav-education-mobile": "Academic background",
    "nav-experience-mobile": "Professional experience",
    "nav-skills-mobile": "Skills",
    "nav-projects-mobile": "Projects",
    "nav-contact-mobile": "Contact",

    "cv-btn-text-mobile": '<i class="fas fa-download"></i> Download my CV',
    "hero-cv-btn": '<i class="fas fa-download"></i> Download my CV',
    "hero-badge": "Master’s Student in Health Data Science",
    "hero-tagline": "Between clinical expertise and data intelligence",
    "hero-description": "I leverage health data to produce robust analyses, useful models and clear visualizations for research, decision-making and biomedical innovation.",
    "hero-projects-btn": '<i class="fas fa-folder-open"></i> View my projects',

    "hero-stat-title-1": "Data Science",
    "hero-stat-text-1": "Python • R • SQL",
    "hero-stat-title-2": "Healthcare",
    "hero-stat-text-2": "Imaging • Biomedical • Epidemiology",
    "hero-stat-title-3": "Delivery",
    "hero-stat-text-3": "Dashboards • ML • Data management",

    "hero-card-chip": "Health Data Dashboard",
    "hero-card-title": "Biomedical analysis & visualization",
    "hero-card-text": "Connecting clinical data, statistical modeling and interactive exploration.",
    "hero-tag-card-1": "Machine Learning",
    "hero-tag-card-2": "Biostatistics",
    "hero-tag-card-3": "Dashboarding",

    "about-heading": "About me",
    "about-p1": "🏥 I am currently a <strong>Master’s student in Health Data Science</strong> at the University of Lille. My profile lies at the crossroads of healthcare, data analysis and digital tools, with a strong desire to use data science to address concrete biomedical challenges.",
    "about-p2": "🔬 My background is
