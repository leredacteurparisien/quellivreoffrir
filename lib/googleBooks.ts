export interface BookData {
  thumbnail: string | null;
  smallThumbnail: string | null;
  isbn: string | null;
}

export async function fetchBookData(titre: string, auteur: string): Promise<BookData> {
  const query = encodeURIComponent(`intitle:${titre} inauthor:${auteur}`);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=3&fields=items(volumeInfo(title,imageLinks,industryIdentifiers))`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return { thumbnail: null, smallThumbnail: null, isbn: null };
    const data = await res.json();

    const items: Array<{
      volumeInfo: {
        title?: string;
        imageLinks?: { thumbnail?: string; smallThumbnail?: string };
        industryIdentifiers?: Array<{ type: string; identifier: string }>;
      };
    }> = data?.items ?? [];

    if (items.length === 0) return { thumbnail: null, smallThumbnail: null, isbn: null };

    // Prefer the item whose title best matches
    const titreNorm = titre.toLowerCase();
    const best =
      items.find((item) =>
        (item.volumeInfo?.title ?? "").toLowerCase().includes(titreNorm.slice(0, 8))
      ) ?? items[0];

    const imageLinks = best.volumeInfo?.imageLinks;
    const identifiers = best.volumeInfo?.industryIdentifiers ?? [];
    const isbn =
      identifiers.find((id) => id.type === "ISBN_13")?.identifier ??
      identifiers.find((id) => id.type === "ISBN_10")?.identifier ??
      null;

    return {
      thumbnail: imageLinks?.thumbnail?.replace("http://", "https://") ?? null,
      smallThumbnail: imageLinks?.smallThumbnail?.replace("http://", "https://") ?? null,
      isbn,
    };
  } catch {
    return { thumbnail: null, smallThumbnail: null, isbn: null };
  }
}

// Keep legacy export for any existing callers
export type BookCover = Pick<BookData, "thumbnail" | "smallThumbnail">;
export async function fetchBookCover(titre: string, auteur: string): Promise<BookCover> {
  const { thumbnail, smallThumbnail } = await fetchBookData(titre, auteur);
  return { thumbnail, smallThumbnail };
}
