export function buildAmazonLink(titre: string, auteur: string, isbn?: string | null): string {
  const tag = process.env.AMAZON_AFFILIATE_ID ?? "";
  const tagParam = tag ? `&tag=${tag}` : "";
  // Recherche par ISBN = tombe sur la fiche exacte du livre
  if (isbn) {
    return `https://www.amazon.fr/s?k=${encodeURIComponent(isbn)}&i=stripbooks${tagParam}`;
  }
  // Sans ISBN : recherche titre + auteur, limitée aux livres
  const query = encodeURIComponent(`${titre} ${auteur}`);
  return `https://www.amazon.fr/s?k=${query}&i=stripbooks${tagParam}`;
}
