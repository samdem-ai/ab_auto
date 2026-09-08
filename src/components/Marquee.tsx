import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export default function Marquee() {
  const { t } = useTranslation();
  const items = [
    t("hero.statPickup"),
    "AB Auto",
    t("why.items.1.t"),
    t("contact.address"),
    t("why.items.2.t"),
    "Alger · ALG",
  ];
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <Fragment key={i}>
            <span>{it}</span>
            <i>◆</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
