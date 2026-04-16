import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos – Quel livre offrir ?",
  description:
    "Découvrez l'histoire et la mission de Quel livre offrir ?, le site qui aide à trouver le cadeau littéraire idéal grâce à l'intelligence artificielle.",
};

export default function AProposPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* En-tête */}
      <div className="text-center mb-12">
        <BookOpen size={48} style={{ color: "#c4622d" }} className="mx-auto mb-4" />
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          À propos
        </h1>
        <p className="text-lg" style={{ color: "#6b7280" }}>
          Le projet derrière <strong>Quel livre offrir&nbsp;?</strong>
        </p>
      </div>

      {/* Contenu */}
      <div className="space-y-8">
        <div className="card p-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart size={22} style={{ color: "#c4622d" }} />
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
            >
              Notre mission
            </h2>
          </div>
          <p className="leading-relaxed mb-4" style={{ color: "#374151" }}>
            Offrir un livre, c'est offrir une aventure. Mais trouver <em>le bon livre</em> — celui qui
            correspondra vraiment à la personne, à son âge, à ses goûts et à l'occasion — peut
            s'avérer un véritable casse-tête.
          </p>
          <p className="leading-relaxed" style={{ color: "#374151" }}>
            <strong>Quel livre offrir ?</strong> est né pour résoudre exactement ce problème.
            Notre quiz intelligent, alimenté par l'intelligence artificielle, analyse vos réponses
            et vous propose cinq recommandations vraiment adaptées, comme si vous aviez demandé
            conseil à un libraire passionné.
          </p>
        </div>

        <div className="card p-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={22} style={{ color: "#2a6b7c" }} />
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
            >
              Comment ça fonctionne ?
            </h2>
          </div>
          <ol className="space-y-3" style={{ color: "#374151" }}>
            {[
              "Choisissez le profil du destinataire : bébé, enfant, ado ou adulte.",
              "Répondez à quelques questions sur ses goûts, l'occasion, votre budget.",
              "Notre intelligence artificielle analyse vos réponses et sélectionne 5 livres parfaitement adaptés.",
              "Chaque recommandation est accompagnée d'une explication personnalisée et de liens pour acheter directement sur Amazon ou la Fnac.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: "#c4622d" }}
                >
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="card p-8">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Un mot sur les liens affiliés
          </h2>
          <p className="leading-relaxed" style={{ color: "#374151" }}>
            Les liens vers Amazon et la Fnac présents sur ce site sont des liens affiliés.
            Cela signifie que si vous achetez un livre via ces liens, nous percevons une petite
            commission — sans aucun surcoût pour vous. Ces commissions nous permettent de maintenir
            ce service gratuit et de continuer à développer le site.
          </p>
        </div>

        <div className="text-center">
          <Link href="/quiz" className="btn-primary text-lg px-8 py-4">
            Essayer le quiz →
          </Link>
        </div>
      </div>
    </div>
  );
}
