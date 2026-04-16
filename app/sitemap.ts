import type { MetadataRoute } from "next";
import { getAllArticles } from "@/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://quellivreoffrir.fr";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/quiz`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), priority: 0.3 },
  ];

  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await getAllArticles();
    articleRoutes = articles.map((a) => ({
      url: `${base}/blog/${a.slug.current}`,
      lastModified: new Date(a.date),
      priority: 0.7,
    }));
  } catch {
    // Sanity non configuré
  }

  return [...staticRoutes, ...articleRoutes];
}
