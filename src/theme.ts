export type Theme = "light" | "dark";
const KEY = "abauto_theme";

export function getTheme(): Theme {
  try {
    const s = localStorage.getItem(KEY);
    if (s === "light" || s === "dark") return s;
  } catch {
    /* storage unavailable */
  }
  try {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  } catch {
    /* matchMedia unavailable */
  }
  return "light";
}

/** Stamp the current theme on <html> — call once on load (no persistence). */
export function initTheme() {
  document.documentElement.setAttribute("data-theme", getTheme());
}

/** Apply + persist a user choice. */
export function setTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
  try {
    localStorage.setItem(KEY, t);
  } catch {
    /* ignore */
  }
}
