/**
 * Case study content (10-part structure).
 * Everything here comes from the Turnos README on GitHub (read from the repo,
 * not invented). Jasser approved this draft on 2026-10-15, so `approved` is
 * true. While it was false, the page showed a dev-only draft notice; that
 * notice is gated by `approved` and never appears in production.
 */
import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";
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
  /** Must match a Project.slug. */
  slug: string;
  /** True once the draft is approved; drafts show a notice only in development. */
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
    approved: true,
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

/** English wording; slug, approval, tech stack and images are shared with the Spanish entry. */
type CaseStudyText = Omit<CaseStudy, "slug" | "approved" | "techStack" | "screenshots"> & {
  screenshots: { alt: string; caption: string }[];
};

const caseStudiesEn: Record<string, CaseStudyText> = {
  "turnos-booking-platform": {
    summary: "Multi-role web application where clients book appointments with professionals.",
    problem:
      "Coordinating appointments between clients and professionals without schedule clashes: availability rules, confirmation, reminders and different permissions for each type of user.",
    solution: [
      "Appointment booking based on the professional's weekly availability and date blocks.",
      "Booking rescheduling and calendar export in .ics format.",
      "Booking status flow (pending, confirmed, completed and cancelled) with transactional emails and reminders.",
      "Admin panel with metrics and downloadable reports in CSV, Excel and PDF.",
      "Light and dark theme, with responsive design.",
    ],
    roles: [
      {
        name: "Client",
        abilities:
          "Registers and verifies their email, picks a free time slot and books; can see their bookings, reschedule them, add them to their calendar and cancel them in advance.",
      },
      {
        name: "Professional",
        abilities:
          "Manages their weekly availability and blocks, sees their agenda by day or week and confirms, cancels or completes the bookings that belong to them.",
      },
      {
        name: "Admin",
        abilities:
          "Manages services and users, assigns services to professionals, sees all bookings and their metrics, and downloads reports by date range.",
      },
    ],
    architecture: [
      { node: "Browser", detail: "The client, the professional or the admin." },
      { node: "Web", detail: "Vite and React, served as a static frontend." },
      { node: "API", detail: "FastAPI, with JWT authentication and a refresh cookie." },
      { node: "Database", detail: "PostgreSQL 16, with SQLAlchemy and Alembic." },
      { node: "Email", detail: "SMTP service for the transactional emails." },
    ],
    decisions: [
      {
        title: "Double-booking prevention in the database",
        rationale:
          "A PostgreSQL exclusion constraint prevents overlapping pending or confirmed bookings for the same professional, even with simultaneous requests; the violation is translated into a time-slot-unavailable response.",
      },
      {
        title: "Refresh tokens with rotation and reuse detection",
        rationale:
          "The refresh token lives in an httpOnly cookie and is rotated on every use; if a revoked one is reused, its whole family is revoked. The access token only exists in the frontend's memory.",
      },
      {
        title: "Slot generation as a pure function",
        rationale:
          "The calculation of free slots starts from rules, blocks and bookings without touching the database, which makes it easy to test.",
      },
      {
        title: "Emails outside the transaction",
        rationale:
          "Notifications are sent after the booking is committed: an email failure never rolls back a booking.",
      },
      {
        title: "Two-layer authorization",
        rationale:
          "The role is enforced in the routers and ownership of the resource is checked in the services.",
      },
    ],
    challenges: [
      {
        title: "Avoiding double bookings",
        detail:
          "Solved with an exclusion constraint in PostgreSQL, so the database itself guarantees there are no overlaps even when two requests arrive at the same time.",
      },
      {
        title: "Rescheduling without breaking that rule",
        detail:
          "The current slot is released inside the same transaction to allow shifts that overlap with the booking itself; if the new slot is not valid, nothing is saved.",
      },
      {
        title: "Security audit",
        detail:
          "Findings were fixed such as slot hoarding with unlimited pending bookings and the possibility of booking without verifying the email; each fix is covered by regression tests.",
      },
    ],
    nextSteps: [
      "Payment gateway and deposits when booking.",
      "Reminders by SMS or WhatsApp.",
      "Two-way synchronization with Google Calendar.",
      "Internationalization and per-user time zone.",
    ],
    screenshots: [
      {
        alt: "Booking wizard in three steps: service, professional, and day and time.",
        caption: "Booking an appointment in three steps.",
      },
      {
        alt: "Professional's agenda with day and week views.",
        caption: "Professional's agenda.",
      },
      {
        alt: "Admin statistics panel with bookings per day and most booked services.",
        caption: "Admin panel.",
      },
      {
        alt: "Client's list of bookings with their statuses and actions.",
        caption: "My bookings.",
      },
    ],
  },
};

export const getCaseStudies = (lang: Lang): CaseStudy[] =>
  lang === "es"
    ? caseStudies
    : caseStudies.map((study) => {
        const text = caseStudiesEn[study.slug];
        if (!text) return study;
        return {
          ...study,
          ...text,
          screenshots: study.screenshots.map((shot, index) => ({
            image: shot.image,
            ...text.screenshots[index],
          })),
        };
      });
