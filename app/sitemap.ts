import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { path: "", p: 1.0 },
    { path: "/produk", p: 0.9 },
    { path: "/permit", p: 0.8 },
    { path: "/panduan", p: 0.7 },
    { path: "/hubungi", p: 0.6 },
  ].map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r.p,
  }));

  const articlePages = articles.map((a) => ({
    url: `${SITE.url}/panduan/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages];
}
