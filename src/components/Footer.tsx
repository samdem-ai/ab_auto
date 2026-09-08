import { useTranslation } from "react-i18next";
import { BRAND } from "../config";

const LINKS = [
  { id: "fleet", href: "#fleet" },
  { id: "how", href: "#how" },
  { id: "why", href: "#why" },
  { id: "contact", href: "#contact" },
  { id: "book", href: "#reserver" },
] as const;

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#top" aria-label={BRAND.name}>
            <img src="/assets/brand/wordmark-dark.png" alt={BRAND.name} />
          </a>
          <nav className="footer-nav">
            {LINKS.map((l) => (
              <a key={l.id} href={l.href}>
                {t(`nav.${l.id}`)}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-legal">
          <span>
            © {year} {BRAND.name}. {t("footer.rights")}
          </span>
          <span>{t("footer.tagline")}</span>
          <span>{t("footer.photos")}</span>
        </div>
      </div>
    </footer>
  );
}
