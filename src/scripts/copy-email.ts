/**
 * Copy email button.
 * Progressive enhancement: the button starts hidden and is revealed only when
 * this script runs, so it never shows as a dead control without JavaScript.
 * The result is announced through an aria-live region.
 */

const button = document.querySelector<HTMLButtonElement>("[data-copy-button]");
const copyStatus = document.querySelector<HTMLElement>("[data-copy-status]");

if (button) {
  const email = button.dataset.copyEmail ?? "";
  const label = button.querySelector<HTMLElement>("[data-copy-label]");
  const defaultLabel = label?.textContent ?? "";
  const copiedLabel = button.dataset.copiedLabel ?? "";
  const copiedStatus = button.dataset.copiedStatus ?? "";
  const errorStatus = button.dataset.errorStatus ?? "";

  button.style.display = "";
  button.removeAttribute("hidden");

  const reset = () => {
    if (label) label.textContent = defaultLabel;
    if (copyStatus) copyStatus.textContent = "";
  };

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      if (label) label.textContent = copiedLabel;
      if (copyStatus) copyStatus.textContent = copiedStatus;
      window.setTimeout(reset, 2000);
    } catch {
      if (copyStatus) copyStatus.textContent = errorStatus;
    }
  });
}
