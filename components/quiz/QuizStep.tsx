"use client";

import { ChevronLeft } from "lucide-react";
import type { QuizQuestion, Profil } from "@/lib/quizData";

const profilLabels: Record<Profil, string> = {
  "bébé": "Bébé",
  "enfant": "Enfant",
  "ado": "Ado",
  "adulte": "Adulte",
};

export default function QuizStep({
  question,
  stepIndex,
  totalSteps,
  profil,
  onAnswer,
  onBack,
}: {
  question: QuizQuestion;
  stepIndex: number;
  totalSteps: number;
  profil: Profil;
  onAnswer: (questionId: string, value: string) => void;
  onBack: () => void;
}) {
  const progress = ((stepIndex + 1) / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm transition-colors"
          style={{ color: "#6b7280" }}
        >
          <ChevronLeft size={16} />
          Retour
        </button>
        <span className="text-sm" style={{ color: "#9ca3af" }}>
          Profil : <strong style={{ color: "#2a6b7c" }}>{profilLabels[profil]}</strong>
        </span>
      </div>

      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between text-xs mb-2" style={{ color: "#9ca3af" }}>
          <span>Question {stepIndex + 1} sur {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question */}
      <h2
        className="text-2xl md:text-3xl font-bold mb-8"
        style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
      >
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onAnswer(question.id, opt.value)}
            className="card p-4 text-left hover:scale-[1.02] transition-all border-2 border-transparent group"
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c4622d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <span className="text-base font-medium" style={{ color: "#1c2b30" }}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
