export function buildAmazonLink(titre: string, auteur: string, isbn?: string | null): string {
  const tag = process.env.AMAZON_AFFILIATE_ID ?? "";

  // ISBN-10 (10 caractères) = utilisable comme ASIN → lien direct vers la fiche produit
  if (isbn && isbn.replace(/-/g, "").length === 10) {
    const asin = isbn.replace(/-/g, "");
    const tagParam = tag ? `?tag=${tag}` : "";
    return `https://www.amazon.fr/dp/${asin}${tagParam}`;
  }

  // Sinon (ISBN-13 ou pas d'ISBN) : recherche par ISBN ou titre, limitée aux livres
  const tagParam = tag ? `&tag=${tag}` : "";
  if (isbn) {
    return `https://www.amazon.fr/s?k=${encodeURIComponent(isbn)}&i=stripbooks${tagParam}`;
  }
  const query = encodeURIComponent(`${titre} ${auteur}`);
  return `https://www.amazon.fr/s?k=${query}&i=stripbooks${tagParam}`;
}
