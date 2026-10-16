/**
 * Scroll reveal — docs/02-DISENO.md (Movimiento) and docs/07 fase 5.
 * Reveals each `[data-reveal]` element once, when it enters the viewport.
 *
 * The hidden state lives behind the `reveal-enabled` class, which the inline
 * script in Layout.astro adds to <html> before the first paint only when the
 * user has not asked for reduced motion. Without JavaScript, or with reduced
 * motion, the class is absent and the content is simply visible.
 */

const root = document.documentElement;

if (root.classList.contains("reveal-enabled")) {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

  const revealAll = (): void => {
    for (const element of elements) element.classList.add("is-revealed");
  };

  if (!("IntersectionObserver" in window)) {
    revealAll();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    for (const element of elements) observer.observe(element);
  }
}

export {};
