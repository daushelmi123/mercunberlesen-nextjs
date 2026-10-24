import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hubungi Kami — MercunBerlesen",
  description:
    "Hubungi MercunBerlesen untuk tempahan borong, pertanyaan produk dan bantuan permit. WhatsApp, telefon atau lawati gudang kami di Johor.",
  alternates: { canonical: `${SITE.url}/hubungi` },
};

export default function HubungiPage() {
  return (
    <>
      <Nav />
      <div className="pt-16 lg:pt-[72px]">
        <section className="bg-charcoal text-white py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold tracking-widest text-gold-grad uppercase">Hubungi</p>
            <h1 className="mt-2 font-display font-extrabold text-3xl lg:text-5xl">Hubungi Kami</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Untuk tempahan borong, pertanyaan produk atau bantuan permit — kami sedia membantu.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg-softer">
          <div className="mx-auto max-w-5xl px-5 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-line p-7 card-shadow">
              <h2 className="font-display font-bold text-xl text-ink mb-5">Maklumat Perhubungan</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-red shrink-0" />
                  <span className="text-ink-2">{SITE.address.street}, {SITE.address.postcode} {SITE.address.city}, {SITE.address.region}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-red shrink-0" />
                  <a href={`tel:+${SITE.phone}`} className="text-ink-2 hover:text-red">{SITE.phoneDisplay}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-red shrink-0" />
                  <a href={`mailto:${SITE.email}`} className="text-ink-2 hover:text-red">{SITE.email}</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-red shrink-0" />
                  <span className="text-ink-2"><strong className="text-ink">Isnin–Sabtu:</strong> 9:00 pagi – 6:00 petang</span>
                </li>
              </ul>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-line hover:border-red text-ink font-semibold px-5 py-3 transition-colors"
              >
                <Navigation className="w-4 h-4 text-red" /> Cari Kami di Google Maps
              </a>
            </div>

            <div className="rounded-2xl bg-charcoal text-white p-7 flex flex-col justify-center text-center">
              <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto" />
              <h2 className="mt-4 font-display font-bold text-2xl">WhatsApp Terus</h2>
              <p className="mt-2 text-white/70 text-sm">Respons pantas untuk tempahan borong & pertanyaan.</p>
              <a
                href={waLink("Salam, saya nak tempah mercun berlesen secara borong.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold px-6 py-4 transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
