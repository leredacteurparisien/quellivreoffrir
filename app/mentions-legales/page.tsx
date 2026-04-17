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
            <strong>Alexandre Giraud</strong><br />
            9 rue des Longs Prés<br />
            92100 Boulogne-Billancourt, France<br />
            Email :{" "}
            <a href="mailto:contact@quellivreoffrir.fr" style={{ color: "#c4622d" }}>
              contact@quellivreoffrir.fr
            </a>
            <br />
            SIRET : 87832960600049
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
            13 rue Jacques Peirotes<br />
            67000 Strasbourg, France<br />
            <a href="https://scalingo.com" style={{ color: "#c4622d" }}>
              scalingo.com
            </a>
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            Développement
          </h2>
          <p className="leading-relaxed">
            Ce site a été développé avec{" "}
            <a href="https://nextjs.org" style={{ color: "#c4622d" }}>
              Next.js
            </a>
            , un framework React open source édité par Vercel.
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
            L&apos;ensemble du contenu de ce site (textes, images, logos) est protégé par le droit
            d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable
            de l&apos;éditeur.
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
            Ce site participe aux programmes d&apos;affiliation d&apos;Amazon et de la Fnac. À ce titre,
            certains liens présents sur le site sont des liens affiliés. Si vous cliquez sur ces
            liens et effectuez un achat, l&apos;éditeur perçoit une commission sans que cela engendre de
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
            conservées. Le formulaire de contact collecte votre nom et adresse email dans le seul
            but de vous répondre.
          </p>
          <p className="mt-3 leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer
            ce droit, contactez-nous à{" "}
            <a href="mailto:contact@quellivreoffrir.fr" style={{ color: "#c4622d" }}>
              contact@quellivreoffrir.fr
            </a>
            .
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
            Ce site utilise des cookies fonctionnels et d&apos;analyse afin d&apos;améliorer votre
            expérience de navigation. Vous pouvez accepter ou refuser ces cookies via la
            bannière qui s&apos;affiche lors de votre première visite. Pour en savoir plus, consultez
            notre{" "}
            <a href="/politique-de-confidentialite" style={{ color: "#c4622d" }}>
              politique de confidentialité
            </a>
            .
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
            Les recommandations de livres sont générées par l&apos;API Claude d&apos;Anthropic. Elles sont
            fournies à titre indicatif. L&apos;éditeur du site ne saurait être tenu responsable des
            recommandations proposées.
          </p>
        </section>
      </div>
    </div>
  );
}
