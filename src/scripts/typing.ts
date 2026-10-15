/**
 * Typing effect for the hero headline — docs/02-DISENO.md (Movimiento).
 * The first phrase is rendered by the server, so the line stays readable
 * without JavaScript and when the user prefers reduced motion.
 */

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const HOLD_DELAY = 1800;
const SWITCH_DELAY = 400;

const target = document.querySelector<HTMLElement>("[data-typing]");
const cursor = document.querySelector<HTMLElement>("[data-typing-cursor]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (target && cursor && !reduceMotion.matches) {
  const phrases: string[] = JSON.parse(target.dataset.phrases ?? "[]");

  if (phrases.length > 1) {
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let deleting = true;

    const tick = (): void => {
      const current = phrases[phraseIndex];

      if (deleting) {
        charIndex -= 1;
        target.textContent = current.slice(0, charIndex);

        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          window.setTimeout(tick, SWITCH_DELAY);
          return;
        }

        window.setTimeout(tick, DELETE_SPEED);
        return;
      }

      charIndex += 1;
      target.textContent = current.slice(0, charIndex);

      if (charIndex >= current.length) {
        deleting = true;
        window.setTimeout(tick, HOLD_DELAY);
        return;
      }

      window.setTimeout(tick, TYPE_SPEED);
    };

    cursor.hidden = false;
    window.setTimeout(tick, HOLD_DELAY);
  }
}

export {};
