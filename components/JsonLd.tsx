import { SITE } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: "Mercun Berlesen",
    description:
      "Pengedar mercun & bunga api berlesen rasmi Malaysia — 100% sah di bawah undang-undang PDRM.",
    url: SITE.url,
    telephone: `+${SITE.phone}`,
    email: SITE.email,
    priceRange: "RM",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postcode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: SITE.mapUrl,
    sameAs: [SITE.mapUrl],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Adakah mercun ini berlesen dan sah di Malaysia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. MercunBerlesen membekalkan mercun & bunga api yang 100% sah di bawah undang-undang PDRM (Akta Bahan Letupan 1957), lengkap dengan dokumentasi permit.",
        },
      },
      {
        "@type": "Question",
        name: "Siapa yang boleh membeli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami membekalkan untuk semua perayaan besar — Tahun Baru Cina, Hari Raya Aidilfitri, Deepavali, Merdeka & Hari Malaysia, Krismas — serta majlis kahwin, hari jadi, acara korporat, acara kerajaan, dan dealer/reseller di seluruh Malaysia.",
        },
      },
      {
        "@type": "Question",
        name: "Adakah anda membantu dengan permit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Kami sediakan surat sokongan dan panduan lengkap untuk permohonan permit PDRM.",
        },
      },
    ],
  };

  return (
    <>
      {[data, faq].map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
