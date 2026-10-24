import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Panduan Permit Mercun PDRM Malaysia",
  description:
    "Panduan lengkap keperluan permit PDRM untuk mercun & bunga api di Malaysia — siapa layak, dokumen diperlukan, proses permohonan dan cara kami membantu.",
  alternates: { canonical: `${SITE.url}/permit` },
};

const eligible = [
  "Warganegara Malaysia berumur 21 tahun ke atas",
  "Syarikat & organisasi berdaftar",
  "Penganjur acara & majlis",
  "Dealer & peniaga berdaftar",
];
const docs = [
  "Salinan kad pengenalan pemohon",
  "Butiran acara: tarikh, lokasi & tujuan",
  "Surat sokongan daripada pembekal berlesen",
  "Kelulusan pihak berkuasa tempatan (jika perlu)",
];
const steps = [
  { n: "01", t: "Sediakan Dokumen", d: "Kumpul maklumat pemohon & butiran acara. Kami sediakan surat sokongan." },
  { n: "02", t: "Mohon di IPD", d: "Hantar permohonan ke Ibu Pejabat Polis Daerah (PDRM) berkaitan." },
  { n: "03", t: "Kelulusan & Beli", d: "Setelah permit diluluskan, tempahan mercun berlesen boleh diteruskan." },
];

export default function PermitPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Perlukah permit untuk mercun di Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Ya. Penggunaan mercun & bunga api memerlukan permit daripada Ketua Polis Daerah (PDRM) di bawah Akta Bahan Letupan 1957." } },
      { "@type": "Question", name: "Adakah anda membantu dengan permohonan permit?", acceptedAnswer: { "@type": "Answer", text: "Ya. Sebagai pembekal berlesen, MercunBerlesen menyediakan surat sokongan dan panduan lengkap untuk permohonan permit anda." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq).replace(/</g, "\\u003c") }} />
      <Nav />
      <div className="pt-16 lg:pt-[72px]">
        <section className="bg-charcoal text-white py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold tracking-widest text-gold-grad uppercase">Permit PDRM</p>
            <h1 className="mt-2 font-display font-extrabold text-3xl lg:text-5xl">Panduan Permit Mercun PDRM</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Di Malaysia, mercun & bunga api dikawal di bawah Akta Bahan Letupan 1957.
              Kami permudahkan proses permit untuk anda.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg-softer">
          <div className="mx-auto max-w-5xl px-5 lg:px-8 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white border border-line p-7 card-shadow">
              <h2 className="font-display font-bold text-xl text-ink mb-4">Siapa Boleh Memohon</h2>
              <ul className="space-y-3">
                {eligible.map((e) => (
                  <li key={e} className="flex gap-2.5 text-sm text-ink-2">
                    <CheckCircle2 className="w-4 h-4 text-red shrink-0 mt-0.5" /> {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-line p-7 card-shadow">
              <h2 className="font-display font-bold text-xl text-ink mb-4">Dokumen Diperlukan</h2>
              <ul className="space-y-3">
                {docs.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-ink-2">
                    <CheckCircle2 className="w-4 h-4 text-red shrink-0 mt-0.5" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-y border-line">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-ink text-center mb-10">
              Proses Permohonan
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-line bg-bg-softer p-7">
                  <span className="font-display font-extrabold text-3xl text-red">{s.n}</span>
                  <h3 className="mt-4 font-display font-bold text-lg text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href={waLink("Salam, saya perlukan bantuan permit mercun PDRM.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold px-7 py-4 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Dapatkan Bantuan Permit
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
