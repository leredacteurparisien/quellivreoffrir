"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur inconnue");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="card p-10 text-center"
      >
        <CheckCircle size={48} style={{ color: "#2a6b7c" }} className="mx-auto mb-4" />
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
        >
          Message envoyé !
        </h2>
        <p style={{ color: "#6b7280" }}>
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium mb-2"
            style={{ color: "#374151" }}
          >
            Votre nom *
          </label>
          <input
            id="nom"
            type="text"
            required
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              borderColor: "#d1d5db",
              backgroundColor: "#faf8f5",
              color: "#1c2b30",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2a6b7c")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ color: "#374151" }}
          >
            Votre email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              borderColor: "#d1d5db",
              backgroundColor: "#faf8f5",
              color: "#1c2b30",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2a6b7c")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            placeholder="jean@exemple.fr"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
            style={{ color: "#374151" }}
          >
            Votre message *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none"
            style={{
              borderColor: "#d1d5db",
              backgroundColor: "#faf8f5",
              color: "#1c2b30",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2a6b7c")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            placeholder="Votre message…"
          />
        </div>

        {status === "error" && (
          <p className="text-sm" style={{ color: "#dc2626" }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            "Envoi en cours…"
          ) : (
            <>
              <Send size={16} />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
