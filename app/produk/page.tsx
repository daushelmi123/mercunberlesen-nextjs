import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ProductShowcase from "@/components/ProductShowcase";
import { Footer } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Katalog Produk Mercun Berlesen — Harga Borong",
  description:
    "Katalog penuh mercun & bunga api berlesen: sparklers, air pancut, roket, celebration cake, mercun Red Dragon dan banyak lagi. Harga borong untuk dealer & reseller. Tonton video produk sebenar.",
  alternates: { canonical: `${SITE.url}/produk` },
  openGraph: {
    title: "Katalog Produk Mercun Berlesen — Harga Borong",
    description: "93+ produk berlesen sedia stok. Harga borong untuk dealer & reseller.",
    url: `${SITE.url}/produk`,
  },
};

export default function ProdukPage() {
  return (
    <>
      <Nav />
      <div className="pt-16 lg:pt-[72px]">
        <section className="bg-charcoal text-white py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold tracking-widest text-gold-grad uppercase">Katalog Borong</p>
            <h1 className="mt-2 font-display font-extrabold text-3xl lg:text-5xl">
              Produk Mercun & Bunga Api Berlesen
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Semua produk 100% sah di bawah undang-undang PDRM. Harga borong untuk
              dealer &amp; reseller — klik mana-mana produk untuk tonton video sebenar.
            </p>
          </div>
        </section>
        <ProductShowcase hideHeading />
      </div>
      <Footer />
    </>
  );
}
