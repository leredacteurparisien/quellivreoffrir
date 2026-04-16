export function buildFnacLink(titre: string, auteur: string): string {
  const query = encodeURIComponent(`${titre} ${auteur}`);
  const affiliateId = process.env.FNAC_AFFILIATE_ID ?? "";
  const ref = affiliateId ? `&ref=${affiliateId}` : "";
  return `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${query}${ref}`;
}

export function buildAmazonLink(titre: string, auteur: string): string {
  const query = encodeURIComponent(`${titre} ${auteur}`);
  const tag = process.env.AMAZON_AFFILIATE_ID ?? "";
  const tagParam = tag ? `&tag=${tag}` : "";
  return `https://www.amazon.fr/s?k=${query}${tagParam}`;
}
