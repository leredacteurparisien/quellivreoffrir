"use client";

import type { Profil } from "@/lib/quizData";

const profils: { value: Profil; emoji: string; label: string; desc: string; color: string }[] = [
  { value: "bébé", emoji: "🍼", label: "Bébé", desc: "0 – 3 ans", color: "#4a9bb0" },
  { value: "enfant", emoji: "📚", label: "Enfant", desc: "4 – 12 ans", color: "#2a6b7c" },
  { value: "ado", emoji: "🎧", label: "Ado", desc: "13 – 17 ans", color: "#c4622d" },
  { value: "adulte", emoji: "☕", label: "Adulte", desc: "18 ans et +", color: "#1c4a57" },
];

export default function ProfilSelector({
  onSelect,
}: {
  onSelect: (p: Profil) => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          Pour qui cherchez-vous un livre ?
        </h1>
        <p style={{ color: "#6b7280" }}>
          Choisissez le profil du destinataire pour personnaliser les questions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profils.map((p) => (
          <button
            key={p.value}
            onClick={() => onSelect(p.value)}
            className="card p-6 text-center hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-current"
            style={{ "--hover-color": p.color } as React.CSSProperties}
          >
            <div className="text-5xl mb-3">{p.emoji}</div>
            <div
              className="font-bold text-xl mb-1"
              style={{ fontFamily: "Georgia, serif", color: p.color }}
            >
              {p.label}
            </div>
            <div className="text-sm" style={{ color: "#9ca3af" }}>
              {p.desc}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
