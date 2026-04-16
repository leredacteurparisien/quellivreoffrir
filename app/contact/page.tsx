import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact – Quel livre offrir ?",
  description:
    "Une question, une suggestion ? Contactez l'équipe de Quel livre offrir ? via notre formulaire de contact.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
        >
          Nous contacter
        </h1>
        <p style={{ color: "#6b7280" }}>
          Une question, une suggestion ou un partenariat ? Nous vous répondons dans les 48&nbsp;h.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
