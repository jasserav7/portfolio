/**
 * Case study content — docs/04-PROYECTOS.md (estructura de 10 partes).
 * Everything here comes from the Turnos README on GitHub (read from the repo,
 * not invented). It is a proposal for Jasser's approval, so `approved` stays
 * false until he confirms it; the page shows a dev-only draft note until then.
 *
 * `approved: false` never hides content in production — the 10 parts are always
 * published. It only controls the development notice.
 */
import type { ImageMetadata } from "astro";
import bookingFlow from "../assets/projects/turnos-booking-flow.png";
import providerAgenda from "../assets/projects/turnos-provider-agenda.png";
import adminDashboard from "../assets/projects/turnos-admin-dashboard.png";
import myBookings from "../assets/projects/turnos-my-bookings.png";

export interface CaseStudyScreenshot {
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  /** Must match a Project.slug (docs/04). */
  slug: string;
  /** Proposal pending Jasser's approval (docs/04, "Caso de estudio"). */
  approved: boolean;
  summary: string;
  /** Stack as described in the README (more detail than the card chips). */
  techStack: string[];
  problem: string;
  /** 3 to 5 main features. */
  solution: string[];
  roles: { name: string; abilities: string }[];
  /** Simple architecture pipeline: frontend, API, database, mail service. */
  architecture: { node: string; detail: string }[];
  decisions: { title: string; rationale: string }[];
  challenges: { title: string; detail: string }[];
  nextSteps: string[];
  /** Maximum 4 screenshots, each with a caption. */
  screenshots: CaseStudyScreenshot[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "turnos-booking-platform",
    approved: false,
    summary:
      "Aplicación web multi-rol donde los clientes reservan citas con profesionales.",
    techStack: [
      "Python 3.12",
      "FastAPI",
      "SQLAlchemy 2.0",
      "Alembic",
      "Pydantic v2",
      "PostgreSQL 16",
      "PyJWT",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Docker Compose",
    ],
    problem:
      "Coordinar citas entre clientes y profesionales sin cruzar horarios: reglas de disponibilidad, confirmación, recordatorios y permisos distintos para cada tipo de usuario.",
    solution: [
      "Reserva de citas a partir de la disponibilidad semanal del profesional y sus bloqueos por fechas.",
      "Reprogramación de reservas y exportación a calendario en formato .ics.",
      "Flujo de estados de la reserva (pendiente, confirmada, completada y cancelada) con correos transaccionales y recordatorios.",
      "Panel de administración con métricas y reportes descargables en CSV, Excel y PDF.",
      "Tema claro y oscuro, con diseño responsive.",
    ],
    roles: [
      {
        name: "Cliente",
        abilities:
          "Se registra y verifica su correo, elige un horario libre y reserva; puede ver sus reservas, reprogramarlas, añadirlas a su calendario y cancelarlas con antelación.",
      },
      {
        name: "Profesional",
        abilities:
          "Gestiona su disponibilidad semanal y sus bloqueos, ve su agenda por día o semana y confirma, cancela o completa las reservas que le corresponden.",
      },
      {
        name: "Admin",
        abilities:
          "Administra servicios y usuarios, asigna servicios a los profesionales, ve todas las reservas y sus métricas, y descarga reportes por rango de fechas.",
      },
    ],
    architecture: [
      { node: "Navegador", detail: "El cliente, el profesional o el admin." },
      { node: "Web", detail: "Vite y React, servida como frontend estático." },
      { node: "API", detail: "FastAPI, con autenticación por JWT y cookie de refresco." },
      { node: "Base de datos", detail: "PostgreSQL 16, con SQLAlchemy y Alembic." },
      { node: "Correo", detail: "Servicio SMTP para los correos transaccionales." },
    ],
    decisions: [
      {
        title: "Anti doble reserva en la base de datos",
        rationale:
          "Un constraint de exclusión de PostgreSQL impide solapar reservas pendientes o confirmadas del mismo profesional, incluso con peticiones simultáneas; la violación se traduce a una respuesta de horario no disponible.",
      },
      {
        title: "Refresh tokens con rotación y detección de reutilización",
        rationale:
          "El token de refresco vive en una cookie httpOnly y se rota en cada uso; si se reutiliza uno revocado, se revoca toda su familia. El token de acceso solo existe en memoria del frontend.",
      },
      {
        title: "Generación de horarios como función pura",
        rationale:
          "El cálculo de los espacios libres parte de reglas, bloqueos y reservas sin tocar la base de datos, lo que lo hace fácil de probar.",
      },
      {
        title: "Correos fuera de la transacción",
        rationale:
          "Las notificaciones se envían después de confirmar la reserva: un fallo de correo nunca revierte una reserva.",
      },
      {
        title: "Autorización en dos capas",
        rationale:
          "El rol se exige en los routers y la propiedad del recurso se comprueba en los servicios.",
      },
    ],
    challenges: [
      {
        title: "Evitar dobles reservas",
        detail:
          "Se resolvió con un constraint de exclusión en PostgreSQL, de modo que la propia base de datos garantiza que no haya solapes aunque lleguen dos peticiones a la vez.",
      },
      {
        title: "Reprogramar sin romper esa regla",
        detail:
          "El horario actual se libera dentro de la misma transacción para permitir corrimientos que se solapan con la propia reserva; si el nuevo horario no es válido, no se guarda nada.",
      },
      {
        title: "Auditoría de seguridad",
        detail:
          "Se corrigieron hallazgos como el acaparamiento de horarios con reservas pendientes ilimitadas y la posibilidad de reservar sin verificar el correo; cada corrección quedó cubierta por pruebas de regresión.",
      },
    ],
    nextSteps: [
      "Pasarela de pagos y depósitos al reservar.",
      "Recordatorios por SMS o WhatsApp.",
      "Sincronización bidireccional con Google Calendar.",
      "Internacionalización y zona horaria por usuario.",
    ],
    screenshots: [
      {
        image: bookingFlow,
        alt: "Asistente de reserva en tres pasos: servicio, profesional y día y hora.",
        caption: "Reservar una cita en tres pasos.",
      },
      {
        image: providerAgenda,
        alt: "Agenda del profesional con vistas por día y semana.",
        caption: "Agenda del profesional.",
      },
      {
        image: adminDashboard,
        alt: "Panel de estadísticas del administrador con reservas por día y servicios más reservados.",
        caption: "Panel de administración.",
      },
      {
        image: myBookings,
        alt: "Lista de reservas del cliente con sus estados y acciones.",
        caption: "Mis reservas.",
      },
    ],
  },
];
