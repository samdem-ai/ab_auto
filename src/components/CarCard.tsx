import { useTranslation } from "react-i18next";
import type { Car } from "../data/cars";
import { IconArrow } from "./icons";

interface Props {
  car: Car;
  onBook: (id: string) => void;
}

export default function CarCard({ car, onBook }: Props) {
  const { t } = useTranslation();

  const specs = [
    t("fleet.spec.seats", { count: car.seats }),
    t(`fleet.spec.${car.transmission}`),
    t(`fleet.spec.${car.fuel}`),
    car.ac ? t("fleet.spec.ac") : null,
  ].filter(Boolean) as string[];

  return (
    <article className="car">
      <div className="car-media">
        <img src={car.image} alt={car.name} loading="lazy" />
        <span className="car-tier">{t(`fleet.tier.${car.tier}`)}</span>
      </div>

      <div className="car-head">
        <h3 className="car-name">{car.name}</h3>
        {car.year && <span className="car-year">{car.year}</span>}
      </div>

      <div className="car-specs">
        {specs.map((s, i) => (
          <span key={i}>
            {i > 0 && <span className="sep">/&nbsp;</span>}
            {s}
          </span>
        ))}
      </div>

      <div className="car-foot">
        <div className="car-price">
          <b>{car.price.toLocaleString("fr-DZ")}</b>{" "}
          <span>DZD {t("fleet.perDay")}</span>
        </div>
        <button className="car-book" onClick={() => onBook(car.id)}>
          {t("fleet.book")}
          <IconArrow width={16} height={16} />
        </button>
      </div>
    </article>
  );
}
