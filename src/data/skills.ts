/**
 * Stack and education content.
 * The text lives here, never inside the components.
 *
 * `core: true` marks the base technologies (★), the only ones with more
 * visual weight. No skill bars or percentages anywhere.
 */

import type { Lang } from "../i18n";

export interface Skill {
  name: string;
  core: boolean;
}

export interface SkillGroup {
  area: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    area: "Lenguajes",
    items: [
      { name: "Python", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: false },
      { name: "SQL", core: false },
    ],
  },
  {
    area: "Backend",
    items: [
      { name: "FastAPI", core: true },
      { name: "Node.js", core: false },
      { name: "Express", core: false },
      { name: "APIs REST", core: false },
      { name: "JWT", core: false },
      { name: "Zod", core: false },
    ],
  },
  {
    area: "Frontend",
    items: [
      { name: "React", core: true },
      { name: "Tailwind CSS", core: false },
      { name: "HTML", core: false },
      { name: "CSS", core: false },
      { name: "Angular", core: false },
    ],
  },
  {
    area: "Datos",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "MySQL", core: false },
      { name: "SQL Server", core: false },
      { name: "Streamlit", core: false },
      { name: "Power BI", core: false },
    ],
  },
  {
    area: "Cloud y herramientas",
    items: [
      { name: "AWS", core: false },
      { name: "Azure", core: false },
      { name: "Git y GitHub", core: false },
    ],
  },
];

export interface EducationItem {
  title: string;
  detail: string;
  /** Optional public certificate link. `PENDIENTE` until Jasser provides it. */
  url?: string;
}

/**
 * Formation block placed under the Stack section.
 * The EF SET certificate link is pending and optional, so it is omitted.
 */
export const education: EducationItem[] = [
  {
    title: "Ingeniería de Sistemas — Universidad de la Costa (CUC)",
    detail: "2022–2026. Plan de estudios culminado, grado en trámite.",
  },
  {
    title: "Diplomado en Tecnologías de Software para la Industria 4.0 — Universidad de la Costa (CUC)",
    detail: "Agosto a octubre de 2026.",
  },
  {
    title: "EF SET Inglés: C1 Advanced",
    detail: "Febrero de 2026.",
  },
];

const areasEn: Record<string, string> = {
  Lenguajes: "Languages",
  Backend: "Backend",
  Frontend: "Frontend",
  Datos: "Data",
  "Cloud y herramientas": "Cloud and tools",
};

export const getSkillGroups = (lang: Lang): SkillGroup[] =>
  lang === "es"
    ? skillGroups
    : skillGroups.map((group) => ({ ...group, area: areasEn[group.area] ?? group.area }));

const educationEn: EducationItem[] = [
  {
    title: "Systems Engineering — Universidad de la Costa (CUC)",
    detail: "2022–2026. Curriculum completed, graduation in progress.",
  },
  {
    title: "Diploma in Software Technologies for Industry 4.0 — Universidad de la Costa (CUC)",
    detail: "August to October 2026.",
  },
  {
    title: "EF SET English: C1 Advanced",
    detail: "February 2026.",
  },
];

export const getEducation = (lang: Lang): EducationItem[] =>
  lang === "es" ? education : educationEn;
