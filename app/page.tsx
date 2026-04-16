import Link from "next/link";
import { BookOpen, Star, ArrowRight, Users, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quel livre offrir ? | Trouvez le cadeau littéraire idéal",
  description:
    "Vous cherchez un livre à offrir ? Notre quiz personnalisé vous guide en quelques questions vers la recommandation parfaite, adaptée à l'âge et aux goûts du destinataire.",
};

const profiles = [
  { emoji: "🍼", label: "Bébé", desc: "0 – 3 ans", color: "#4a9bb0" },
  { emoji: "📚", label: "Enfant", desc: "4 – 12 ans", color: "#2a6b7c" },
  { emoji: "🎧", label: "Ado", desc: "13 – 17 ans", color: "#c4622d" },
  { emoji: "☕", label: "Adulte", desc: "18 ans et +", color: "#1c4a57" },
];

const features = [
  {
    icon: <Sparkles size={24} style={{ color: "#c4622d" }} />,
    title: "Quiz intelligent",
    desc: "Quelques questions suffisent pour cerner les goûts du destinataire et l'occasion.",
  },
  {
    icon: <BookOpen size={24} style={{ color: "#2a6b7c" }} />,
    title: "5 recommandations sur mesure",
    desc: "Notre IA littéraire sélectionne pour vous cinq livres avec une explication personnalisée.",
  },
  {
    icon: <Star size={24} style={{ color: "#c4622d" }} />,
    title: "Achat facile",
    desc: "Chaque livre est disponible directement sur Amazon et la Fnac en un clic.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #1c2b30 0%, #2a6b7c 100%)" }}
        className="relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(196, 98, 45, 0.2)", color: "#e8844a" }}
          >
            <Sparkles size={14} />
            Recommandations par intelligence artificielle
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Vous ne savez pas quel livre offrir&nbsp;?
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#c8d8db" }}>
            Répondez à quelques questions et laissez notre quiz vous guider vers
            le cadeau littéraire idéal — pour un bébé, un enfant, un ado ou un adulte.
          </p>
          <Link href="/quiz" className="btn-primary text-lg px-8 py-4">
            Commencer le quiz gratuit →
          </Link>
          <p className="mt-4 text-sm" style={{ color: "#8aadb5" }}>
            3 minutes · Gratuit · Sans inscription
          </p>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#faf8f5" />
        </svg>
      </section>

      {/* Profils */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-center">Pour qui offrez-vous ?</h2>
        <p className="text-center mb-10" style={{ color: "#6b7280" }}>
          Notre quiz s'adapte à chaque profil pour des recommandations vraiment pertinentes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((p) => (
            <Link
              key={p.label}
              href={`/quiz?profil=${p.label.toLowerCase()}`}
              className="card p-6 text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <div
                className="font-bold text-lg mb-1"
                style={{ fontFamily: "Georgia, serif", color: p.color }}
              >
                {p.label}
              </div>
              <div className="text-sm" style={{ color: "#9ca3af" }}>
                {p.desc}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section style={{ backgroundColor: "#f0f4f5" }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((f, i) => (
              <div key={i} className="card p-6">
                <div className="mb-4">{f.icon}</div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Blog */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: "#f0f4f5", border: "1px solid #d1e4e8" }}
        >
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
            >
              Le blog littéraire
            </h2>
            <p style={{ color: "#6b7280" }}>
              Idées cadeaux, coups de cœur, actualité littéraire — pour ne jamais être à court d'inspiration.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary flex items-center gap-2 whitespace-nowrap">
            Lire le blog <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: "#2a6b7c" }} className="py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <Users size={40} className="mx-auto mb-4 opacity-80" />
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Prêt à trouver le livre parfait ?
          </h2>
          <p className="mb-8" style={{ color: "#c8d8db" }}>
            Notre quiz gratuit vous propose 5 recommandations personnalisées en moins de 3 minutes.
          </p>
          <Link href="/quiz" className="btn-primary text-lg px-8 py-4">
            Démarrer le quiz →
          </Link>
        </div>
      </section>
    </>
  );
}
