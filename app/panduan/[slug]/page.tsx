import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { articles, getArticle } from "@/lib/articles";
import { SITE, waLink } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Panduan Tidak Dijumpai" };
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `${SITE.url}/panduan/${slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt, url: `${SITE.url}/panduan/${slug}` },
  };
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display font-bold text-2xl text-ink mt-10 mb-3">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((l) => l.replace(/^- /, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-ink-2 mb-5">
          {items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    }
    return <p key={i} className="text-ink-2 leading-relaxed mb-5">{block}</p>;
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    dateModified: a.updated,
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/panduan/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <div className="pt-16 lg:pt-[72px]">
        <article className="mx-auto max-w-3xl px-5 lg:px-8 py-14">
          <Link href="/panduan" className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-red mb-8">
            <ArrowLeft className="w-4 h-4" /> Semua Panduan
          </Link>
          <h1 className="font-display font-extrabold text-3xl lg:text-4xl text-ink leading-tight">{a.title}</h1>
          <p className="mt-4 text-lg text-ink-dim">{a.excerpt}</p>
          <div className="mt-10 border-t border-line pt-8">{renderBody(a.body)}</div>

          <div className="mt-12 rounded-2xl bg-charcoal text-white p-8 text-center">
            <h3 className="font-display font-bold text-xl">Ada soalan tentang mercun berlesen?</h3>
            <p className="mt-2 text-white/70 text-sm">Pasukan kami sedia membantu — termasuk bantuan permit.</p>
            <a
              href={waLink("Salam, saya ada soalan tentang mercun berlesen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-red hover:bg-red-bright text-white font-semibold px-6 py-3 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Kami
            </a>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
