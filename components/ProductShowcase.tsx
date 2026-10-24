"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X, Play, MessageCircle } from "lucide-react";
import { products, categories, categoryLabel, type Product } from "@/lib/products";
import { waLink } from "@/lib/site";

export default function ProductShowcase({ hideHeading = false }: { hideHeading?: boolean }) {
  const [cat, setCat] = useState<string>("");
  const [active, setActive] = useState<Product | null>(null);

  const shown = useMemo(
    () => (cat ? products.filter((p) => p.category === cat) : products),
    [cat]
  );

  return (
    <section id="produk" className="py-20 bg-bg-softer">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {!hideHeading && (
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-bold tracking-widest text-red uppercase mb-2">Katalog Borong</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-ink">
              Produk Mercun Berlesen — Harga Borong
            </h2>
            <p className="mt-3 text-ink-dim">
              {products.length}+ produk sedia stok untuk dealer &amp; reseller. Klik mana-mana produk untuk tonton video sebenar.
            </p>
          </div>
        )}

        {/* Penapis kategori */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setCat("")}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
              !cat ? "bg-red text-white border-red" : "border-line text-ink-2 hover:border-red"
            }`}
          >
            Semua ({products.length})
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c === cat ? "" : c)}
              className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
                cat === c ? "bg-red text-white border-red" : "border-line text-ink-2 hover:border-red"
              }`}
            >
              {categoryLabel(c)} ({products.filter((p) => p.category === c).length})
            </button>
          ))}
        </div>

        {/* Grid produk */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shown.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group text-left rounded-xl overflow-hidden bg-white border border-line card-shadow hover:border-red/40 transition-all"
            >
              <div className="relative aspect-square bg-charcoal overflow-hidden">
                <Image
                  src={p.imageUrl}
                  alt={p.nameMs}
                  fill
                  sizes="(max-width:768px) 50vw, 280px"
                  className="object-contain group-hover:scale-105 transition-transform"
                />
                {p.videoUrl && (
                  <span className="absolute top-2 right-2 grid place-items-center w-8 h-8 rounded-full bg-black/60 text-white backdrop-blur">
                    <Play className="w-4 h-4" />
                  </span>
                )}
              </div>
              <div className="p-3.5">
                <p className="text-[11px] uppercase tracking-wide text-ink-dim">{categoryLabel(p.category)}</p>
                <h3 className="font-bold text-ink text-sm leading-snug mt-0.5">{p.nameMs}</h3>
                <p className="text-red font-semibold text-xs mt-1.5">Harga borong · WhatsApp</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal video */}
      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-lg bg-charcoal rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 rounded-full bg-black/50 text-white"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            {active.videoUrl ? (
              <video
                src={active.videoUrl}
                poster={active.imageUrl}
                controls
                autoPlay
                playsInline
                className="w-full aspect-square bg-black object-contain"
              />
            ) : (
              <div className="relative aspect-square bg-black">
                <Image src={active.imageUrl} alt={active.nameMs} fill className="object-contain" />
              </div>
            )}
            <div className="p-5 text-white">
              <p className="text-[11px] uppercase tracking-wide text-white/50">{categoryLabel(active.category)}</p>
              <h3 className="font-display font-bold text-xl mt-0.5">{active.nameMs}</h3>
              <p className="text-white/60 text-sm mt-1">Dapatkan harga borong terbaik melalui WhatsApp.</p>
              <a
                href={waLink(`Saya nak tanya harga borong: ${active.nameMs}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold py-3 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Tempah Borong via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
