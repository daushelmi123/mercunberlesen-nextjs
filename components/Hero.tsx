import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site";
import Placeholder from "@/components/Placeholder";

export default function Hero() {
  return (
    <section className="relative bg-charcoal text-white pt-16 lg:pt-[72px]">
      <div className="relative">
        {/* Imej hero — placeholder (fireworks + gudang + lori berjenama) */}
        <Placeholder
          label="Fireworks + gudang + lori berjenama"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/30" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              Mercun Berlesen Malaysia.
              <br />
              <span className="text-gold-grad">Sah. Dipercayai. Profesional.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
              Pembekal mercun dan bunga api berlesen untuk Tahun Baru Cina, Hari
              Raya, Deepavali, Merdeka, majlis kahwin dan reseller — di seluruh
              Malaysia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#produk"
                className="group inline-flex items-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold px-7 py-3.5 transition-colors shadow-lg shadow-red/30"
              >
                Lihat Produk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={waLink("Salam, saya nak tanya pasal mercun berlesen.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 hover:border-white/50 text-white font-semibold px-7 py-3.5 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
