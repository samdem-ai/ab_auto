import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CARS } from "../data/cars";
import { BRAND } from "../config";
import Reveal from "./Reveal";
import DatePicker from "./DatePicker";
import { IconWhatsApp } from "./icons";

const parseDMY = (s: string): Date | null => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s);
  if (!m) return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  return isNaN(d.getTime()) ? null : d;
};

interface Props {
  selectedCar: string;
  setSelectedCar: (id: string) => void;
}

export default function Booking({ selectedCar, setSelectedCar }: Props) {
  const { t } = useTranslation();
  const [pickup, setPickup] = useState("");
  const [ret, setRet] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState(selectedCar);
  useEffect(() => setCar(selectedCar), [selectedCar]);

  const today = new Date();
  const pickupDate = parseDMY(pickup);

  const buildMessage = () => {
    const c = CARS.find((x) => x.id === car);
    return [
      `*${t("booking.msgTitle")}*`,
      "",
      `${t("booking.msgCar")}: ${c ? c.name + (c.year ? ` (${c.year})` : "") : "-"}`,
      c ? `${t("booking.msgPrice")}: ${c.price.toLocaleString("fr-DZ")} DZD ${t("fleet.perDay")}` : "",
      `${t("booking.msgPickup")}: ${pickup || "-"}`,
      `${t("booking.msgReturn")}: ${ret || "-"}`,
      `${t("booking.msgName")}: ${name || "-"}`,
      `${t("booking.msgPhone")}: ${phone || "-"}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section band-dark" id="reserver">
      <div className="container booking-grid">
        <Reveal className="booking-aside">
          <span className="kicker on-dark">{t("booking.title")}</span>
          <h2 className="h-lg">{t("booking.subtitle")}</h2>
          <p className="lead">{t("booking.note")}</p>
        </Reveal>

        <Reveal>
          <form className="form-grid" onSubmit={submit}>
            <div className="field full">
              <label htmlFor="car">{t("booking.car")}</label>
              <select
                id="car"
                value={car}
                onChange={(e) => {
                  setCar(e.target.value);
                  setSelectedCar(e.target.value);
                }}
              >
                <option value="">{t("booking.choose")}</option>
                {CARS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                    {c.year ? ` ${c.year}` : ""} — {c.price.toLocaleString("fr-DZ")} DZD
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="pickup">{t("booking.pickup")}</label>
              <DatePicker
                id="pickup"
                value={pickup}
                onChange={(v) => {
                  setPickup(v);
                  const nd = parseDMY(v);
                  const rd = parseDMY(ret);
                  if (nd && rd && rd < nd) setRet("");
                }}
                min={today}
                placeholder="jj/mm/aaaa"
              />
            </div>
            <div className="field">
              <label htmlFor="ret">{t("booking.return")}</label>
              <DatePicker
                id="ret"
                value={ret}
                onChange={setRet}
                min={pickupDate ?? today}
                placeholder="jj/mm/aaaa"
              />
            </div>

            <div className="field">
              <label htmlFor="name">{t("booking.name")}</label>
              <input id="name" type="text" placeholder={t("booking.namePlaceholder")} value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="phone">{t("booking.phone")}</label>
              <input id="phone" type="tel" placeholder={t("booking.phonePlaceholder")} value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>

            <div className="field full">
              <button type="submit" className="btn btn-wa btn-lg btn-full">
                <IconWhatsApp width={20} height={20} />
                {t("booking.submit")}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
