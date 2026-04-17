import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Quiz – Trouvez le livre idéal",
  description:
    "Répondez à quelques questions et recevez 5 recommandations de livres personnalisées, adaptées au profil et aux goûts du destinataire.",
};

export default function QuizPage() {
  return (
    <>
      <h1 className="sr-only">Quiz – Trouvez le livre idéal à offrir</h1>
      <QuizClient />
    </>
  );
}
