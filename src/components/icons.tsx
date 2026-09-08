import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconSeat = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 11V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
    <path d="M3 11h14a2 2 0 0 1 2 2v3H5a2 2 0 0 1-2-2v-3Z" />
    <path d="M6 16v3M18 16v3" />
  </svg>
);

export const IconGear = (p: P) => (
  <svg {...base(p)}>
    <circle cx="7" cy="6" r="2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="6" r="2" />
    <path d="M7 8v8M17 8v4M7 12h10" />
  </svg>
);

export const IconFuel = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
    <path d="M3 20h12" />
    <path d="M8 9h4" />
    <path d="M14 8l3 3v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-8l-3-3" />
  </svg>
);

export const IconSnow = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v18M3 12h18" />
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconDoor = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 3H7a2 2 0 0 0-2 2v16h9V3Z" />
    <path d="M14 3l5 2v16h-5" />
    <path d="M11 12h.01" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.12-1.13l-.29-.17-3.05.8.81-2.97-.19-.31a8.02 8.02 0 0 1-1.23-4.31c0-4.46 3.63-8.09 8.09-8.09Zm4.68 11.42c-.08-.13-.29-.21-.61-.37-.32-.16-1.9-.94-2.19-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53Z" />
  </svg>
);

export const IconMapPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconPlane = (p: P) => (
  <svg {...base(p)}>
    <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l5.2 3.3-1.9 3.6-2.4-.6a1 1 0 0 0-1 1.6l2.6 2.2 2.2 2.6a1 1 0 0 0 1.6-1l-.6-2.4 3.6-1.9 3.3 5.2a1 1 0 0 0 1.7-.9Z" />
  </svg>
);

export const IconRoad = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20 8 4M20 20 16 4" />
    <path d="M12 5v2M12 11v2M12 17v2" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconDoc = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base(p)} width={16} height={16}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)} width={16} height={16}>
    <path d="m20 6-11 11-5-5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = (p: P) => (
  <svg {...base(p)} fill="currentColor" strokeWidth={0}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);

export const IconTikTok = (p: P) => (
  <svg {...base(p)} fill="currentColor" strokeWidth={0}>
    <path d="M16.5 3c.3 2 1.5 3.6 3.5 4v2.5c-1.3 0-2.5-.4-3.5-1v6.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.6a3.1 3.1 0 1 0 2.2 3V3h2.6Z" />
  </svg>
);
