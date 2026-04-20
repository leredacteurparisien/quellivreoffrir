import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { fetchBookData } from "@/lib/googleBooks";
import { buildAmazonLink } from "@/lib/affiliateLinks";

const apiKey = process.env.ANTHROPIC_API_KEY;
console.log("[recommend] ANTHROPIC_API_KEY =", apiKey ? `${apiKey.slice(0, 10)}…` : "(vide — vérifier .env.local)");
const client = new Anthropic({ apiKey });

export interface BookRecommendation {
  titre: string;
  auteur: string;
  tag: string;
  pourquoi: string;
  prix: string;
  isbn: string | null;
  coverUrl: string | null;
  amazonLink: string;
}

type BookRaw = Omit<BookRecommendation, "isbn" | "coverUrl" | "amazonLink">;

function buildPrompt(profil: string, reponses: Record<string, string>): string {
  const reponsesFormatees = Object.entries(reponses)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n");

  return `Tu es un libraire expert et passionné. Un client cherche un livre à offrir à un(e) ${profil}.

Voici ses réponses au quiz :
${reponsesFormatees}

Propose exactement 7 recommandations de livres parfaitement adaptées.

IMPORTANT : réponds UNIQUEMENT avec un tableau JSON brut. Pas de markdown, pas de backticks, pas de texte avant ou après. Commence directement par [ et termine par ].

Format attendu :
[
  {
    "titre": "Titre exact du livre",
    "auteur": "Prénom Nom de l'auteur",
    "tag": "Un mot-clé (ex: Aventure, Émouvant, Drôle, Classique, Incontournable...)",
    "pourquoi": "2-3 phrases personnalisées expliquant pourquoi ce livre correspond parfaitement au profil décrit",
    "prix": "Prix indicatif en euros (ex: 8,90 €)"
  }
]

Règles ABSOLUES :
- Ne recommande QUE des livres réels, publiés et disponibles en France. Vérifie mentalement que chaque livre existe avant de le proposer.
- Recommande uniquement des livres disponibles en français (traduits si nécessaire).
- Le prix doit être réaliste et dans le budget indiqué.
- Pour les sagas, toujours proposer le tome 1 et préciser "Tome 1 d'une saga de X tomes" dans le champ "pourquoi".
- L'explication doit être chaleureuse, personnalisée et faire référence aux réponses du quiz.
- Les recommandations doivent être variées (genres différents).`;
}

function extractJson(raw: string): string {
  const trimmed = raw.trim();
  // Strip markdown code fences if present
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) return fenceMatch[1].trim();
  // Extract first [...] block
  const arrayMatch = trimmed.match(/\[[\s\S]*\]/);
  if (arrayMatch) return arrayMatch[0];
  return trimmed;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { profil, reponses } = body as {
      profil: string;
      reponses: Record<string, string>;
    };

    if (!profil || !reponses) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const prompt = buildPrompt(profil, reponses);

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonStr = extractJson(raw);

    let books: BookRaw[];
    try {
      books = JSON.parse(jsonStr);
      if (!Array.isArray(books)) throw new Error("Not an array");
    } catch {
      console.error("[recommend] Échec du parsing JSON. Texte brut reçu :", raw);
      return NextResponse.json({ error: "Réponse invalide de l'IA" }, { status: 500 });
    }

    const enriched = await Promise.all(
      books.map(async (book) => {
        const { thumbnail, isbn } = await fetchBookData(book.titre, book.auteur);
        return {
          ...book,
          isbn,
          coverUrl: thumbnail,
          amazonLink: buildAmazonLink(book.titre, book.auteur, isbn),
        } as BookRecommendation;
      })
    );

    // Prioritise books with a cover; fallback to all if not enough
    const withCover = enriched.filter((b) => b.coverUrl !== null);
    const final = (withCover.length >= 5 ? withCover : enriched).slice(0, 5);

    return NextResponse.json({ recommandations: final });
  } catch (error) {
    console.error("Erreur /api/recommend:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
