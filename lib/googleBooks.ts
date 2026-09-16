export interface BookData {
  thumbnail: string | null;
  smallThumbnail: string | null;
  isbn: string | null;
}

const GOOGLE_BOOKS_KEY = process.env.GOOGLE_BOOKS_API_KEY ?? "";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---- Source principale : OpenLibrary (pas de clé, fiable depuis un serveur) ----
async function fetchFromOpenLibrary(titre: string, auteur: string): Promise<BookData | null> {
  const params = new URLSearchParams({
    title: titre,
    author: auteur,
    language: "fre", // privilégier les éditions françaises
    limit: "1",
    fields: "title,author_name,isbn,cover_i",
  });
  const url = `https://openlibrary.org/search.json?${params.toString()}`;

  try {
    const res = await fetch(url, { headers: { "User-Agent": "quellivreoffrir.fr" } });
    if (!res.ok) {
      console.warn(`[openLibrary] HTTP ${res.status} pour "${titre}"`);
      return null;
    }
    const data = await res.json();
    const doc = data?.docs?.[0];
    if (!doc) {
      console.log(`[openLibrary] Aucun résultat pour "${titre}"`);
      return null;
    }

    const isbn: string | null = Array.isArray(doc.isbn) && doc.isbn.length > 0 ? doc.isbn[0] : null;
    const coverId = doc.cover_i;
    const thumbnail = coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : isbn
      ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
      : null;

    console.log(`[openLibrary] "${titre}" → isbn=${isbn ?? "n/a"}, cover=${thumbnail ? "oui" : "non"}`);
    return { thumbnail, smallThumbnail: thumbnail, isbn };
  } catch (err) {
    console.error(`[openLibrary] Exception pour "${titre}" :`, err);
    return null;
  }
}

// ---- Repli : Google Books ----
async function fetchFromGoogle(titre: string, auteur: string): Promise<BookData | null> {
  const query = encodeURIComponent(`intitle:${titre} inauthor:${auteur}`);
  const keyParam = GOOGLE_BOOKS_KEY ? `&key=${GOOGLE_BOOKS_KEY}` : "";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=3&country=FR&fields=items(volumeInfo(title,imageLinks,industryIdentifiers))${keyParam}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[googleBooks] HTTP ${res.status} pour "${titre}"`);
      return null;
    }
    const data = await res.json();
    const items = data?.items ?? [];
    if (items.length === 0) return null;

    const titreNorm = titre.toLowerCase();
    const best =
      items.find((item: { volumeInfo?: { title?: string } }) =>
        (item.volumeInfo?.title ?? "").toLowerCase().includes(titreNorm.slice(0, 8))
      ) ?? items[0];

    const imageLinks = best.volumeInfo?.imageLinks;
    const identifiers = best.volumeInfo?.industryIdentifiers ?? [];
    const isbn =
      identifiers.find((id: { type: string }) => id.type === "ISBN_13")?.identifier ??
      identifiers.find((id: { type: string }) => id.type === "ISBN_10")?.identifier ??
      null;
    const thumbnail = imageLinks?.thumbnail?.replace("http://", "https://") ?? null;

    console.log(`[googleBooks] "${titre}" → isbn=${isbn ?? "n/a"}, cover=${thumbnail ? "oui" : "non"}`);
    return {
      thumbnail,
      smallThumbnail: imageLinks?.smallThumbnail?.replace("http://", "https://") ?? null,
      isbn,
    };
  } catch (err) {
    console.error(`[googleBooks] Exception pour "${titre}" :`, err);
    return null;
  }
}

export async function fetchBookData(titre: string, auteur: string): Promise<BookData> {
  console.log(`[books] Recherche : "${titre}" — "${auteur}"`);
  const viaOL = await fetchFromOpenLibrary(titre, auteur);
  if (viaOL && (viaOL.isbn || viaOL.thumbnail)) return viaOL;

  const viaGoogle = await fetchFromGoogle(titre, auteur);
  if (viaGoogle) return viaGoogle;

  return { thumbnail: null, smallThumbnail: null, isbn: null };
}

export type BookCover = Pick<BookData, "thumbnail" | "smallThumbnail">;
export async function fetchBookCover(titre: string, auteur: string): Promise<BookCover> {
  const { thumbnail, smallThumbnail } = await fetchBookData(titre, auteur);
  return { thumbnail, smallThumbnail };
}
