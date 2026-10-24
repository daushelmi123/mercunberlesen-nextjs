"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "@/lib/site";

const LINKS = [
  { label: "Utama", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Panduan", href: "/panduan" },
  { label: "Permit PDRM", href: "/permit" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Hubungi", href: "/hubungi" },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="/" className="flex items-center" aria-label="MercunBerlesen">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/logo.svg" : "/logo-light.svg"}
        alt="MercunBerlesen — Pengedar Mercun & Bunga Api Berlesen"
        className="h-10 w-auto"
      />
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-charcoal/95 backdrop-blur border-b border-white/10" : "bg-charcoal"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">
        <Logo dark />
        <div className="hidden lg:flex items-center gap-7 text-sm text-white/80">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={waLink("Salam, saya berminat dengan mercun berlesen.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-red hover:bg-red-bright text-white text-sm font-semibold px-4 py-2.5 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp Kami
          </a>
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden bg-charcoal-2 border-t border-white/10 px-5 py-3">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-2 block text-center rounded-md bg-red text-white font-semibold py-3">
            WhatsApp Kami
          </a>
        </div>
      )}
    </header>
  );
}
