export interface BookData {
  thumbnail: string | null;
  smallThumbnail: string | null;
  isbn: string | null;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchBookData(titre: string, auteur: string): Promise<BookData> {
  const params = new URLSearchParams({
    title: titre,
    author: auteur,
    limit: "5",
    fields: "title,author_name,language,isbn,cover_i",
  });
  const url = `https://openlibrary.org/search.json?${params.toString()}`;

  console.log(`[books] Recherche : "${titre}" — "${auteur}"`);

  try {
    const res = await fetch(url, { headers: { "User-Agent": "quellivreoffrir.fr" } });
    if (!res.ok) {
      console.warn(`[openLibrary] HTTP ${res.status} pour "${titre}"`);
      return { thumbnail: null, smallThumbnail: null, isbn: null };
    }
    const data = await res.json();
    const docs = data?.docs ?? [];

    // On ne garde qu'une édition dont la langue déclarée inclut le français.
    const docFr = docs.find(
      (d: { language?: string[] }) => Array.isArray(d.language) && d.language.includes("fre")
    );

    if (!docFr) {
      console.log(`[openLibrary] Aucune édition française pour "${titre}"`);
      return { thumbnail: null, smallThumbnail: null, isbn: null };
    }

    const isbn: string | null =
      Array.isArray(docFr.isbn) && docFr.isbn.length > 0 ? docFr.isbn[0] : null;
    const coverId = docFr.cover_i;
    const thumbnail = coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : isbn
      ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
      : null;

    console.log(`[openLibrary] "${titre}" (FR) → isbn=${isbn ?? "n/a"}, cover=${thumbnail ? "oui" : "non"}`);
    return { thumbnail, smallThumbnail: thumbnail, isbn };
  } catch (err) {
    console.error(`[books] Exception pour "${titre}" :`, err);
    return { thumbnail: null, smallThumbnail: null, isbn: null };
  }
}

export type BookCover = Pick<BookData, "thumbnail" | "smallThumbnail">;
export async function fetchBookCover(titre: string, auteur: string): Promise<BookCover> {
  const { thumbnail, smallThumbnail } = await fetchBookData(titre, auteur);
  return { thumbnail, smallThumbnail };
}
