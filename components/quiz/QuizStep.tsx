"use client";

import { useState } from "react";
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
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [freeTexts, setFreeTexts] = useState<Record<string, string>>({});
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  const progress = ((stepIndex + 1) / totalSteps) * 100;
  const type = question.type ?? "single";

  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const handleConfirmMultiple = () => {
    if (selected.size === 0) return;
    const parts = Array.from(selected).map((v) => {
      const opt = question.options.find((o) => o.value === v);
      if (opt?.freeText && freeTexts[v]?.trim()) return `${v}: ${freeTexts[v].trim()}`;
      return v;
    });
    onAnswer(question.id, parts.join(", "));
  };

  const handleConfirmBudget = () => {
    if (!budgetMin && !budgetMax) return;
    const min = budgetMin ? `${budgetMin} €` : "?";
    const max = budgetMax ? `${budgetMax} €` : "?";
    onAnswer(question.id, `entre ${min} et ${max}`);
  };

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
        className="text-2xl md:text-3xl font-bold mb-2"
        style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
      >
        {question.question}
      </h2>
      {type === "multiple" && (
        <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
          Plusieurs choix possibles
        </p>
      )}
      {type !== "multiple" && <div className="mb-8" />}

      {/* Single */}
      {type === "single" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onAnswer(question.id, opt.value)}
              className="card p-4 text-left hover:scale-[1.02] transition-all border-2 border-transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c4622d"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; }}
            >
              <span className="text-base font-medium" style={{ color: "#1c2b30" }}>
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Multiple */}
      {type === "multiple" && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = selected.has(opt.value);
              return (
                <div key={opt.value} className="flex flex-col gap-1">
                  <button
                    onClick={() => toggleOption(opt.value)}
                    className="card p-4 text-left transition-all border-2"
                    style={{
                      cursor: "pointer",
                      borderColor: isSelected ? "#c4622d" : "transparent",
                      backgroundColor: isSelected ? "#fff5f0" : undefined,
                    }}
                  >
                    <span className="text-base font-medium" style={{ color: "#1c2b30" }}>
                      {opt.label}
                    </span>
                  </button>
                  {opt.freeText && isSelected && (
                    <input
                      type="text"
                      placeholder="Précisez…"
                      value={freeTexts[opt.value] ?? ""}
                      onChange={(e) =>
                        setFreeTexts((prev) => ({ ...prev, [opt.value]: e.target.value }))
                      }
                      className="border rounded-lg px-3 py-2 text-sm"
                      style={{ borderColor: "#c4622d", color: "#1c2b30" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <button
            onClick={handleConfirmMultiple}
            disabled={selected.size === 0}
            className="btn-primary self-start"
            style={{ opacity: selected.size === 0 ? 0.4 : 1 }}
          >
            Valider ma sélection
          </button>
        </div>
      )}

      {/* Budget */}
      {type === "budget" && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-base" style={{ color: "#374151" }}>Entre</span>
            <input
              type="number"
              min={0}
              value={budgetMin}
              onChange={(e) => setBudgetMin(e.target.value)}
              placeholder="0"
              className="border rounded-lg px-3 py-2 w-24 text-center text-base"
              style={{ borderColor: "#d1d5db", color: "#1c2b30" }}
            />
            <span className="text-base" style={{ color: "#374151" }}>€ et</span>
            <input
              type="number"
              min={0}
              value={budgetMax}
              onChange={(e) => setBudgetMax(e.target.value)}
              placeholder="50"
              className="border rounded-lg px-3 py-2 w-24 text-center text-base"
              style={{ borderColor: "#d1d5db", color: "#1c2b30" }}
            />
            <span className="text-base" style={{ color: "#374151" }}>€</span>
          </div>
          <button
            onClick={handleConfirmBudget}
            disabled={!budgetMin && !budgetMax}
            className="btn-primary self-start"
            style={{ opacity: !budgetMin && !budgetMax ? 0.4 : 1 }}
          >
            Valider
          </button>
        </div>
      )}
    </div>
  );
}
