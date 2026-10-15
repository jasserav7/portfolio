const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const panel = document.querySelector<HTMLElement>("[data-menu-panel]");

if (toggle && panel) {
  const desktop = window.matchMedia("(min-width: 48rem)");

  const links = (): HTMLElement[] =>
    Array.from(panel.querySelectorAll<HTMLElement>("a[href]"));

  const isOpen = (): boolean => toggle.getAttribute("aria-expanded") === "true";

  const openMenu = (): void => {
    panel.classList.remove("hidden");
    toggle.setAttribute("aria-expanded", "true");
    links()[0]?.focus();
  };

  const closeMenu = ({ restoreFocus = false }: { restoreFocus?: boolean } = {}): void => {
    panel.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    if (isOpen()) {
      closeMenu({ restoreFocus: true });
    } else {
      openMenu();
    }
  });

  /* Closing after choosing a section keeps the focus order predictable. */
  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      closeMenu({ restoreFocus: true });
      return;
    }

    if (event.key !== "Tab") return;

    /* Focus trap: the toggle and the panel links form a closed loop. */
    const focusable = [toggle, ...links()];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  /* On desktop the panel is always visible, so the state returns to closed. */
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}
