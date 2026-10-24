import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Placeholder from "@/components/Placeholder";
import { Footer } from "@/components/Sections";
import { articles } from "@/lib/articles";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Panduan Mercun Berlesen — Knowledge Centre",
  description:
    "Panduan dan maklumat berguna tentang mercun berlesen di Malaysia: cara pilih, perbezaan berlesen, keperluan permit PDRM dan keselamatan.",
  alternates: { canonical: `${SITE.url}/panduan` },
};

export default function PanduanPage() {
  return (
    <>
      <Nav />
      <div className="pt-16 lg:pt-[72px]">
        <section className="bg-charcoal text-white py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold tracking-widest text-gold-grad uppercase">Panduan</p>
            <h1 className="mt-2 font-display font-extrabold text-3xl lg:text-5xl">Knowledge Centre</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Panduan dan maklumat berguna tentang mercun berlesen di Malaysia.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg-softer">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/panduan/${a.slug}`}
                className="group rounded-xl overflow-hidden bg-white border border-line card-shadow hover:border-red/40 transition-all"
              >
                <Placeholder label={a.title} className="aspect-[16/9] w-full" compact />
                <div className="p-6">
                  <h2 className="font-display font-bold text-ink leading-snug group-hover:text-red transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red">
                    Baca Panduan <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
