export interface BookCover {
  thumbnail: string | null;
  smallThumbnail: string | null;
}

export async function fetchBookCover(
  titre: string,
  auteur: string
): Promise<BookCover> {
  const query = encodeURIComponent(`${titre} ${auteur}`);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1&fields=items(volumeInfo(imageLinks))`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return { thumbnail: null, smallThumbnail: null };
    const data = await res.json();
    const imageLinks = data?.items?.[0]?.volumeInfo?.imageLinks;
    return {
      thumbnail: imageLinks?.thumbnail?.replace("http://", "https://") ?? null,
      smallThumbnail: imageLinks?.smallThumbnail?.replace("http://", "https://") ?? null,
    };
  } catch {
    return { thumbnail: null, smallThumbnail: null };
  }
}
