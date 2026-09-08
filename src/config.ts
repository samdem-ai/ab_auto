// Central place for all business info — edit here, it updates everywhere.

export const BRAND = {
  name: "AB Auto",
  tagline: "Location Voiture",
  // Phones as displayed
  phones: ["0551 789 895", "0551 795 165"],
  // Primary WhatsApp number in international format (Algeria +213, no leading 0)
  whatsapp: "213551789895",
  socials: {
    instagram: "https://www.instagram.com/location_ab_auto",
    tiktok: "https://www.tiktok.com/@location_ab_auto",
    facebook: "https://www.facebook.com/location.ab.auto",
  },
  // Google Maps embed for the airport (no API key required)
  mapEmbed:
    "https://www.google.com/maps?q=Aéroport+Houari+Boumediene+Alger&hl=fr&z=13&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=A%C3%A9roport+Houari+Boumediene+Alger",
  currency: "DZD",
};

// tel: link helper (strip spaces)
export const telHref = (phone: string) => "tel:+213" + phone.replace(/\D/g, "").replace(/^0/, "");
