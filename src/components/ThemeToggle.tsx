import { useState } from "react";
import { setTheme, type Theme } from "../theme";
import { IconSun, IconMoon } from "./icons";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(
    () => (document.documentElement.getAttribute("data-theme") as Theme) || "light",
  );

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  };

  return (
    <button
      className="lang-btn theme-btn"
      onClick={toggle}
      aria-label={theme === "dark" ? "Mode clair" : "Mode sombre"}
      title={theme === "dark" ? "Mode clair" : "Mode sombre"}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
}
