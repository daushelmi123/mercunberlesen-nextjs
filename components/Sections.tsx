import {
  ShieldCheck,
  Truck,
  Package,
  Users,
  ArrowRight,
  ChevronDown,
  ShoppingCart,
  MessageCircle,
  PackageCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { festivals, brands, faqs } from "@/lib/data";
import { articles as siteArticles } from "@/lib/articles";
import { categories as prodCategories, categoryLabel, categoryCover } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

function Heading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && <p className="text-xs font-bold tracking-widest text-red uppercase mb-2">{eyebrow}</p>}
      <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-ink">{title}</h2>
      {sub && <p className="mt-3 text-ink-dim">{sub}</p>}
    </div>
  );
}

/* ---------- Trust bar (putih) ---------- */
export function TrustBar() {
  const items = [
    { icon: ShieldCheck, t: "Berlesen", d: "Operasi sah dan diiktiraf" },
    { icon: Truck, t: "Seluruh Malaysia", d: "Penghantaran ke seluruh negara" },
    { icon: Package, t: "Pelbagai Jenama", d: "Lebih 100 produk pilihan" },
    { icon: Users, t: "Reseller Friendly", d: "Sokongan untuk peniaga" },
  ];
  return (
    <section className="bg-white border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.t} className="flex items-start gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-red/10 text-red shrink-0">
              <it.icon className="w-5 h-5" />
            </span>
            <div>
              <div className="font-bold text-ink text-sm">{it.t}</div>
              <div className="text-xs text-ink-dim mt-0.5">{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Mercun Untuk Setiap Perayaan ---------- */
export function Festivals() {
  return (
    <section id="perayaan" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading
          eyebrow="Perayaan"
          title="Mercun Berlesen Untuk Setiap Perayaan"
          sub="Bekalan sah untuk setiap sambutan besar rakyat Malaysia sepanjang tahun."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {festivals.map((f) => (
            <a
              key={f.name}
              href={waLink(`Saya nak tanya mercun untuk ${f.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-line hover:border-red/40 bg-bg-softer hover:bg-white p-5 transition-all card-shadow"
            >
              <span className="text-3xl leading-none shrink-0">{f.emoji}</span>
              <div>
                <h3 className="font-display font-bold text-ink group-hover:text-red transition-colors">
                  {f.name}
                </h3>
                <p className="mt-1 text-sm text-ink-dim leading-relaxed">{f.d}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Kategori (guna gambar produk sebenar) ---------- */
export function Categories() {
  return (
    <section className="py-20 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading eyebrow="Kategori" title="Pilih Ikut Kategori" sub="Katalog borong mengikut jenis mercun & bunga api berlesen" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {prodCategories.map((c) => {
            const cover = categoryCover(c);
            return (
              <a
                key={c}
                href="#produk"
                className="group relative rounded-xl overflow-hidden aspect-[5/4] card-shadow bg-charcoal"
              >
                <Image
                  src={cover.imageUrl}
                  alt={categoryLabel(c)}
                  fill
                  sizes="(max-width:768px) 50vw, 300px"
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                  <span className="font-display font-bold text-white text-sm">{categoryLabel(c)}</span>
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-red text-white group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Jalur Borong (fokus wholesale) ---------- */
export function WholesaleBand() {
  const points = [
    { t: "Harga Borong", d: "Harga peti untuk dijual semula — margin untung tinggi." },
    { t: "Untuk Dealer & Reseller", d: "Sokongan penuh untuk peniaga musim perayaan." },
    { t: "Stok Sedia Ada", d: "Bekalan konsisten & penghantaran seluruh Malaysia." },
  ];
  return (
    <section className="py-16 bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-3 gap-8">
        {points.map((p) => (
          <div key={p.t}>
            <h3 className="font-display font-bold text-xl text-gold-grad">{p.t}</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Featured Brands ---------- */
export function Brands() {
  return (
    <section id="jenama" className="py-16 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading title="Featured Brands" sub="Jenama mercun berlesen yang dipercayai di Malaysia" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {brands.map((b) => (
            <div
              key={b}
              className="grid place-items-center h-24 rounded-xl border border-line bg-bg-softer px-4 text-center"
            >
              <span className="font-display font-bold text-ink-2">{b}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink-dim">Slot logo jenama — logo sebenar akan dimasukkan.</p>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
export function HowItWorks() {
  const steps = [
    { icon: ShoppingCart, t: "1. Pilih Produk", d: "Layari katalog produk dan pilih yang sesuai dengan keperluan anda." },
    { icon: MessageCircle, t: "2. Hubungi Kami", d: "WhatsApp atau hubungi pasukan kami untuk pertanyaan dan tempahan." },
    { icon: PackageCheck, t: "3. Terima Penghantaran", d: "Kami uruskan penghantaran ke lokasi anda dengan selamat." },
  ];
  return (
    <section className="py-20 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading title="Bagaimana Ia Berfungsi?" sub="Proses mudah untuk mendapatkan mercun berlesen" />
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s) => (
            <div key={s.t} className="text-center">
              <span className="grid place-items-center w-14 h-14 rounded-full bg-red/10 text-red mx-auto">
                <s.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-bold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-dim leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Knowledge Centre ---------- */
export function Knowledge() {
  return (
    <section id="panduan" className="py-20 bg-bg-softer">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading eyebrow="Panduan" title="Knowledge Centre" sub="Panduan dan maklumat berguna tentang mercun berlesen di Malaysia" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteArticles.map((a) => (
            <Link
              key={a.slug}
              href={`/panduan/${a.slug}`}
              className="group rounded-xl overflow-hidden bg-white border border-line card-shadow hover:border-red/40 transition-all"
            >
              <Placeholder label={a.title} className="aspect-[16/9] w-full" compact />
              <div className="p-5">
                <h3 className="font-display font-bold text-ink leading-snug group-hover:text-red transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-ink-dim leading-relaxed">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/panduan" className="inline-flex items-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold px-6 py-3 transition-colors">
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Galeri ---------- */
export function Gallery() {
  // Galeri guna gambar produk sebenar (satu wakil setiap kategori untuk kepelbagaian)
  const shots = prodCategories.map((c) => categoryCover(c)).slice(0, 8);
  return (
    <section id="galeri" className="py-20 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading title="Galeri Mercun Berlesen" sub="Sebahagian koleksi mercun & bunga api berlesen kami" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shots.map((p) => (
            <div key={p.id} className="relative aspect-square rounded-xl overflow-hidden bg-charcoal card-shadow group">
              <Image
                src={p.imageUrl}
                alt={p.nameMs}
                fill
                sizes="(max-width:768px) 50vw, 300px"
                className="object-contain p-3 group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-3">
                <span className="text-xs font-semibold text-white">{p.nameMs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section className="py-20 bg-bg-softer">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Heading title="FAQ" sub="Soalan yang paling kerap ditanya" />
        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-line bg-white px-5">
              <summary className="flex items-center justify-between cursor-pointer py-4 font-semibold text-ink text-sm list-none">
                {f.q}
                <ChevronDown className="w-4 h-4 text-ink-dim group-open:rotate-180 transition-transform" />
              </summary>
              <p className="pb-4 text-sm text-ink-dim leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand() {
  return (
    <section id="hubungi" className="relative overflow-hidden bg-charcoal text-white">
      <Placeholder label="Latar bunga api" className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8 py-20 text-center">
        <h2 className="font-display font-extrabold text-3xl lg:text-4xl">
          Bersedia <span className="text-gold-grad">Untuk Sambutan</span> Yang Lebih <span className="text-gold-grad">Meriah?</span>
        </h2>
        <p className="mt-4 text-white/75">
          Hubungi kami sekarang untuk tempahan mercun berlesen.
        </p>
        <a
          href={waLink("Salam, saya nak tempah mercun berlesen.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold px-8 py-4 transition-colors shadow-xl shadow-red/30"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp Kami Sekarang
        </a>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display font-extrabold text-white">
            MERCUN<span className="text-red-bright">BERLESEN</span>
          </div>
          <p className="mt-3 text-sm">Pembekal Mercun Berlesen Malaysia. Sah. Dipercayai. Profesional.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Pautan</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#produk" className="hover:text-white">Produk</a></li>
            <li><a href="#jenama" className="hover:text-white">Jenama</a></li>
            <li><a href="#panduan" className="hover:text-white">Panduan</a></li>
            <li><a href="#galeri" className="hover:text-white">Galeri</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Hubungi</h4>
          <ul className="space-y-2 text-sm">
            <li>{SITE.address.street}</li>
            <li>{SITE.address.postcode} {SITE.address.city}, {SITE.address.region}</li>
            <li><a href={`tel:+${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © 2026 {SITE.name} · Dikendalikan oleh {SITE.legalName} · SSM {SITE.ssm}
      </div>
    </footer>
  );
}
