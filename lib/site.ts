export const SITE = {
  name: "MercunBerlesen",
  domain: "mercunberlesen.com",
  url: "https://mercunberlesen.com",
  legalName: "GRK Pyrotechnics",
  tagline: "Pengedar Mercun & Bunga Api Berlesen Rasmi Malaysia",
  phoneDisplay: "+60 13-734 0415",
  phone: "60137340415",
  whatsapp: "https://wa.me/60137340415",
  email: "info@grkfireworks.com",
  address: {
    street: "10, Jalan Pelepas 4/2, Taman Perindustrian Gelang Patah",
    postcode: "81550",
    city: "Johor Bahru",
    region: "Johor",
    country: "MY",
  },
  mapUrl: "https://share.google/ZFhCyEqHfRt5nmxmM",
  ssm: "202101027988 (1428288-H)",
};

export function waLink(text?: string) {
  return text ? `${SITE.whatsapp}?text=${encodeURIComponent(text)}` : SITE.whatsapp;
}
