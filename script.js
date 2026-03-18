const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");
const langButtons = document.querySelectorAll(".lang-btn");

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
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }
    if (overlay) {
      overlay.classList.remove("show");
    }
  });
});

const sections = document.querySelectorAll("section[id]");

function activateMenuOnScroll() {
  let scrollY = window.pageYOffset;

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

const reveals = document.querySelectorAll(".reveal");

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

    "cv-btn-text": '<i class="fas fa-download"></i> Télécharger mon CV',
    "cv-btn-text-mobile": '<i class="fas fa-download"></i> Télécharger mon CV',

    "hero-welcome": "Bienvenue sur ma page personnelle",
    "hero-role": "Étudiant en Master 1 Data Science en Santé",
    "hero-description": "Je transforme des données de santé complexes en informations fiables et exploitables à travers la modélisation statistique, l’intelligence artificielle, le data management et la visualisation interactive.",

    "about-heading": "À propos de moi",
    "about-p1": "🏥 Je suis actuellement étudiant en <strong>Master 1 Data Science en Santé</strong> à l’Université de Lille. Mon profil se situe à l’intersection de la santé, de l’analyse de données et des outils numériques, avec une volonté forte de mettre la science des données au service de problématiques concrètes dans le domaine biomédical.",
    "about-p2": "🔬 Mon parcours s’appuie sur une première formation en <strong>imagerie médicale et radiobiologie</strong>, qui m’a permis d’acquérir une connaissance du milieu hospitalier, des pratiques cliniques et de la réalité du terrain en santé. Cette base scientifique et professionnelle m’a naturellement conduit vers une spécialisation en <strong>data science appliquée à la santé</strong>, afin de développer des compétences plus avancées en modélisation, en visualisation de données, en apprentissage automatique et en exploitation de bases de données complexes.",
    "about-p3": "📊 Je m’intéresse particulièrement à l’analyse de données biomédicales, à la bioinformatique, au machine learning, à la création de dashboards interactifs et à la valorisation de données utiles à la recherche ou à l’aide à la décision. J’apprécie les projets qui combinent rigueur méthodologique, impact concret et dimension interdisciplinaire.",
    "about-p4": "💡 Aujourd’hui, je souhaite continuer à développer ce profil en contribuant à des projets ambitieux dans lesquels je peux mobiliser à la fois mes connaissances du secteur de la santé et mes compétences techniques en data science. Mon objectif est de participer à la production d’outils d’analyse fiables, de modèles pertinents et de visualisations claires permettant de mieux comprendre les données et d’en tirer une réelle valeur.",

    "education-heading": "Mon parcours académique",
    "edu-title-1": "Master 1 Data Science en Santé (en cours)",
    "edu-li-1a": "Analyse statistique et modélisation",
    "edu-li-1b": "Machine learning et data mining",
    "edu-li-1c": "Bases de données relationnelles et data management",
    "edu-li-1d": "Visualisation de données, épidémiologie et santé publique",
    "edu-li-1e": "Biologie, pharmacologie et projets en santé numérique",
    "edu-title-2": "Licence Professionnelle en Génie d’Imagerie Médicale et de Radiobiologie",
    "edu-li-2a": "Formation orientée imagerie médicale",
    "edu-li-2b": "Radiobiologie",
    "edu-li-2c": "Environnement hospitalier et pratique clinique",

    "experience-heading": "Mes expériences professionnelles",
    "exp-title-1": "Échographiste",
    "exp-li-1a": "Réalisation des échographies gynéco-obstétricales",
    "exp-li-1b": "Responsabilité du service d’échographie",
    "exp-title-2": "Manipulateur en radiologie médicale",
    "exp-li-2a": "Réalisation des radiographies",
    "exp-li-2b": "Traitement d’images radiographiques",
    "exp-li-2c": "Gestion du service de radiologie",
    "exp-li-2d": "Rédaction des rapports mensuels et annuels d’activités",
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
    "nav-experience": "Professional Experience",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    "nav-about-mobile": "About",
    "nav-education-mobile": "Academic background",
    "nav-experience-mobile": "Professional Experience",
    "nav-skills-mobile": "Skills",
    "nav-projects-mobile": "Projects",
    "nav-contact-mobile": "Contact",

    "cv-btn-text": '<i class="fas fa-download"></i> Download my CV',
    "cv-btn-text-mobile": '<i class="fas fa-download"></i> Download my CV',

    "hero-welcome": "Welcome to my personal page",
    "hero-role": "Master’s student in Health Data Science",
    "hero-description": "I transform complex health data into reliable and actionable insights through statistical modeling, artificial intelligence, data management and interactive visualization.",

    "about-heading": "About me",
    "about-p1": "🏥 I am currently a <strong>Master’s student in Health Data Science</strong> at the University of Lille. My profile lies at the crossroads of healthcare, data analysis and digital tools, with a strong desire to use data science to address concrete biomedical challenges.",
    "about-p2": "🔬 My background is built on an initial training in <strong>medical imaging and radiobiology</strong>, which gave me a solid understanding of the hospital environment, clinical practices and the realities of healthcare work in the field. This scientific and professional foundation naturally led me toward a specialization in <strong>data science applied to healthcare</strong>, in order to develop more advanced skills in modeling, data visualization, machine learning and the use of complex databases.",
    "about-p3": "📊 I am particularly interested in biomedical data analysis, bioinformatics, machine learning, the creation of interactive dashboards and the valorization of useful data for research or decision support. I enjoy projects that combine methodological rigor, practical impact and an interdisciplinary dimension.",
    "about-p4": "💡 Today, I aim to continue strengthening this profile by contributing to ambitious projects where I can bring together both my healthcare knowledge and my technical skills in data science. My goal is to help build reliable analytical tools, relevant models and clear visualizations that make data easier to understand and more valuable to use.",

    "education-heading": "My academic background",
    "edu-title-1": "Master’s Year 1 in Health Data Science (ongoing)",
    "edu-li-1a": "Statistical analysis and modeling",
    "edu-li-1b": "Machine learning and data mining",
    "edu-li-1c": "Relational databases and data management",
    "edu-li-1d": "Data visualization, epidemiology and public health",
    "edu-li-1e": "Biology, pharmacology and digital health projects",
    "edu-title-2": "Professional Bachelor’s Degree in Medical Imaging Engineering and Radiobiology",
    "edu-li-2a": "Program focused on medical imaging",
    "edu-li-2b": "Radiobiology",
    "edu-li-2c": "Hospital environment and clinical practice",

    "experience-heading": "My professional experience",
    "exp-title-1": "Ultrasound Technician",
    "exp-li-1a": "Performed gynecological and obstetrical ultrasound examinations",
    "exp-li-1b": "Managed the ultrasound department",
    "exp-title-2": "Radiologic Technologist",
    "exp-li-2a": "Performed radiographic imaging",
    "exp-li-2b": "Processed radiographic images",
    "exp-li-2c": "Managed the radiology department",
    "exp-li-2d": "Prepared monthly and annual activity reports",
    "exp-title-3": "Radiology Internship",
    "exp-li-3a": "Performed radiographic imaging",
    "exp-li-3b": "Performed radiographic image processing",

    "skills-heading": "My skills",

    "projects-heading": "My projects",
    "project-title-1": "Analysis of global epidemiological trends and factors associated with breast cancer mortality",
    "project-li-1a": "Data collection through web scraping",
    "project-li-1b": "Integration of IHME / World Bank datasets",
    "project-li-1c": "Data cleaning",
    "project-li-1d": "Development of an interactive dashboard",
    "project-li-1e": "Predictive modeling",
    "project-link-1": "View project",
    "project-title-2": "Bibliometric analysis of research themes and trends on environmental factors and autism spectrum disorder in children",
    "project-li-2a": "Analysis of a corpus of 1,574 scientific articles",
    "project-li-2b": "Use of Web of Science data",
    "project-li-2c": "Use of bibliometrix",
    "project-li-2d": "Scientific mapping with VOSviewer",
    "project-link-2": "View project",
    "project-title-3": "Statistical modeling of determinants of carotid intima-media thickness: multiple linear regression analysis",
    "project-li-3a": "Data cleaning",
    "project-li-3b": "Descriptive analysis",
    "project-li-3c": "Multiple linear regression",
    "project-li-3d": "Selection of significant variables",
    "project-li-3e": "Statistical model validation",
    "project-title-4": "Certified DataCamp training programs",
    "project-li-4a": "Associate Data Scientist in Python",
    "project-li-4b": "Data Scientist and Statistician in R",
    "project-li-4c": "Associate Data Analyst in SQL",
    "project-link-4": "View",

    "contact-heading": "Contact",
    "footer-text": "© 2026 Hippolyte ADECHIAN"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  Object.keys(translations[lang]).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = translations[lang][id];
    }
  });

  langButtons.forEach(button => {
    button.classList.remove("active");
    if (button.dataset.lang === lang) {
      button.classList.add("active");
    }
  });

  localStorage.setItem("portfolioLanguage", lang);
}

langButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  revealOnScroll();
  activateMenuOnScroll();

  const savedLanguage = localStorage.getItem("portfolioLanguage");
  if (savedLanguage) {
    setLanguage(savedLanguage);
  } else {
    setLanguage("fr");
  }
});