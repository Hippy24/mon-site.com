document.body.classList.add("js-enabled");

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

function openMobileMenu() {
  if (mobileMenu) mobileMenu.classList.add("open");
  if (overlay) overlay.classList.add("show");
}

function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
}

if (menuToggle) menuToggle.addEventListener("click", openMobileMenu);
if (closeMenu) closeMenu.addEventListener("click", closeMobileMenu);
if (overlay) overlay.addEventListener("click", closeMobileMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => { closeMobileMenu(); });
});

function activateMenuOnScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (!currentSectionId && sections.length > 0) {
    currentSectionId = sections[0].getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
}

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

    "hero-badge": "En recherche d'alternance Data Scientist / Data Analyst – Septembre 2026",
    "hero-tagline": "Entre expertise clinique et intelligence des données",
    "hero-description": "Je transforme des données complexes en insights actionnables grâce au Machine Learning, au NLP et à la Business Intelligence, avec une expertise unique combinant Data Science et connaissance approfondie du terrain médical.",
    "hero-projects-btn": '<i class="fas fa-folder-open"></i> Voir mes projets',

    "hero-stat-title-1": "Data Science",
    "hero-stat-text-1": "Python • R • SQL • MongoDB",
    "hero-stat-title-2": "Machine Learning",
    "hero-stat-text-2": "Scikit-learn • Deep Learning • IA",
    "hero-stat-title-3": "NLP & Visualisation",
    "hero-stat-text-3": "spaCy • CamemBERT • Power BI • Dash",

    "hero-card-chip": "Data Science Dashboard",
    "hero-card-title": "NLP · ML · Business Intelligence",
    "hero-card-text": "Pipelines de données, modèles de langage et tableaux de bord décisionnels au service de l'analyse et de la décision.",
    "hero-tag-card-1": "Machine Learning",
    "hero-tag-card-2": "NLP / NER",
    "hero-tag-card-3": "Dashboarding",

    "about-heading": "À propos de moi",
    "about-p1": "🏥 Je suis étudiant en <strong>Master Data Science en Santé (M2)</strong> à l'Université de Lille et actuellement stagiaire Data Scientist – Data Analyst au <strong>CHU Dijon Bourgogne</strong>. En recherche d'une <strong>alternance de 12 mois à partir de septembre 2026</strong>, mon profil se situe à l'intersection de l'analyse de données, de l'intelligence artificielle et du monde médical.",
    "about-p2": "🔬 Mon parcours s'appuie sur une première formation en <strong>imagerie médicale et radiobiologie</strong>, qui m'a permis d'acquérir une connaissance profonde du milieu hospitalier, des pratiques cliniques et de la réalité du terrain. Cette base scientifique et professionnelle m'a naturellement conduit vers une spécialisation en <strong>data science</strong>, afin de développer des compétences avancées en Machine Learning, NLP, visualisation de données et exploitation de bases de données complexes.",
    "about-p3": "📊 Mon stage au CHU Dijon Bourgogne m'a permis de développer des pipelines NLP/NER (spaCy, CamemBERT), d'exploiter un entrepôt de données de santé via SQL, de benchmarker des modèles de langage (LLM, BERT) et de concevoir des tableaux de bord BI (SAP Business Objects, Power BI). J'apprécie les projets combinant rigueur méthodologique, impact concret et dimension interdisciplinaire.",
    "about-p4": "💡 Je recherche activement une <strong>alternance Data Scientist / Data Analyst de 12 mois débutant en septembre 2026</strong>. Mon objectif est de rejoindre une organisation ambitieuse où je peux mobiliser mes compétences en Python, SQL, ML et NLP pour produire des analyses fiables, des modèles pertinents et des visualisations claires à forte valeur ajoutée.",

    "education-heading": "Mon parcours académique",
    "edu-title-1": "Master Data Science en Santé – M2 (en cours)",
    "edu-title-2": "Licence Professionnelle en Génie d'Imagerie Médicale et de Radiobiologie",
    "edu-intro-1": "Formation articulant des compétences avancées en statistiques, informatique, NLP, Machine Learning et Big Data, dans une logique d'analyse, de modélisation et d'innovation appliquée aux données.",
    "edu-intro-2": "Cette formation pluridisciplinaire m'a apporté une base scientifique solide en anatomie, imagerie, radiologie, biologie, physique et pratique clinique, tout en me préparant aux exigences techniques et humaines du milieu hospitalier.",

    "master-cat-m2-title": "Informatique avancée & IA (M2)",
    "master-cat-m2b-title": "Statistiques & Données (M2)",
    "master-cat-1-title": "Fondements quantitatifs et théoriques (M1)",
    "master-cat-2-title": "Informatique, données et outils (M1)",
    "master-cat-3-title": "Sciences du vivant et biomédecine",
    "master-cat-4-title": "Santé publique, recherche et professionnalisation",

    "m2-course-1": "Text Mining & Natural Language Processing",
    "m2-course-2": "Deep Learning",
    "m2-course-3": "Apprentissage automatique avancé",
    "m2-course-4": "Large-scale Data Mining",
    "m2-course-5": "Big Data Technologies & Electronic Health Records",
    "m2-course-6": "Data Engineering",
    "m2-course-7": "Ontologie & Web Mining",
    "m2-course-8": "Bioinformatique",
    "m2-course-9": "Conception d'interfaces Homme-Machine",
    "m2-course-10": "Statistique Bayésienne",
    "m2-course-11": "Analyse de survie",
    "m2-course-12": "Séries chronologiques & Données spatiales",
    "m2-course-13": "Épidémiologie & Recherche Clinique",
    "m2-course-14": "Médecine de précision & Médecine personnalisée",
    "m2-course-15": "Modèles économiques du Big Data en Santé",
    "m2-course-16": "Professional English for Data Science",

    "m-course-1": "Algorithmique",
    "m-course-2": "Algèbre et analyse",
    "m-course-3": "Mesure et probabilités statistiques",
    "m-course-4": "Statistique paramétrique",
    "m-course-5": "Statistique inférentielle",
    "m-course-6": "Modélisation statistique",
    "m-course-7": "Optimisation",
    "m-course-8": "Fouille de motifs",
    "m-course-9": "Systèmes d'exploitation",
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

    "l-course-1": "Mathématiques", "l-course-2": "Physique", "l-course-3": "Chimie générale",
    "l-course-4": "Chimie organique", "l-course-5": "Biochimie structurale", "l-course-6": "Biologie cellulaire",
    "l-course-7": "Microbiologie", "l-course-8": "Immunologie", "l-course-9": "Biologie moléculaire",
    "l-course-10": "Pharmacologie", "l-course-11": "Radiobiologie et radioprotection",
    "l-course-12": "Anatomie : ostéologie, arthrologie et myologie", "l-course-13": "Splanchnologie",
    "l-course-14": "Embryologie", "l-course-15": "Physiologie humaine",
    "l-course-16": "Anatomie radiologique : tronc, viscères et crâne", "l-course-17": "Neuroanatomie",
    "l-course-18": "Sémiologie médicale", "l-course-19": "Sémiologie chirurgicale",
    "l-course-20": "Sémiologie radiologique", "l-course-21": "Appareillage",
    "l-course-22": "Enregistrement d'images", "l-course-23": "Techniques instrumentales",
    "l-course-24": "Techniques radiologiques", "l-course-25": "Techniques radiodiagnostiques",
    "l-course-26": "Échographie gynéco-obstétricale", "l-course-27": "Biophysique de l'imagerie",
    "l-course-28": "Physique électronique", "l-course-29": "Informatique médicale",
    "l-course-30": "Initiation à l'informatique", "l-course-31": "Biostatistique",
    "l-course-32": "Anglais technique", "l-course-33": "Techniques d'expression et méthodes de communication",
    "l-course-34": "Santé publique", "l-course-35": "Déontologie médicale",
    "l-course-36": "Législation du travail", "l-course-37": "Soins infirmiers", "l-course-38": "Sport",

    "experience-heading": "Mes expériences professionnelles",

    "exp-title-0": "Stagiaire Data Scientist – Data Analyst",
    "exp-intro-0": "Stage réalisé au sein de la Direction des Systèmes Numériques du CHU Dijon Bourgogne. Développement de pipelines NLP/NER (spaCy, CamemBERT), exploitation de l'entrepôt de données de santé (EDS), benchmark de modèles de langage et conception de tableaux de bord décisionnels.",
    "exp-subtitle-0a": "Missions principales",
    "exp-subtitle-0b": "Analyse et valorisation",
    "exp-li-0a": "Développement de pipelines NLP/NER (spaCy, CamemBERT) pour l'extraction automatique d'informations clés à partir de documents textuels non structurés à grande échelle.",
    "exp-li-0b": "Exploitation de l'entrepôt de données de santé (EDS) : requêtage SQL, nettoyage, transformation et intégration de données hétérogènes (ETL).",
    "exp-li-0c": "Benchmark et évaluation de modèles de langage (LLM, BERT, CamemBERT) sur des tâches de classification et d'extraction d'information.",
    "exp-li-0d": "Conception de tableaux de bord décisionnels (SAP Business Objects, Power BI) et production de statistiques pour l'aide à la décision.",
    "exp-path-title-0": "Environnement technique",
    "exp-path-0": "Python",
    "exp-path-0b": "NLP / NER",
    "exp-path-0c": "spaCy · CamemBERT · BERT",
    "exp-path-0d": "LLM",
    "exp-path-0e": "SQL · ETL · EDS",
    "exp-path-0f": "Pandas · Scikit-learn · NumPy",
    "exp-path-0g": "SAP Business Objects",
    "exp-path-0h": "Power BI",

    "exp-title-1": "Technicien en Imagerie Médicale – Échographiste",
    "exp-intro-1": "Au cours de mes années d'exercice au sein de ces deux structures, j'ai contribué de manière active au suivi, à l'évaluation échographique et à l'orientation diagnostique des patientes, aussi bien dans le cadre de la grossesse que dans celui des pathologies gynécologiques et des problématiques liées à la fertilité.",
    "exp-subtitle-1": "Pratique clinique",
    "exp-subtitle-2": "Accompagnement des patientes",
    "exp-li-1a": "Réalisation d'échographies gynéco-obstétricales, c'est-à-dire d'examens d'imagerie médicale utilisant les ultrasons pour explorer l'appareil reproducteur féminin et assurer le suivi évolutif de la grossesse.",
    "exp-li-1b": "Participation au suivi et à la prise en charge des femmes enceintes depuis le début de la grossesse jusqu'à terme, dans une logique de surveillance, d'évaluation et d'aide à la décision clinique.",
    "exp-li-1c": "Contribution à la prise en charge de femmes exprimant un désir de maternité, ainsi que de patientes confrontées à des situations d'infertilité primaire ou secondaire.",
    "exp-li-1d": "Appui au repérage précoce, à l'analyse et à l'orientation diagnostique de diverses anomalies obstétricales et pathologies gynécologiques rencontrées en pratique courante.",
    "exp-path-title-1": "Pathologies rencontrées – Grossesse",
    "exp-path-title-2": "Pathologies rencontrées – Système reproducteur",
    "exp-path-1": "Fausse couche", "exp-path-2": "Grossesse môlaire", "exp-path-3": "Œuf clair",
    "exp-path-4": "Hydrocéphalie fœtale", "exp-path-5": "Anencéphalie fœtale", "exp-path-6": "Kyste rénal fœtal",
    "exp-path-7": "Omphalocèle", "exp-path-8": "Hydramnios / Polyhydramnios", "exp-path-9": "Oligoamnios",
    "exp-path-10": "Myomes utérins", "exp-path-11": "Kystes ovariens organiques",
    "exp-path-12": "Kystes ovariens fonctionnels",
    "exp-path-13": "Dystrophies ovariennes / syndrome des ovaires polykystiques",
    "exp-path-14": "Kystes endométriosiques",

    "exp-title-2": "Technicien en Imagerie Médicale – Responsable de l'unité de radiologie",
    "exp-intro-2": "Pendant trois années au sein de ce centre hospitalier spécialisé dans la prise en charge des affections respiratoires, j'ai occupé des fonctions de responsabilité au service de radiologie, en contribuant au diagnostic, au suivi des patients et à l'organisation du service dans un cadre institutionnel lié au Programme National de Lutte contre la Tuberculose et au Fonds mondial.",
    "exp-subtitle-3": "Responsabilités principales",
    "exp-subtitle-4": "Organisation et encadrement",
    "exp-li-2a": "Responsable de l'unité de radiologie : planification, coordination d'équipe et suivi des ressources.",
    "exp-li-2b": "Réalisation de radiographies thoraciques et pulmonaires pour le diagnostic et le suivi des affections respiratoires.",
    "exp-li-2c": "Contribution à la prise en charge des patients atteints de pathologies pulmonaires en collaboration avec les médecins.",
    "exp-li-2d": "Rédaction mensuelle des rapports d'activité dans le cadre du suivi institutionnel du service.",
    "exp-li-2e": "Encadrement de stagiaires venus mettre en pratique leurs connaissances théoriques.",
    "exp-li-2f": "Participation à l'exploration radiographique de pathologies non pulmonaires, notamment en contexte traumatique et ostéo-articulaire.",
    "exp-path-title-3": "Pathologies respiratoires prises en charge",
    "exp-path-title-4": "Autres explorations radiographiques",
    "exp-path-15": "Tuberculose", "exp-path-16": "Pleurésie", "exp-path-17": "Syndromes bronchiques",
    "exp-path-18": "Bronchopneumopathie chronique obstructive", "exp-path-19": "Syndrome d'épanchement pleural",
    "exp-path-20": "Traumatismes / accidents de la voie publique (AVP)",
    "exp-path-21": "Arthrose", "exp-path-22": "Explorations abdominales",

    "exp-title-3": "Stage en radiologie",
    "exp-li-3a": "Réalisation des radiographies",
    "exp-li-3b": "Traitement d'images radiographiques",

    "skills-heading": "Mes compétences",
    "projects-heading": "Mes projets",

    "project-title-1": "Analyse des tendances épidémiologiques mondiales et facteurs associés à la mortalité liée au cancer de sein",
    "project-p-1": "Ce projet combine la collecte de données par web scraping (IHME, Banque mondiale) sur 20+ pays et 10 ans de données, le développement d'un dashboard interactif (Plotly Dash) et une modélisation prédictive par ACP, K-Means et Random Forest — identification de 3 segments épidémiologiques distincts.",
    "project-link-1": "Consulter le projet",

    "project-title-2": "Analyse bibliométrique des thèmes et tendances de recherche sur les facteurs environnementaux et le trouble du spectre de l'autisme chez l'enfant",
    "project-p-2": "Text mining sur un corpus de 1 574 articles scientifiques issus de Web of Science (2000–2024). Utilisation de bibliometrix et VOSviewer pour cartographier les réseaux de co-citation, identifier les auteurs influents et dégager les tendances scientifiques émergentes.",
    "project-link-2": "Consulter le projet",

    "project-title-3": "Modélisation statistique des déterminants de l'épaisseur intima-media carotidienne : analyse par régression linéaire multiple",
    "project-p-3": "Préparation, nettoyage et analyse descriptive d'un jeu de données cliniques sous R. Modélisation par régression linéaire multiple — validation par tests de résidus, analyse de multicolinéarité et sélection de variables. Rédaction d'un rapport statistique structuré.",

    "project-title-4": "Formations certifiantes DataCamp",
    "project-p-4": "Parcours de certifications structurées renforçant les compétences techniques en analyse de données, Machine Learning et requêtage : Associate Data Scientist in Python, Data Scientist in R, Associate Data Analyst in SQL et Associate Data Analyst in Power BI (2024).",
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

    "hero-badge": "Seeking work-study contract (Data Scientist / Data Analyst) – September 2026",
    "hero-tagline": "Between clinical expertise and data intelligence",
    "hero-description": "I turn complex data into actionable insights through Machine Learning, NLP and Business Intelligence, combining Data Science skills with deep knowledge of the medical field.",
    "hero-projects-btn": '<i class="fas fa-folder-open"></i> View my projects',

    "hero-stat-title-1": "Data Science",
    "hero-stat-text-1": "Python • R • SQL • MongoDB",
    "hero-stat-title-2": "Machine Learning",
    "hero-stat-text-2": "Scikit-learn • Deep Learning • AI",
    "hero-stat-title-3": "NLP & Visualization",
    "hero-stat-text-3": "spaCy • CamemBERT • Power BI • Dash",

    "hero-card-chip": "Data Science Dashboard",
    "hero-card-title": "NLP · ML · Business Intelligence",
    "hero-card-text": "Data pipelines, language models and decision dashboards for analysis and decision-making.",
    "hero-tag-card-1": "Machine Learning",
    "hero-tag-card-2": "NLP / NER",
    "hero-tag-card-3": "Dashboarding",

    "about-heading": "About me",
    "about-p1": "🏥 I am a <strong>Master's student in Health Data Science (M2)</strong> at the University of Lille and currently a Data Scientist – Data Analyst intern at <strong>CHU Dijon Bourgogne</strong>. Actively seeking a <strong>12-month work-study contract starting September 2026</strong>, my profile sits at the intersection of data analysis, artificial intelligence and the medical field.",
    "about-p2": "🔬 My background is built on an initial training in <strong>medical imaging and radiobiology</strong>, which gave me deep knowledge of the hospital environment, clinical practices and field realities. This foundation naturally led me toward <strong>data science</strong>, developing advanced skills in Machine Learning, NLP, data visualization and complex database management.",
    "about-p3": "📊 My internship at CHU Dijon Bourgogne allowed me to develop NLP/NER pipelines (spaCy, CamemBERT), exploit a health data warehouse via SQL, benchmark language models (LLM, BERT) and design BI dashboards (SAP Business Objects, Power BI). I enjoy projects combining methodological rigor, practical impact and interdisciplinary dimension.",
    "about-p4": "💡 I am actively looking for a <strong>12-month work-study contract as Data Scientist / Data Analyst starting September 2026</strong>. My goal is to join an ambitious organization where I can apply my skills in Python, SQL, ML and NLP to produce reliable analyses, relevant models and clear high-value visualizations.",

    "education-heading": "My academic background",
    "edu-title-1": "Master's in Health Data Science – M2 (ongoing)",
    "edu-title-2": "Professional Bachelor's Degree in Medical Imaging Engineering and Radiobiology",
    "edu-intro-1": "Program combining advanced skills in statistics, computing, NLP, Machine Learning and Big Data, focused on analysis, modeling and innovation applied to data.",
    "edu-intro-2": "This multidisciplinary program provided a solid scientific foundation in anatomy, imaging, radiology, biology, physics and clinical practice, while preparing me for the technical and human demands of the hospital environment.",

    "master-cat-m2-title": "Advanced Computing & AI (M2)",
    "master-cat-m2b-title": "Statistics & Data (M2)",
    "master-cat-1-title": "Quantitative and theoretical foundations (M1)",
    "master-cat-2-title": "Computing, data and tools (M1)",
    "master-cat-3-title": "Life sciences and biomedicine",
    "master-cat-4-title": "Public health, research and professional development",

    "m2-course-1": "Text Mining & Natural Language Processing",
    "m2-course-2": "Deep Learning",
    "m2-course-3": "Advanced Machine Learning",
    "m2-course-4": "Large-scale Data Mining",
    "m2-course-5": "Big Data Technologies & Electronic Health Records",
    "m2-course-6": "Data Engineering",
    "m2-course-7": "Ontology & Web Mining",
    "m2-course-8": "Bioinformatics",
    "m2-course-9": "Human-Computer Interface Design",
    "m2-course-10": "Bayesian Statistics",
    "m2-course-11": "Survival Analysis",
    "m2-course-12": "Time Series & Spatial Data",
    "m2-course-13": "Epidemiology & Clinical Research",
    "m2-course-14": "Precision Medicine & Personalized Medicine",
    "m2-course-15": "Economic Models of Big Data in Healthcare",
    "m2-course-16": "Professional English for Data Science",

    "m-course-1": "Algorithms", "m-course-2": "Algebra and analysis",
    "m-course-3": "Measurement and statistical probability", "m-course-4": "Parametric statistics",
    "m-course-5": "Inferential statistics", "m-course-6": "Statistical modeling",
    "m-course-7": "Optimization", "m-course-8": "Pattern mining",
    "m-course-9": "Operating systems", "m-course-10": "Data management",
    "m-course-11": "Health Data Science Toolbox", "m-course-12": "Web scraping and web crawling",
    "m-course-13": "Computational modeling", "m-course-14": "Biomedical informatics",
    "m-course-15": "Molecular and systems biology", "m-course-16": "Biochemistry",
    "m-course-17": "Cell biology", "m-course-18": "Physiology and pathophysiology",
    "m-course-19": "Pharmacology", "m-course-20": "Pharmacogenetics / Pharmacogenomics",
    "m-course-21": "Genomics", "m-course-22": "Transcriptomics",
    "m-course-23": "Proteomics", "m-course-24": "Metabolomics", "m-course-25": "Biomedical sensors",
    "m-course-26": "Communication", "m-course-27": "Professional English",
    "m-course-28": "Research training", "m-course-29": "Public health",
    "m-course-30": "Epidemiology", "m-course-31": "Project management",

    "lic-cat-1-title": "Fundamental sciences",
    "lic-cat-2-title": "Anatomy, physiology and biomedical disciplines",
    "lic-cat-3-title": "Imaging, radiology and professional techniques",
    "lic-cat-4-title": "Statistics, computing and communication",
    "lic-cat-5-title": "Health, ethics and professional environment",

    "l-course-1": "Mathematics", "l-course-2": "Physics", "l-course-3": "General chemistry",
    "l-course-4": "Organic chemistry", "l-course-5": "Structural biochemistry", "l-course-6": "Cell biology",
    "l-course-7": "Microbiology", "l-course-8": "Immunology", "l-course-9": "Molecular biology",
    "l-course-10": "Pharmacology", "l-course-11": "Radiobiology and radiation protection",
    "l-course-12": "Anatomy: osteology, arthrology and myology", "l-course-13": "Splanchnology",
    "l-course-14": "Embryology", "l-course-15": "Human physiology",
    "l-course-16": "Radiological anatomy: trunk, viscera and skull", "l-course-17": "Neuroanatomy",
    "l-course-18": "Medical semiology", "l-course-19": "Surgical semiology",
    "l-course-20": "Radiological semiology", "l-course-21": "Equipment",
    "l-course-22": "Image recording", "l-course-23": "Instrumental techniques",
    "l-course-24": "Radiological techniques", "l-course-25": "Radiodiagnostic techniques",
    "l-course-26": "Gynecological and obstetrical ultrasound", "l-course-27": "Biophysics of imaging",
    "l-course-28": "Electronic physics", "l-course-29": "Medical informatics",
    "l-course-30": "Introduction to computing", "l-course-31": "Biostatistics",
    "l-course-32": "Technical English", "l-course-33": "Expression techniques and communication methods",
    "l-course-34": "Public health", "l-course-35": "Medical ethics",
    "l-course-36": "Labor law", "l-course-37": "Nursing care", "l-course-38": "Sports",

    "experience-heading": "My professional experience",

    "exp-title-0": "Data Scientist – Data Analyst Intern",
    "exp-intro-0": "Internship at the Digital Systems Directorate of CHU Dijon Bourgogne. Development of NLP/NER pipelines (spaCy, CamemBERT), exploitation of the health data warehouse (EDS), benchmarking of language models and design of decision dashboards.",
    "exp-subtitle-0a": "Main responsibilities",
    "exp-subtitle-0b": "Analysis and delivery",
    "exp-li-0a": "Development of NLP/NER pipelines (spaCy, CamemBERT) for the automatic extraction of key information from large-scale unstructured textual documents.",
    "exp-li-0b": "Exploitation of the health data warehouse (EDS): SQL querying, cleaning, transformation and integration of heterogeneous data (ETL).",
    "exp-li-0c": "Benchmarking and evaluation of language models (LLM, BERT, CamemBERT) on classification and information extraction tasks.",
    "exp-li-0d": "Design of decision dashboards (SAP Business Objects, Power BI) and production of statistics for decision support.",
    "exp-path-title-0": "Technical environment",
    "exp-path-0": "Python",
    "exp-path-0b": "NLP / NER",
    "exp-path-0c": "spaCy · CamemBERT · BERT",
    "exp-path-0d": "LLM",
    "exp-path-0e": "SQL · ETL · EDS",
    "exp-path-0f": "Pandas · Scikit-learn · NumPy",
    "exp-path-0g": "SAP Business Objects",
    "exp-path-0h": "Power BI",

    "exp-title-1": "Medical Imaging Technician – Ultrasound Technician",
    "exp-intro-1": "During my years of practice within these two healthcare facilities, I played an active role in patient follow-up, ultrasound assessment and diagnostic orientation, both in pregnancy care and gynecological conditions.",
    "exp-subtitle-1": "Clinical practice",
    "exp-subtitle-2": "Patient support",
    "exp-li-1a": "Performed gynecological and obstetrical ultrasound examinations to explore the female reproductive system and monitor pregnancy progression.",
    "exp-li-1b": "Contributed to the follow-up and care of pregnant women from early pregnancy to full term, with a focus on monitoring, assessment and clinical decision support.",
    "exp-li-1c": "Participated in the care of women expressing a desire for motherhood, as well as patients facing primary or secondary infertility.",
    "exp-li-1d": "Supported the early identification, analysis and diagnostic orientation of various obstetrical abnormalities and gynecological conditions encountered in routine practice.",
    "exp-path-title-1": "Conditions encountered – Pregnancy",
    "exp-path-title-2": "Conditions encountered – Reproductive system",
    "exp-path-1": "Miscarriage", "exp-path-2": "Molar pregnancy", "exp-path-3": "Blighted ovum",
    "exp-path-4": "Fetal hydrocephalus", "exp-path-5": "Fetal anencephaly", "exp-path-6": "Fetal renal cyst",
    "exp-path-7": "Omphalocele", "exp-path-8": "Hydramnios / Polyhydramnios", "exp-path-9": "Oligohydramnios",
    "exp-path-10": "Uterine fibroids", "exp-path-11": "Organic ovarian cysts",
    "exp-path-12": "Functional ovarian cysts",
    "exp-path-13": "Ovarian dystrophy / polycystic ovary syndrome",
    "exp-path-14": "Endometriotic cysts",

    "exp-title-2": "Medical Imaging Technician – Head of Radiology Unit",
    "exp-intro-2": "For three years at this hospital center specialized in respiratory diseases, I held responsibilities in the radiology department, contributing to diagnosis, patient follow-up and service organization linked to the National Tuberculosis Control Program and the Global Fund.",
    "exp-subtitle-3": "Main responsibilities",
    "exp-subtitle-4": "Organization and supervision",
    "exp-li-2a": "Head of the radiology unit: planning, team coordination and resource management.",
    "exp-li-2b": "Performed chest and pulmonary radiographs for the diagnosis and follow-up of respiratory diseases.",
    "exp-li-2c": "Contributed to the care of patients with pulmonary conditions in collaboration with physicians.",
    "exp-li-2d": "Prepared monthly activity reports as part of the institutional monitoring of the department.",
    "exp-li-2e": "Supervised trainees applying their theoretical knowledge in practice.",
    "exp-li-2f": "Contributed to radiographic exploration of non-pulmonary pathologies, especially in traumatic and musculoskeletal contexts.",
    "exp-path-title-3": "Respiratory conditions managed",
    "exp-path-title-4": "Other radiographic explorations",
    "exp-path-15": "Tuberculosis", "exp-path-16": "Pleurisy", "exp-path-17": "Bronchial syndromes",
    "exp-path-18": "Chronic obstructive pulmonary disease", "exp-path-19": "Pleural effusion syndrome",
    "exp-path-20": "Trauma / road traffic accidents", "exp-path-21": "Osteoarthritis",
    "exp-path-22": "Abdominal explorations",

    "exp-title-3": "Radiology Internship",
    "exp-li-3a": "Performed radiographic imaging",
    "exp-li-3b": "Processed radiographic images",

    "skills-heading": "My skills",
    "projects-heading": "My projects",

    "project-title-1": "Analysis of global epidemiological trends and factors associated with breast cancer mortality",
    "project-p-1": "This project combines web scraping (IHME, World Bank) across 20+ countries and 10 years of data, an interactive dashboard (Plotly Dash) and predictive modeling using PCA, K-Means and Random Forest — identifying 3 distinct epidemiological segments.",
    "project-link-1": "View project",

    "project-title-2": "Bibliometric analysis of research themes and trends on environmental factors and autism spectrum disorder in children",
    "project-p-2": "Text mining on a corpus of 1,574 scientific articles from Web of Science (2000–2024). Using bibliometrix and VOSviewer to map co-citation networks, identify key authors and highlight emerging scientific trends.",
    "project-link-2": "View project",

    "project-title-3": "Statistical modeling of determinants of carotid intima-media thickness: multiple linear regression analysis",
    "project-p-3": "Data preparation, cleaning and descriptive analysis under R. Multiple linear regression modeling — validated by residual tests, multicollinearity analysis and variable selection. Structured statistical report with results interpretation.",

    "project-title-4": "Certified DataCamp training programs",
    "project-p-4": "Structured certifications strengthening technical skills in data analysis, Machine Learning and querying: Associate Data Scientist in Python, Data Scientist in R, Associate Data Analyst in SQL and Associate Data Analyst in Power BI (2024).",
    "project-link-4": "View",

    "contact-heading": "Contact",
    "footer-text": "© 2026 Hippolyte ADECHIAN"
  }
};

function updateCourseButtonLabels(lang) {
  toggleButtons.forEach((button) => {
    const targetId = button.dataset.target;
    const panel = document.getElementById(targetId);
    const span = button.querySelector(".btn-label");
    const isOpen = panel && panel.classList.contains("open");
    if (span) {
      span.textContent = isOpen
        ? (lang === "fr" ? "Masquer le contenu" : "Hide content")
        : (lang === "fr" ? "Voir le contenu" : "View content");
    }
  });
}

function updateExperienceButtonLabels(lang) {
  experienceToggleButtons.forEach((button) => {
    const targetId = button.dataset.target;
    const panel = document.getElementById(targetId);
    const span = button.querySelector(".btn-label");
    const isOpen = panel && panel.classList.contains("open");
    if (span) {
      span.textContent = isOpen
        ? (lang === "fr" ? "Réduire" : "Show less")
        : (lang === "fr" ? "Lire la suite" : "Read more");
    }
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  Object.keys(translations[lang]).forEach((id) => {
    const element = document.getElementById(id);
    if (element) { element.innerHTML = translations[lang][id]; }
  });
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  updateCourseButtonLabels(lang);
  updateExperienceButtonLabels(lang);
  localStorage.setItem("portfolioLanguage", lang);
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const panel = document.getElementById(targetId);
    const lang = document.documentElement.lang || "fr";
    if (!panel) return;
    panel.classList.toggle("open");
    button.classList.toggle("open");
    updateCourseButtonLabels(lang);
  });
});

experienceToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const panel = document.getElementById(targetId);
    const lang = document.documentElement.lang || "fr";
    if (!panel) return;
    panel.classList.toggle("open");
    button.classList.toggle("open");
    button.setAttribute("aria-expanded", panel.classList.contains("open") ? "true" : "false");
    updateExperienceButtonLabels(lang);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.dataset.lang;
    if (selectedLang && translations[selectedLang]) { setLanguage(selectedLang); }
  });
});

window.addEventListener("scroll", () => {
  activateMenuOnScroll();
  revealOnScroll();
});

window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  const savedLanguage = localStorage.getItem("portfolioLanguage");
  setLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : "fr");
  revealOnScroll();
  activateMenuOnScroll();
});
