"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { quizQuestions, type Profil } from "@/lib/quizData";
import ProfilSelector from "@/components/quiz/ProfilSelector";
import QuizStep from "@/components/quiz/QuizStep";
import ResultsPage from "@/components/quiz/ResultsPage";
import type { BookRecommendation } from "@/app/api/recommend/route";

type Stage = "profil" | "quiz" | "loading" | "results" | "error";

function QuizInner() {
  const searchParams = useSearchParams();
  const [stage, setStage] = useState<Stage>("profil");
  const [profil, setProfil] = useState<Profil | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [reponses, setReponses] = useState<Record<string, string>>({});
  const [results, setResults] = useState<BookRecommendation[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const p = searchParams.get("profil");
    if (p && ["bébé", "enfant", "ado", "adulte"].includes(p)) {
      setProfil(p as Profil);
      setStage("quiz");
    }
  }, [searchParams]);

  const handleProfilSelect = (p: Profil) => {
    setProfil(p);
    setStage("quiz");
    setStepIndex(0);
    setReponses({});
  };

  const handleAnswer = async (questionId: string, value: string) => {
    const newReponses = { ...reponses, [questionId]: value };
    setReponses(newReponses);

    const questions = quizQuestions[profil!];
    if (stepIndex < questions.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      // Dernière question : envoi à l'API
      setStage("loading");
      try {
        const res = await fetch("/api/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profil, reponses: newReponses }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Erreur inconnue");
        setResults(data.recommandations);
        setStage("results");
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
        setStage("error");
      }
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else {
      setStage("profil");
      setProfil(null);
    }
  };

  const handleRestart = () => {
    setStage("profil");
    setProfil(null);
    setStepIndex(0);
    setReponses({});
    setResults([]);
  };

  if (stage === "profil") {
    return <ProfilSelector onSelect={handleProfilSelect} />;
  }

  if (stage === "quiz" && profil) {
    const questions = quizQuestions[profil];
    const question = questions[stepIndex];
    return (
      <QuizStep
        question={question}
        stepIndex={stepIndex}
        totalSteps={questions.length}
        profil={profil}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    );
  }

  if (stage === "loading") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-5xl mb-6 animate-bounce">📚</div>
        <h2
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          Notre libraire IA cherche vos livres…
        </h2>
        <p style={{ color: "#6b7280" }}>
          Analyse de vos réponses et sélection personnalisée en cours…
        </p>
        <div className="mt-6 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor: "#c4622d",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (stage === "error") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-5xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#c4622d" }}>
          Une erreur est survenue
        </h2>
        <p className="mb-6 max-w-md" style={{ color: "#6b7280" }}>
          {errorMsg || "Impossible de récupérer les recommandations. Veuillez réessayer."}
        </p>
        <button className="btn-primary" onClick={handleRestart}>
          Recommencer le quiz
        </button>
      </div>
    );
  }

  if (stage === "results") {
    return (
      <ResultsPage
        recommandations={results}
        profil={profil!}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}

export default function QuizClient() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">Chargement…</div>}>
      <QuizInner />
    </Suspense>
  );
}
