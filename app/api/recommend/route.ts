import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { fetchBookCover } from "@/lib/googleBooks";
import { buildFnacLink, buildAmazonLink } from "@/lib/affiliateLinks";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export interface BookRecommendation {
  titre: string;
  auteur: string;
  tag: string;
  pourquoi: string;
  prix: string;
  couverture: string | null;
  lienFnac: string;
  lienAmazon: string;
}

function buildPrompt(profil: string, reponses: Record<string, string>): string {
  const reponsesFormatees = Object.entries(reponses)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n");

  return `Tu es un libraire expert et passionné. Un client cherche un livre à offrir à un(e) ${profil}.

Voici ses réponses au quiz :
${reponsesFormatees}

En te basant sur ces informations, propose exactement 5 recommandations de livres parfaitement adaptées.

Réponds UNIQUEMENT avec un objet JSON valide (sans markdown, sans \`\`\`) de cette forme exacte :
{
  "recommandations": [
    {
      "titre": "Titre exact du livre",
      "auteur": "Prénom Nom de l'auteur",
      "tag": "Un mot-clé (ex: Aventure, Émouvant, Drôle, Classique, Incontournable...)",
      "pourquoi": "2-3 phrases personnalisées expliquant pourquoi ce livre correspond parfaitement au profil décrit",
      "prix": "Prix indicatif en euros (ex: 8,90 €)"
    }
  ]
}

Assure-toi que :
- Les livres existent réellement et sont disponibles en France
- Le prix est réaliste et dans le budget indiqué
- L'explication est chaleureuse, personnalisée et fait référence aux réponses du quiz
- Les recommandations sont variées (pas que du même genre)`;
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
      model: "claude-sonnet-4-5",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";

    let parsed: { recommandations: Omit<BookRecommendation, "couverture" | "lienFnac" | "lienAmazon">[] };
    try {
      parsed = JSON.parse(text.trim());
    } catch {
      return NextResponse.json({ error: "Réponse invalide de l'IA" }, { status: 500 });
    }

    // Enrichissement : couvertures + liens affiliés en parallèle
    const enriched = await Promise.all(
      parsed.recommandations.map(async (book) => {
        const cover = await fetchBookCover(book.titre, book.auteur);
        return {
          ...book,
          couverture: cover.thumbnail,
          lienFnac: buildFnacLink(book.titre, book.auteur),
          lienAmazon: buildAmazonLink(book.titre, book.auteur),
        } as BookRecommendation;
      })
    );

    return NextResponse.json({ recommandations: enriched });
  } catch (error) {
    console.error("Erreur /api/recommend:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
