import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticleBySlug, getAllArticles } from "@/sanity/queries";
import { Calendar, Tag, ChevronLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";

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

export async function generateStaticParams() {
  try {
    const articles = await getAllArticles();
    return articles.map((a) => ({ slug: a.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleBySlug(slug);
    if (!article) return {};
    return {
      title: article.titre,
      description: article.extrait,
      openGraph: {
        title: article.titre,
        description: article.extrait,
        images: article.image?.asset?.url ? [article.image.asset.url] : [],
      },
    };
  } catch {
    return {};
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="prose-book" style={{ fontSize: "1.5rem", color: "#2a6b7c", margin: "1.5rem 0 0.75rem", fontFamily: "Georgia, serif" }}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{ fontSize: "1.25rem", color: "#1c4a57", margin: "1.25rem 0 0.5rem", fontFamily: "Georgia, serif" }}>
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#374151" }}>{children}</p>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} style={{ color: "#c4622d", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article = null;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    // Sanity non configuré
  }

  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Retour */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm mb-8 transition-colors"
        style={{ color: "#6b7280" }}
      >
        <ChevronLeft size={16} />
        Retour au blog
      </Link>

      {/* Catégorie */}
      {article.categorie && (
        <div className="flex items-center gap-1 text-xs font-semibold mb-4" style={{ color: "#c4622d" }}>
          <Tag size={12} />
          {categorieLabels[article.categorie] ?? article.categorie}
        </div>
      )}

      {/* Titre */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
        style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
      >
        {article.titre}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#9ca3af" }}>
        <Calendar size={14} />
        <span>{formatDate(article.date)}</span>
        {article.auteur && <span>· Par {article.auteur}</span>}
      </div>

      {/* Image de couverture */}
      {article.image?.asset?.url && (
        <div className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden mb-10">
          <Image
            src={article.image.asset.url}
            alt={article.image.alt ?? article.titre}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      {/* Extrait */}
      {article.extrait && (
        <p
          className="text-lg leading-relaxed mb-8 font-medium border-l-4 pl-4"
          style={{ color: "#374151", borderColor: "#c4622d" }}
        >
          {article.extrait}
        </p>
      )}

      {/* Contenu Portable Text */}
      {article.contenu && (
        <div className="prose-book">
          <PortableText value={article.contenu as Parameters<typeof PortableText>[0]["value"]} components={portableTextComponents} />
        </div>
      )}

      {/* CTA Quiz */}
      <div
        className="mt-12 p-6 rounded-2xl text-center"
        style={{ backgroundColor: "#f0f4f5", border: "1px solid #d1e4e8" }}
      >
        <p
          className="font-bold text-lg mb-2"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          Besoin d&apos;autres idées de livres ?
        </p>
        <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
          Faites notre quiz pour recevoir 5 recommandations personnalisées.
        </p>
        <Link href="/quiz" className="btn-primary">
          Faire le quiz →
        </Link>
      </div>
    </article>
  );
}
