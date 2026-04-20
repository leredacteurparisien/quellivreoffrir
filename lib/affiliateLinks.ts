export function buildAmazonLink(titre: string, auteur: string, isbn?: string | null): string {
  const tag = process.env.AMAZON_AFFILIATE_ID ?? "";
  if (isbn) {
    const tagParam = tag ? `?tag=${tag}` : "";
    return `https://www.amazon.fr/dp/${isbn}${tagParam}`;
  }
  const query = encodeURIComponent(`${titre} ${auteur}`);
  const tagParam = tag ? `&tag=${tag}` : "";
  return `https://www.amazon.fr/s?k=${query}${tagParam}`;
}
