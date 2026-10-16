/**
 * Profile content.
 * The text lives here, never inside the components.
 */

export interface QuickFact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  brandName: string;
  shortName: string;
  role: string;
  greeting: string;
  typedPhrases: string[];
  heroParagraph: string;
  location: string;
  email: string;
  cvUrl: string;
  github: string;
  linkedin: string;
  aboutParagraphs: string[];
  quickFacts: QuickFact[];
}

export const profile: Profile = {
  name: "Jasser Arrieta Villa",
  brandName: "Jasser Arrieta Villa",
  shortName: "Jasser",
  role: "Desarrollador de Software Full-Stack",
  greeting: "Hola, soy",
  typedPhrases: [
    "Desarrollador de Software Full-Stack",
    "APIs con FastAPI y Node.js",
    "Interfaces con React y TypeScript",
  ],
  heroParagraph:
    "Ingeniería de Sistemas en Barranquilla, en proceso de grado. Construyo aplicaciones web de punta a punta: API, base de datos e interfaz.",
  location: "Barranquilla, Colombia",
  email: "jasserav7@gmail.com",
  cvUrl: "/cv/Jasser-Arrieta-CV.pdf",
  github: "https://github.com/jasserav7",
  linkedin: "https://www.linkedin.com/in/jasser-arrieta-784406322/",
  aboutParagraphs: [
    "Estudié Ingeniería de Sistemas en la Universidad de la Costa (CUC), en Barranquilla, y estoy en proceso de grado. Me muevo entre backend, frontend y datos, con Python como lenguaje base y JavaScript y TypeScript en la web.",
    "Me gusta construir proyectos completos: modelar la base de datos, exponer una API con autenticación y conectar una interfaz clara. Me motiva aprender cosas nuevas. Soy autodidacta y me organizo bien trabajando por mi cuenta.",
    "Estoy abierto a oportunidades de desarrollo de software, presenciales en Barranquilla o remotas.",
  ],
  quickFacts: [
    { label: "Ubicación", value: "Barranquilla, Colombia" },
    { label: "Inglés", value: "C1 Advanced (EF SET)" },
    { label: "Formación", value: "Ingeniería de Sistemas, CUC (2022–2026, en proceso de grado)" },
    {
      label: "Diplomado",
      value: "Tecnologías de Software para la Industria 4.0, CUC (agosto a octubre de 2026)",
    },
  ],
};
