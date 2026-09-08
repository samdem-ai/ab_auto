import { useTranslation } from "react-i18next";
import { BRAND, telHref } from "../config";
import Reveal from "./Reveal";
import { IconWhatsApp, IconInstagram, IconTikTok, IconFacebook } from "./icons";

export default function Contact() {
  const { t } = useTranslation();
  const waLink = `https://wa.me/${BRAND.whatsapp}`;

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="kicker">{t("contact.title")}</span>
              <h2 className="h-lg">{t("contact.subtitle")}</h2>
            </div>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-list">
              {BRAND.phones.map((p) => (
                <div className="contact-row" key={p}>
                  <span className="lbl">{t("contact.call")}</span>
                  <a className="val" href={telHref(p)}>
                    {p}
                  </a>
                </div>
              ))}
              <div className="contact-row">
                <span className="lbl">{t("contact.address")}</span>
                <span className="val">Alger · ALG</span>
              </div>
              <div className="contact-row">
                <span className="lbl">{t("contact.hours")}</span>
                <span className="val">7 / 7</span>
              </div>
              <div className="contact-row">
                <span className="lbl">{t("contact.follow")}</span>
                <div className="socials">
                  <a className="social" href={BRAND.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <IconInstagram />
                  </a>
                  <a className="social" href={BRAND.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <IconTikTok />
                  </a>
                  <a className="social" href={BRAND.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <IconFacebook />
                  </a>
                </div>
              </div>

              <div className="contact-cta">
                <a className="btn btn-wa" href={waLink} target="_blank" rel="noopener noreferrer">
                  <IconWhatsApp width={19} height={19} />
                  {t("contact.whatsapp")}
                </a>
                <a className="btn btn-line" href={BRAND.mapLink} target="_blank" rel="noopener noreferrer">
                  {t("contact.mapCta")}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="map-card">
              <iframe
                title="AB Auto — Aéroport Houari Boumediene"
                src={BRAND.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
