/**
 * UI strings and path helpers for the two supported languages.
 * Spanish is the default language and lives at the site root; English lives
 * under /en/. Content (profile, projects, stack, case study) is in src/data/.
 */

export type Lang = "es" | "en";

export const languages: Lang[] = ["es", "en"];

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");

export const homePath = (lang: Lang): string => (lang === "es" ? "/" : "/en/");

export const caseStudyPath = (lang: Lang, slug: string): string =>
  lang === "es" ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;

export interface UiStrings {
  htmlLang: string;
  ogLocale: string;
  siteTitle: string;
  siteDescription: string;
  skipToContent: string;
  nav: {
    ariaLabel: string;
    menu: string;
    items: { id: string; label: string }[];
  };
  langSwitch: { label: string; code: string; hrefLang: string };
  hero: {
    viewProjects: string;
    downloadCv: string;
    emailAria: string;
    portraitAlt: (name: string) => string;
  };
  about: { label: string; title: string };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    techOf: (title: string) => string;
    caseStudy: string;
    demo: string;
    code: string;
    of: (title: string) => string;
    onGithub: (title: string) => string;
  };
  stack: { label: string; title: string; baseTech: string; education: string };
  contact: {
    label: string;
    title: string;
    text: string;
    writeEmail: string;
    copyEmail: string;
    copied: string;
    copiedStatus: string;
    copyError: string;
    emailLabel: string;
  };
  caseStudy: {
    titleSuffix: string;
    label: string;
    backToProjects: string;
    role: string;
    status: string;
    completed: string;
    inProgress: string;
    projectLinks: string;
    viewDemo: string;
    viewCode: string;
    stack: string;
    problem: string;
    solution: string;
    roles: string;
    architecture: string;
    decisions: string;
    challenges: string;
    nextSteps: string;
    screenshots: string;
    links: string;
    liveDemo: string;
    repository: string;
  };
}

export const ui: Record<Lang, UiStrings> = {
  es: {
    htmlLang: "es",
    ogLocale: "es_CO",
    siteTitle: "Jasser Arrieta — Desarrollador Full-Stack",
    siteDescription:
      "Desarrollador de Software Full-Stack en Barranquilla, Colombia. Proyectos con Python, FastAPI, React y TypeScript.",
    skipToContent: "Saltar al contenido",
    nav: {
      ariaLabel: "Navegación principal",
      menu: "Menú",
      items: [
        { id: "inicio", label: "Inicio" },
        { id: "sobre-mi", label: "Sobre mí" },
        { id: "proyectos", label: "Proyectos" },
        { id: "stack", label: "Stack" },
        { id: "contacto", label: "Contacto" },
      ],
    },
    langSwitch: { label: "Cambiar el idioma a inglés", code: "EN", hrefLang: "en" },
    hero: {
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV (PDF)",
      emailAria: "Correo electrónico",
      portraitAlt: (name) => `Retrato de ${name}`,
    },
    about: { label: "Sobre mí", title: "Un desarrollador que termina lo que empieza" },
    projects: {
      label: "Proyectos",
      title: "Lo que he construido",
      subtitle: "Cada proyecto incluye su código y, cuando existe, una demo en vivo.",
      techOf: (title) => `Tecnologías de ${title}`,
      caseStudy: "Caso de estudio",
      demo: "Demo",
      code: "Código",
      of: (title) => ` de ${title}`,
      onGithub: (title) => ` de ${title} en GitHub`,
    },
    stack: {
      label: "Stack",
      title: "Con qué trabajo",
      baseTech: "Tecnología base: ",
      education: "Formación",
    },
    contact: {
      label: "Contacto",
      title: "¿Hablamos?",
      text: "Estoy disponible para oportunidades de desarrollo de software. Escríbeme y conversamos.",
      writeEmail: "Escribir un correo",
      copyEmail: "Copiar correo",
      copied: "Copiado",
      copiedStatus: "Correo copiado al portapapeles.",
      copyError: "No se pudo copiar. Usa el botón de correo.",
      emailLabel: "Correo: ",
    },
    caseStudy: {
      titleSuffix: "Caso de estudio",
      label: "Caso de estudio",
      backToProjects: "Volver a proyectos",
      role: "Rol",
      status: "Estado",
      completed: "Terminado",
      inProgress: "En desarrollo",
      projectLinks: "Enlaces del proyecto",
      viewDemo: "Ver demo",
      viewCode: "Ver código",
      stack: "Stack",
      problem: "Problema",
      solution: "Solución",
      roles: "Roles y flujos",
      architecture: "Arquitectura",
      decisions: "Decisiones técnicas",
      challenges: "Retos y aprendizajes",
      nextSteps: "Siguiente paso",
      screenshots: "Capturas",
      links: "Enlaces",
      liveDemo: "Demo en vivo",
      repository: "Repositorio en GitHub",
    },
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    siteTitle: "Jasser Arrieta — Full-Stack Developer",
    siteDescription:
      "Full-Stack Software Developer in Barranquilla, Colombia. Projects built with Python, FastAPI, React and TypeScript.",
    skipToContent: "Skip to content",
    nav: {
      ariaLabel: "Main navigation",
      menu: "Menu",
      items: [
        { id: "inicio", label: "Home" },
        { id: "sobre-mi", label: "About" },
        { id: "proyectos", label: "Projects" },
        { id: "stack", label: "Stack" },
        { id: "contacto", label: "Contact" },
      ],
    },
    langSwitch: { label: "Switch language to Spanish", code: "ES", hrefLang: "es" },
    hero: {
      viewProjects: "View projects",
      downloadCv: "Download CV (PDF)",
      emailAria: "Email",
      portraitAlt: (name) => `Portrait of ${name}`,
    },
    about: { label: "About", title: "A developer who finishes what they start" },
    projects: {
      label: "Projects",
      title: "What I have built",
      subtitle: "Each project includes its code and, when available, a live demo.",
      techOf: (title) => `Technologies used in ${title}`,
      caseStudy: "Case study",
      demo: "Demo",
      code: "Code",
      of: (title) => ` for ${title}`,
      onGithub: (title) => ` for ${title} on GitHub`,
    },
    stack: {
      label: "Stack",
      title: "What I work with",
      baseTech: "Core technology: ",
      education: "Education",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      text: "I am available for software development opportunities. Write to me and we can talk.",
      writeEmail: "Send an email",
      copyEmail: "Copy email",
      copied: "Copied",
      copiedStatus: "Email copied to the clipboard.",
      copyError: "Could not copy. Use the email button.",
      emailLabel: "Email: ",
    },
    caseStudy: {
      titleSuffix: "Case study",
      label: "Case study",
      backToProjects: "Back to projects",
      role: "Role",
      status: "Status",
      completed: "Completed",
      inProgress: "In development",
      projectLinks: "Project links",
      viewDemo: "View demo",
      viewCode: "View code",
      stack: "Stack",
      problem: "Problem",
      solution: "Solution",
      roles: "Roles and flows",
      architecture: "Architecture",
      decisions: "Technical decisions",
      challenges: "Challenges and lessons",
      nextSteps: "Next steps",
      screenshots: "Screenshots",
      links: "Links",
      liveDemo: "Live demo",
      repository: "GitHub repository",
    },
  },
};
