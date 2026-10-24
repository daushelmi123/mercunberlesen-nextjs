import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  manifest: "/site.webmanifest",
  title: {
    default: "MercunBerlesen | Pengedar Mercun & Bunga Api Berlesen Rasmi Malaysia",
    template: "%s | MercunBerlesen",
  },
  description:
    "Pengedar mercun & bunga api berlesen rasmi Malaysia — 100% sah di bawah undang-undang PDRM. Bekalan untuk perayaan, majlis kahwin, korporat, acara kerajaan, dealer & reseller. Dokumentasi permit lengkap.",
  keywords: [
    "mercun berlesen",
    "bunga api berlesen",
    "pengedar mercun berlesen malaysia",
    "mercun berlesen rasmi",
    "bunga api legal malaysia",
    "permit mercun PDRM",
    "bunga api korporat",
    "bunga api majlis kahwin",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: SITE.url,
    siteName: SITE.name,
    title: "MercunBerlesen | Pengedar Mercun & Bunga Api Berlesen Rasmi Malaysia",
    description:
      "100% sah di bawah undang-undang PDRM. Bekalan mercun & bunga api berlesen untuk perayaan, majlis, korporat & dealer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`${poppins.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
