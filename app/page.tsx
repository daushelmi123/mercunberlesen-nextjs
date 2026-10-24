import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ProductShowcase from "@/components/ProductShowcase";
import {
  TrustBar,
  Festivals,
  WholesaleBand,
  Categories,
  Brands,
  HowItWorks,
  Knowledge,
  Gallery,
  Faq,
  CtaBand,
  Footer,
} from "@/components/Sections";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <WholesaleBand />
        <Festivals />
        <Categories />
        <ProductShowcase />
        <Brands />
        <HowItWorks />
        <Knowledge />
        <Gallery />
        <Faq />
        <CtaBand />
      </main>
      <Footer />

      <a
        href={waLink("Salam, saya nak tempah mercun berlesen secara borong.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami di WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1fbb57] text-white pl-4 pr-5 py-3.5 shadow-xl shadow-black/40 hover:scale-[1.03] transition-all"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>
    </>
  );
}
