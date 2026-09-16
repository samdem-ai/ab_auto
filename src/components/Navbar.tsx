import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BRAND, telHref } from "../config";
import { IconMenu, IconClose } from "./icons";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { id: "fleet", href: "#fleet" },
  { id: "how", href: "#how" },
  { id: "why", href: "#why" },
  { id: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="#top" aria-label={BRAND.name}>
          <img className="brand-light" src="/assets/brand/wordmark-light.png" alt={`${BRAND.name} — ${BRAND.tagline}`} />
          <img className="brand-dark" src="/assets/brand/wordmark-dark.png" alt={`${BRAND.name} — ${BRAND.tagline}`} />
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.id} href={l.href} onClick={() => setOpen(false)}>
              {t(`nav.${l.id}`)}
            </a>
          ))}
          <a href="#reserver" className="nav-book" onClick={() => setOpen(false)}>
            {t("nav.book")}
          </a>
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={telHref(BRAND.phones[0])}>
            {BRAND.phones[0]}
          </a>
          <ThemeToggle />
          <LangSwitch />
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
