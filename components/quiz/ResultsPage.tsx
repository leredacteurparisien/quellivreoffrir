"use client";

import Image from "next/image";
import { ExternalLink, RefreshCw } from "lucide-react";
import type { BookRecommendation } from "@/app/api/recommend/route";
import type { Profil } from "@/lib/quizData";

const tagColors: Record<string, string> = {
  Aventure: "#2a6b7c",
  Émouvant: "#c4622d",
  Drôle: "#4a9bb0",
  Classique: "#1c4a57",
  Incontournable: "#c4622d",
  Poétique: "#4a9bb0",
  Mystère: "#2a6b7c",
};

function getTagColor(tag: string): string {
  return tagColors[tag] ?? "#2a6b7c";
}

export default function ResultsPage({
  recommandations,
  profil,
  onRestart,
}: {
  recommandations: BookRecommendation[];
  profil: Profil;
  onRestart: () => void;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* En-tête résultats */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🎉</div>
        <h1
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          Vos 5 recommandations personnalisées
        </h1>
        <p style={{ color: "#6b7280" }}>
          Sélectionnées par notre libraire IA pour le profil{" "}
          <strong style={{ color: "#c4622d" }}>{profil}</strong>.
        </p>
      </div>

      {/* Grille des recommandations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {recommandations.map((book, i) => (
          <div key={i} className="card flex flex-col">
            {/* Couverture */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{ height: "200px", backgroundColor: "#f0f4f5" }}
            >
              {book.couverture ? (
                <Image
                  src={book.couverture}
                  alt={`Couverture de ${book.titre}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="text-6xl opacity-30">📖</div>
              )}
              {/* Tag */}
              <span
                className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white"
                style={{ backgroundColor: getTagColor(book.tag) }}
              >
                {book.tag}
              </span>
              {/* Numéro */}
              <span
                className="absolute top-3 right-3 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white"
                style={{ backgroundColor: "#1c2b30" }}
              >
                {i + 1}
              </span>
            </div>

            {/* Infos */}
            <div className="p-5 flex-1 flex flex-col">
              <h3
                className="font-bold text-lg mb-1 leading-tight"
                style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
              >
                {book.titre}
              </h3>
              <p className="text-sm mb-1" style={{ color: "#6b7280" }}>
                {book.auteur}
              </p>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "#c4622d" }}
              >
                {book.prix}
              </p>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#374151" }}>
                {book.pourquoi}
              </p>

              {/* Liens affiliés */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={book.lienFnac}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold py-2 px-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "#ffd700",
                    color: "#1c2b30",
                  }}
                >
                  Fnac <ExternalLink size={12} />
                </a>
                <a
                  href={book.lienAmazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold py-2 px-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "#ff9900",
                    color: "#1c2b30",
                  }}
                >
                  Amazon <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommencer */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="btn-secondary flex items-center gap-2 mx-auto"
        >
          <RefreshCw size={16} />
          Recommencer le quiz
        </button>
        <p className="mt-3 text-sm" style={{ color: "#9ca3af" }}>
          * Les liens Amazon et Fnac sont des liens affiliés.
        </p>
      </div>
    </div>
  );
}
