import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, type Article } from "@/sanity/queries";
import { Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog littéraire – Idées cadeaux & coups de cœur",
  description:
    "Idées cadeaux livres, coups de cœur, actualité littéraire — le blog de Quel livre offrir ? pour ne jamais être à court d'inspiration.",
};

const categorieLabels: Record<string, string> = {
  "idees-cadeaux": "Idées cadeaux",
  "actualite-litteraire": "Actualité littéraire",
  "coups-de-coeur": "Coups de cœur",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  let articles: Article[] = [];
  try {
    articles = await getAllArticles();
  } catch {
    // Sanity non configuré en dev
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          Le blog littéraire
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#6b7280" }}>
          Idées cadeaux, coups de cœur et actualité littéraire pour vous aider à offrir le bon livre.
        </p>
      </div>

      {articles.length === 0 ? (
        <div
          className="text-center py-20 rounded-2xl"
          style={{ backgroundColor: "#f0f4f5" }}
        >
          <div className="text-5xl mb-4">📖</div>
          <p className="text-lg font-medium" style={{ color: "#2a6b7c" }}>
            Les articles arrivent bientôt…
          </p>
          <p className="text-sm mt-2" style={{ color: "#9ca3af" }}>
            Revenez dans quelques jours !
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article._id} href={`/blog/${article.slug.current}`} className="card group">
              {/* Image */}
              {article.image?.asset?.url && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image.asset.url}
                    alt={article.image.alt ?? article.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              {!article.image?.asset?.url && (
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: "#e8f0f2" }}
                >
                  <span className="text-5xl opacity-40">📚</span>
                </div>
              )}

              {/* Contenu */}
              <div className="p-5">
                {/* Catégorie */}
                {article.categorie && (
                  <div className="flex items-center gap-1 text-xs font-semibold mb-2" style={{ color: "#c4622d" }}>
                    <Tag size={12} />
                    {categorieLabels[article.categorie] ?? article.categorie}
                  </div>
                )}

                <h2
                  className="font-bold text-lg mb-2 leading-tight group-hover:text-[#c4622d] transition-colors"
                  style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
                >
                  {article.titre}
                </h2>

                {article.extrait && (
                  <p className="text-sm leading-relaxed mb-3 line-clamp-3" style={{ color: "#6b7280" }}>
                    {article.extrait}
                  </p>
                )}

                <div className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af" }}>
                  <Calendar size={12} />
                  {formatDate(article.date)}
                  {article.auteur && <span className="ml-2">· {article.auteur}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
