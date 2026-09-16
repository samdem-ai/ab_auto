import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconCalendar, IconChevronLeft, IconChevronRight } from "./icons";

interface Props {
  id?: string;
  value: string; // dd/mm/yyyy
  onChange: (v: string) => void;
  min?: Date;
  placeholder?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");
const toStr = (d: Date) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
const parse = (s: string): Date | null => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s);
  if (!m) return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  return isNaN(d.getTime()) ? null : d;
};
const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export default function DatePicker({ id, value, onChange, min, placeholder }: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = parse(value);
  const [view, setView] = useState<Date>(() => selected ?? min ?? new Date());

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const monthLabel = useMemo(
    () => new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" }).format(view),
    [lang, view],
  );

  // weekday short names, week starting Monday
  const dows = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(lang, { weekday: "short" });
    // 2024-01-01 is a Monday
    return Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 1 + i)).replace(".", ""));
  }, [lang]);

  const cells = useMemo(() => {
    const y = view.getFullYear();
    const m = view.getMonth();
    const first = new Date(y, m, 1);
    const startPad = (first.getDay() + 6) % 7; // Mon=0
    const days = new Date(y, m + 1, 0).getDate();
    const out: (Date | null)[] = [];
    for (let i = 0; i < startPad; i++) out.push(null);
    for (let d = 1; d <= days; d++) out.push(new Date(y, m, d));
    return out;
  }, [view]);

  const minDay = min ? startOfDay(min) : null;
  const isDisabled = (d: Date) => (minDay ? startOfDay(d) < minDay : false);

  const pick = (d: Date) => {
    if (isDisabled(d)) return;
    onChange(toStr(d));
    setOpen(false);
  };

  return (
    <div className="dp" ref={ref}>
      <button
        type="button"
        id={id}
        className={`dp-trigger ${value ? "" : "empty"}`}
        onClick={() => {
          setView(selected ?? min ?? new Date());
          setOpen((o) => !o);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span>{value || placeholder || "jj/mm/aaaa"}</span>
        <IconCalendar width={18} height={18} />
      </button>

      {open && (
        <div className="dp-pop" role="dialog">
          <div className="dp-head">
            <button type="button" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} aria-label="←">
              <IconChevronLeft />
            </button>
            <span className="dp-month">{monthLabel}</span>
            <button type="button" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} aria-label="→">
              <IconChevronRight />
            </button>
          </div>
          <div className="dp-dows">
            {dows.map((d, i) => (
              <span key={i} className="dp-dow">{d}</span>
            ))}
          </div>
          <div className="dp-grid">
            {cells.map((d, i) =>
              d ? (
                <button
                  type="button"
                  key={i}
                  className={`dp-day ${selected && sameDay(d, selected) ? "sel" : ""}`}
                  disabled={isDisabled(d)}
                  onClick={() => pick(d)}
                >
                  {d.getDate()}
                </button>
              ) : (
                <span key={i} className="dp-empty" />
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
