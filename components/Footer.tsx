import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1c2b30", color: "#c8d8db" }} className="mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 - Marque */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={22} style={{ color: "#c4622d" }} />
              <span
                className="font-bold text-base"
                style={{ fontFamily: "Georgia, serif", color: "#faf8f5" }}
              >
                Quel livre offrir ?
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8aadb5" }}>
              Trouvez le livre parfait à offrir grâce à notre quiz intelligent,
              adapté à chaque profil et chaque occasion.
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#4a9bb0" }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/quiz", label: "Faire le quiz" },
                { href: "/blog", label: "Blog littéraire" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "#8aadb5" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Légal */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#4a9bb0" }}
            >
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "#8aadb5" }}
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs" style={{ color: "#5a7a82" }}>
              Les liens vers Amazon et la Fnac sont des liens affiliés. En
              achetant via ces liens, vous soutenez le site sans surcoût pour
              vous.
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{ borderColor: "#2a4a55", color: "#5a7a82" }}
        >
          © {new Date().getFullYear()} Quel livre offrir ? — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
