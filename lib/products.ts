import data from "./products-data.json";

export interface Product {
  id: string;
  category: string;
  nameEn: string;
  nameMs: string;
  price: string;
  imageUrl: string;
  videoUrl: string;
}

export const products = data as Product[];

/** Label kategori (BM) untuk paparan borong. */
export const categoryLabels: Record<string, string> = {
  sparklers: "Sparklers",
  "Pop-Pop": "Pop-Pop",
  kids: "Bunga Api Kanak-kanak",
  fountains: "Air Pancut (Fountain)",
  "single-shots": "Single Shot",
  rockets: "Roket",
  "red-dragon": "Mercun Red Dragon",
  "merdeka-fireworks": "Celebration Cake",
};

export const categories = [...new Set(products.map((p) => p.category))];

export function categoryLabel(cat: string): string {
  return categoryLabels[cat] ?? cat;
}

/** Satu produk wakil (untuk imej kad kategori). */
export function categoryCover(cat: string): Product {
  return products.find((p) => p.category === cat)!;
}
