import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

interface Item {
  t: string;
  d: string;
}

export default function WhyUs() {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true }) as unknown as Item[];

  return (
    <section className="section" id="why">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="kicker">{t("why.title")}</span>
              <h2 className="h-lg">{t("why.subtitle")}</h2>
            </div>
          </div>
        </Reveal>

        <div className="why-list">
          {items.map((item, i) => (
            <div className="why-item" key={i}>
              <div className="why-n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
