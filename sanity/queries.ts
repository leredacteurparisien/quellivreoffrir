import { sanityClient } from "./config";

export interface Article {
  _id: string;
  titre: string;
  slug: { current: string };
  date: string;
  auteur: string;
  image: { asset: { url: string }; alt?: string } | null;
  categorie: string;
  extrait: string;
  contenu: unknown[];
}

export async function getAllArticles(): Promise<Article[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "article"] | order(date desc) {
      _id,
      titre,
      slug,
      date,
      auteur,
      image { asset->{ url }, alt },
      categorie,
      extrait,
    }`
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!sanityClient) return null;
  const results = await sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      titre,
      slug,
      date,
      auteur,
      image { asset->{ url }, alt },
      categorie,
      extrait,
      contenu,
    }`,
    { slug }
  );
  return results ?? null;
}
