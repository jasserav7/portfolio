/**
 * Active section highlight — docs/02-DISENO.md (Navegación) and fase 5.
 * Marks the header link that matches the section currently most visible in
 * the viewport with `aria-current="true"`. The underline itself is CSS.
 *
 * Only the home page has these sections; on any other page no link matches and
 * nothing is marked, which is correct.
 */

const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));

const sectionId = (link: HTMLAnchorElement): string => {
  const href = link.getAttribute("href") ?? "";
  const hash = href.indexOf("#");
  return hash === -1 ? "" : href.slice(hash + 1);
};

const pairs = links
  .map((link) => ({ link, section: document.getElementById(sectionId(link)) }))
  .filter((pair): pair is { link: HTMLAnchorElement; section: HTMLElement } => pair.section !== null);

if (pairs.length > 0 && "IntersectionObserver" in window) {
  const ratios = new Map<string, number>();

  const setActive = (id: string): void => {
    for (const { link, section } of pairs) {
      if (section.id === id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        ratios.set(entry.target.id, entry.intersectionRatio);
      }

      let activeId = "";
      let activeRatio = -1;

      for (const { section } of pairs) {
        const ratio = ratios.get(section.id) ?? 0;
        if (ratio > activeRatio) {
          activeRatio = ratio;
          activeId = section.id;
        }
      }

      setActive(activeId);
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  for (const { section } of pairs) observer.observe(section);
}

export {};
