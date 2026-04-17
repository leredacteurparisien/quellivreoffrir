"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1c2b30",
        borderTop: "1px solid #2a4a55",
        zIndex: 1000,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1 leading-relaxed" style={{ color: "#c8d8db" }}>
          Ce site utilise des cookies fonctionnels et d'analyse pour améliorer
          votre expérience. Consultez notre{" "}
          <Link
            href="/politique-de-confidentialite"
            style={{ color: "#4a9bb0" }}
            className="underline hover:text-white transition-colors"
          >
            politique de confidentialité
          </Link>{" "}
          pour en savoir plus.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleRefuse}
            className="text-sm px-4 py-2 rounded transition-colors"
            style={{
              border: "1px solid #2a4a55",
              color: "#8aadb5",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#4a9bb0";
              (e.currentTarget as HTMLButtonElement).style.color = "#c8d8db";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a4a55";
              (e.currentTarget as HTMLButtonElement).style.color = "#8aadb5";
            }}
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="text-sm px-4 py-2 rounded transition-colors font-medium"
            style={{
              backgroundColor: "#c4622d",
              color: "#faf8f5",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e8844a";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c4622d";
            }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
