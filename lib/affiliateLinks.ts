export function buildFnacLink(titre: string, auteur: string, isbn?: string | null): string {
  const affiliateId = process.env.FNAC_AFFILIATE_ID ?? "";
  console.log("[affiliateLinks] FNAC_AFFILIATE_ID =", affiliateId || "(vide — vérifier .env.local)");
  const ref = affiliateId ? `&ref=${affiliateId}` : "";
  const search = isbn ? encodeURIComponent(isbn) : encodeURIComponent(`${titre} ${auteur}`);
  return `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${search}${ref}`;
}

export function buildAmazonLink(titre: string, auteur: string, isbn?: string | null): string {
  const tag = process.env.AMAZON_AFFILIATE_ID ?? "";
  console.log("[affiliateLinks] AMAZON_AFFILIATE_ID =", tag || "(vide — vérifier .env.local)");
  const tagParam = tag ? `&tag=${tag}` : "";
  if (isbn) {
    return `https://www.amazon.fr/s?k=${encodeURIComponent(isbn)}${tagParam}`;
  }
  const query = encodeURIComponent(`${titre} ${auteur}`);
  return `https://www.amazon.fr/s?k=${query}${tagParam}`;
}
