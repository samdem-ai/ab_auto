import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { CARS, priceRange } from "../data/cars";
import { IconArrow } from "./icons";

const FEATURED = CARS.find((c) => c.id === "golf8") ?? CARS[0];

function highlight(full: string, word: string) {
  if (!word || !full.includes(word)) return full;
  const parts = full.split(word);
  return parts.map((p, i) => (
    <Fragment key={i}>
      {p}
      {i < parts.length - 1 && <span className="red">{word}</span>}
    </Fragment>
  ));
}

export default function Hero() {
  const { t } = useTranslation();
  const airport = t("hero.airport");
  const title = t("hero.title", { airport });

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="kicker on-dark">{t("hero.eyebrow")}</span>
          <h1 className="h-xl">{highlight(title, airport)}</h1>
          <div className="hero-cta">
            <a href="#reserver" className="btn btn-red btn-lg">
              {t("hero.ctaBook")}
              <IconArrow />
            </a>
            <a href="#fleet" className="arrow-link on-dark">
              {t("hero.ctaFleet")}
              <IconArrow />
            </a>
          </div>
          <p className="lead" style={{ marginTop: 32 }}>
            {t("hero.subtitle")}
          </p>
          <div className="hero-meta" style={{ marginTop: 22 }}>
            <span>
              {CARS.length} {t("hero.statCars")}
            </span>
            <span className="dot" />
            <span>{t("hero.statPickup")}</span>
            <span className="dot" />
            <span>
              {t("hero.statFrom")} {priceRange.min.toLocaleString("fr-DZ")} DZD
            </span>
          </div>
        </div>

        <div className="hero-stage">
          <img src="/assets/brand/hero-car.png" alt={FEATURED.name} loading="eager" />
          <div className="hero-caption">
            <span>{FEATURED.name}</span>
            <b>
              {FEATURED.price.toLocaleString("fr-DZ")} <small>DZD/j</small>
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}
