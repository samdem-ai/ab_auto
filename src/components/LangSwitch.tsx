import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGS, applyLang, type Lang } from "../i18n";
import { IconGlobe, IconCheck } from "./icons";

export default function LangSwitch() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = i18n.language as Lang;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const pick = (l: Lang) => {
    i18n.changeLanguage(l);
    applyLang(l);
    setOpen(false);
  };

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <IconGlobe />
        {current.toUpperCase()}
      </button>
      {open && (
        <div className="lang-menu" role="menu">
          {LANGS.map((l) => (
            <button
              key={l}
              className={l === current ? "active" : ""}
              onClick={() => pick(l)}
              role="menuitem"
            >
              {t(`lang.${l}`)}
              {l === current && <IconCheck />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
