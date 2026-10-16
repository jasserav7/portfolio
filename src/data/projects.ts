/**
 * Project content.
 * The text lives here, never inside the components.
 *
 * `image` is Astro's ImageMetadata (not a string) so the covers go through the
 * Astro image component and get optimized at build time.
 * Only the covers live in src/assets/projects/.
 */
import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";
import turnosBookingFlow from "../assets/projects/turnos-booking-flow.png";
import wwidemarketHero from "../assets/projects/wwidemarket-hero.webp";
import dataflowSwaggerEndpoints from "../assets/projects/dataflow-swagger-endpoints.webp";
import strydeCatalogo from "../assets/projects/stryde-catalogo.webp";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  /** Who did what: individual project or individual technical test. */
  role: string;
  status: "completed" | "in-progress";
  featured: boolean;
  repoUrl: string;
  /** If absent, the "Demo" link is not rendered. */
  demoUrl?: string;
  image: ImageMetadata;
  imageAlt: string;
  caseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "turnos-booking-platform",
    title: "Turnos",
    tagline: "Plataforma de reservas con múltiples roles.",
    description:
      "Aplicación web para gestionar reservas con autenticación JWT, permisos por rol y notificaciones por correo.",
    stack: ["FastAPI", "React", "TypeScript", "JWT"],
    role: "Proyecto individual.",
    status: "completed",
    featured: true,
    repoUrl: "https://github.com/jasserav7/turnos-booking-platform",
    demoUrl: "https://turnos-web-eta.vercel.app/",
    image: turnosBookingFlow,
    imageAlt: "Asistente de reserva de Turnos en tres pasos: servicio, profesional y horario.",
    caseStudy: true,
  },
  {
    slug: "wwidemarket",
    title: "WWIDEMARKET",
    tagline: "Tienda en línea con personalización de producto.",
    description:
      "Tienda con catálogo filtrable, carrito lateral, selector de moneda (COP, USD, EUR y otras) y un estudio de personalización de camisetas con vista previa en vivo.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Proyecto individual.",
    status: "completed",
    featured: false,
    repoUrl: "https://github.com/jasserav7/e-commerce-wwide",
    demoUrl: "https://jasserav7.github.io/e-commerce-wwide/",
    image: wwidemarketHero,
    imageAlt: "Portada de la tienda de práctica WWIDEMARKET en negro y dorado con el titular «Viste Tu Mundo».",
    caseStudy: false,
  },
  {
    slug: "dataflow",
    title: "DataFlow",
    tagline: "Importación y validación de clientes desde CSV.",
    description:
      "API con autenticación que importa archivos CSV de clientes e informa cuántas filas son válidas, inválidas o duplicadas, con el detalle del error por fila.",
    stack: ["FastAPI", "PostgreSQL", "Python"],
    role: "Proyecto individual.",
    status: "completed",
    featured: false,
    repoUrl: "https://github.com/jasserav7/dataflow",
    image: dataflowSwaggerEndpoints,
    imageAlt: "Documentación Swagger de DataFlow con los endpoints de autenticación e importaciones.",
    caseStudy: false,
  },
  {
    slug: "stryde-backend",
    title: "STRYDE Footwear",
    tagline: "Backend de microservicios.",
    description:
      "Backend de microservicios para una tienda de calzado, con inicio de sesión, catálogo, carrito con IVA y pedidos.",
    stack: ["FastAPI", "MySQL", "Python"],
    role: "Prueba técnica individual.",
    status: "completed",
    featured: false,
    repoUrl: "https://github.com/jasserav7/prueba-tecnica-backend",
    image: strydeCatalogo,
    imageAlt:
      "Catálogo de STRYDE con menú lateral, buscador, filtros por categoría y tarjetas de producto con precio base e IVA del 19 %.",
    caseStudy: false,
  },
];

/** English wording for the text fields; everything else is shared. */
const projectsEn: Record<
  string,
  Pick<Project, "tagline" | "description" | "role" | "imageAlt">
> = {
  "turnos-booking-platform": {
    tagline: "Booking platform with multiple roles.",
    description:
      "Web application to manage bookings with JWT authentication, role-based permissions and email notifications.",
    role: "Individual project.",
    imageAlt: "Turnos booking wizard in three steps: service, professional and time slot.",
  },
  wwidemarket: {
    tagline: "Online store with product customization.",
    description:
      "Store with a filterable catalog, side cart, currency selector (COP, USD, EUR and others) and a T-shirt customization studio with live preview.",
    role: "Individual project.",
    imageAlt:
      "Cover of the practice store WWIDEMARKET in black and gold with the headline “Viste Tu Mundo”.",
  },
  dataflow: {
    tagline: "Customer import and validation from CSV.",
    description:
      "API with authentication that imports customer CSV files and reports how many rows are valid, invalid or duplicated, with the error detail for each row.",
    role: "Individual project.",
    imageAlt: "DataFlow Swagger documentation with the authentication and imports endpoints.",
  },
  "stryde-backend": {
    tagline: "Microservices backend.",
    description:
      "Microservices backend for a footwear store, with login, catalog, cart with VAT and orders.",
    role: "Individual technical test.",
    imageAlt:
      "STRYDE catalog with side menu, search box, category filters and product cards showing base price and 19 % VAT.",
  },
};

export const getProjects = (lang: Lang): Project[] =>
  lang === "es"
    ? projects
    : projects.map((project) => ({ ...project, ...projectsEn[project.slug] }));
