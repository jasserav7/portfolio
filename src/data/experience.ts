/**
 * Work experience content.
 * The text lives here, never inside the components.
 */

import type { Lang } from "../i18n";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  stack: string[];
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Practicante universitario (Desarrollo de software)",
    company: "Banco Serfinanza S.A.",
    period: "Abril – octubre de 2026",
    stack: ["Python", "JavaScript", "SQL Server"],
    bullets: [
      "Contribuí a UbiGo, un aplicativo web de inventario y trazabilidad de tarjetas en agencias a nivel nacional (frontend, lógica de programación y SQL Server), lanzado a producción el 7 de septiembre de 2026.",
      "Automaticé procesos con scripts en Python, como la depuración y transformación de matrices de proveedores.",
    ],
  },
];

const experienceEn: ExperienceItem[] = [
  {
    role: "University Intern (Software Development)",
    company: "Banco Serfinanza S.A.",
    period: "April – October 2026",
    stack: ["Python", "JavaScript", "SQL Server"],
    bullets: [
      "Contributed to UbiGo, a web application for card inventory and traceability across nationwide branches (frontend, programming logic and SQL Server), launched to production on September 7, 2026.",
      "Automated processes with Python scripts, such as cleaning and transforming supplier matrices.",
    ],
  },
];

export const getExperience = (lang: Lang): ExperienceItem[] =>
  lang === "es" ? experience : experienceEn;
