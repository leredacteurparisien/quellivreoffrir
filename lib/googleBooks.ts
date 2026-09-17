export interface BookData {
  thumbnail: string | null;
  smallThumbnail: string | null;
  isbn: string | null;
}

const GOOGLE_BOOKS_KEY = process.env.GOOGLE_BOOKS_API_KEY ?? "";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---- Source principale : Google Books (bon catalogue FR) ----
async function fetchFromGoogle(titre: string, auteur: string): Promise<BookData | null> {
  const query = encodeURIComponent(`intitle:${titre} inauthor:${auteur}`);
  const keyParam = GOOGLE_BOOKS_KEY ? `&key=${GOOGLE_BOOKS_KEY}` : "";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&country=FR${keyParam}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[googleBooks] HTTP ${res.status} pour "${titre}"`);
      return null;
    }
    const data = await res.json();
    const items = data?.items ?? [];
    if (items.length === 0) return null;

    // On ne garde qu'une édition en français
    const itemFr = items.find(
      (it: { volumeInfo?: { language?: string } }) => it.volumeInfo?.language === "fr"
    );
    if (!itemFr) return null;

    const info = itemFr.volumeInfo ?? {};
    const identifiers = info.industryIdentifiers ?? [];
    const isbn =
      identifiers.find((id: { type: string }) => id.type === "ISBN_13")?.identifier ??
      identifiers.find((id: { type: string }) => id.type === "ISBN_10")?.identifier ??
      null;

    if (!isbn) return null;

    const thumbnail = info.imageLinks?.thumbnail?.replace("http://", "https://") ?? null;

    console.log(`[googleBooks] "${titre}" (fr) → isbn=${isbn}, cover=${thumbnail ? "oui" : "non"}`);
    return {
      thumbnail,
      smallThumbnail: info.imageLinks?.smallThumbnail?.replace("http://", "https://") ?? null,
      isbn,
    };
  } catch (err) {
    console.error(`[googleBooks] Exception pour "${titre}" :`, err);
    return null;
  }
}

// ---- Repli : OpenLibrary (éditions françaises) ----
async function fetchFromOpenLibrary(titre: string, auteur: string): Promise<BookData | null> {
  const params = new URLSearchParams({
    title: titre,
    author: auteur,
    limit: "5",
    fields: "title,author_name,language,isbn,cover_i",
  });
  const url = `https://openlibrary.org/search.json?${params.toString()}`;

  try {
    const res = await fetch(url, { headers: { "User-Agent": "quellivreoffrir.fr" } });
    if (!res.ok) return null;
    const data = await res.json();
    const docs = data?.docs ?? [];

    const docFr = docs.find(
      (d: { language?: string[] }) => Array.isArray(d.language) && d.language.includes("fre")
    );
    if (!docFr) return null;

    const isbn: string | null =
      Array.isArray(docFr.isbn) && docFr.isbn.length > 0 ? docFr.isbn[0] : null;
    if (!isbn) return null;

    const coverId = docFr.cover_i;
    const thumbnail = coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

    console.log(`[openLibrary] "${titre}" (fr) → isbn=${isbn}`);
    return { thumbnail, smallThumbnail: thumbnail, isbn };
  } catch {
    return null;
  }
}

export async function fetchBookData(titre: string, auteur: string): Promise<BookData> {
  console.log(`[books] Recherche : "${titre}" — "${auteur}"`);
  const viaGoogle = await fetchFromGoogle(titre, auteur);
  if (viaGoogle) return viaGoogle;

  const viaOL = await fetchFromOpenLibrary(titre, auteur);
  if (viaOL) return viaOL;

  return { thumbnail: null, smallThumbnail: null, isbn: null };
}

export type BookCover = Pick<BookData, "thumbnail" | "smallThumbnail">;
export async function fetchBookCover(titre: string, auteur: string): Promise<BookCover> {
  const { thumbnail, smallThumbnail } = await fetchBookData(titre, auteur);
  return { thumbnail, smallThumbnail };
}
