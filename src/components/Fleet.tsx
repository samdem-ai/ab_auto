import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CARS, TIERS, type Tier } from "../data/cars";
import CarCard from "./CarCard";
import Reveal from "./Reveal";

interface Props {
  onBook: (id: string) => void;
}

type Filter = Tier | "all";

export default function Fleet({ onBook }: Props) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const cars = useMemo(
    () => (filter === "all" ? CARS : CARS.filter((c) => c.tier === filter)),
    [filter],
  );

  const filters: Filter[] = ["all", ...TIERS];
  const countFor = (f: Filter) =>
    f === "all" ? CARS.length : CARS.filter((c) => c.tier === f).length;

  return (
    <section className="section" id="fleet">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="kicker">{t("fleet.title")}</span>
              <h2 className="h-lg">{t("fleet.subtitle")}</h2>
            </div>
          </div>
        </Reveal>

        <div className="tabs" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              className={`tab ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >
              {f === "all" ? t("fleet.all") : t(`fleet.tier.${f}`)}
              <span className="n">{countFor(f)}</span>
            </button>
          ))}
        </div>

        <div className="fleet-grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}
