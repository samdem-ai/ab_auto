import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

interface Step {
  t: string;
  d: string;
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("how.steps", { returnObjects: true }) as unknown as Step[];

  return (
    <section className="section band-dark" id="how">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="kicker on-dark">{t("how.title")}</span>
              <h2 className="h-lg" style={{ color: "#fff" }}>
                {t("how.subtitle")}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 90} className="step">
              <div className="step-n">{String(i + 1).padStart(2, "0")}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
