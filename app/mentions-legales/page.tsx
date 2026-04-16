import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales – Quel livre offrir ?",
  description: "Mentions légales du site quellivreoffrir.fr",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1
        className="text-4xl font-bold mb-10"
        style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
      >
        Mentions légales
      </h1>

      <div className="space-y-8" style={{ color: "#374151" }}>
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Éditeur du site
          </h2>
          <p className="leading-relaxed">
            Le site <strong>quellivreoffrir.fr</strong> est édité par :<br />
            [À compléter : Nom / Raison sociale]<br />
            [Adresse]<br />
            [Email de contact]
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Hébergement
          </h2>
          <p className="leading-relaxed">
            Ce site est hébergé par :<br />
            <strong>Scalingo SAS</strong><br />
            15 avenue du Rhin, 67100 Strasbourg, France<br />
            <a href="https://scalingo.com" style={{ color: "#c4622d" }}>scalingo.com</a>
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Propriété intellectuelle
          </h2>
          <p className="leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, logos) est protégé par le droit
            d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Liens affiliés
          </h2>
          <p className="leading-relaxed">
            Ce site participe aux programmes d'affiliation d'Amazon et de la Fnac. À ce titre,
            certains liens présents sur le site sont des liens affiliés. Si vous cliquez sur ces
            liens et effectuez un achat, nous percevons une commission sans que cela engendre de
            surcoût pour vous.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Données personnelles
          </h2>
          <p className="leading-relaxed">
            Ce site ne collecte pas de données personnelles à des fins commerciales. Les réponses
            au quiz sont utilisées uniquement pour générer des recommandations et ne sont pas
            conservées. Le formulaire de contact collecte votre nom et email dans le seul but de
            vous répondre.
          </p>
          <p className="mt-3 leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer
            ce droit, contactez-nous via le formulaire de contact.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Cookies
          </h2>
          <p className="leading-relaxed">
            Ce site utilise uniquement des cookies techniques indispensables à son fonctionnement.
            Aucun cookie publicitaire ou de pistage n'est utilisé.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Intelligence artificielle
          </h2>
          <p className="leading-relaxed">
            Les recommandations de livres sont générées par l'API Claude d'Anthropic. Elles sont
            fournies à titre indicatif. L'éditeur du site ne saurait être tenu responsable des
            recommandations proposées.
          </p>
        </section>
      </div>
    </div>
  );
}
