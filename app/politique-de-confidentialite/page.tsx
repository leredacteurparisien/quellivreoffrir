import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité – Quel livre offrir ?",
  description:
    "Politique de confidentialité et gestion des données personnelles du site quellivreoffrir.fr",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: "Georgia, serif", color: "#2a6b7c" }}
      >
        Politique de confidentialité
      </h1>
      <p className="text-sm mb-10" style={{ color: "#8aadb5" }}>
        Dernière mise à jour : avril 2026
      </p>

      <div className="space-y-8" style={{ color: "#374151" }}>
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            1. Responsable du traitement
          </h2>
          <p className="leading-relaxed">
            Le responsable du traitement des données collectées sur ce site est :<br />
            <strong>Alexandre Giraud</strong><br />
            9 rue des Longs Prés, 92100 Boulogne-Billancourt<br />
            Email :{" "}
            <a href="mailto:contact@quellivreoffrir.fr" style={{ color: "#c4622d" }}>
              contact@quellivreoffrir.fr
            </a>
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            2. Cookies utilisés
          </h2>
          <p className="leading-relaxed mb-4">
            Ce site utilise des cookies pour améliorer votre expérience de navigation. Lors de
            votre première visite, une bannière vous permet d&apos;accepter ou de refuser leur dépôt.
            Votre choix est mémorisé pour vos visites ultérieures.
          </p>

          <h3
            className="text-base font-semibold mb-2"
            style={{ color: "#2a6b7c" }}
          >
            Cookies fonctionnels
          </h3>
          <p className="leading-relaxed mb-4">
            Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent notamment
            de mémoriser votre consentement aux cookies et de maintenir le bon déroulement du quiz.
            Ils ne collectent aucune donnée personnelle identifiable.
          </p>

          <h3
            className="text-base font-semibold mb-2"
            style={{ color: "#2a6b7c" }}
          >
            Cookies d&apos;analyse
          </h3>
          <p className="leading-relaxed">
            Ces cookies nous permettent de mesurer l&apos;audience du site de façon anonyme
            (pages visitées, durée des sessions, origines du trafic) afin d&apos;améliorer nos
            contenus. Ces données sont agrégées et non revendues à des tiers. Ils ne sont
            déposés qu&apos;avec votre consentement explicite.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            3. Formulaire de contact
          </h2>
          <p className="leading-relaxed">
            Lorsque vous utilisez le formulaire de contact, nous collectons votre nom et votre
            adresse email. Ces données sont utilisées exclusivement pour vous répondre et ne sont
            ni cédées, ni vendues, ni louées à des tiers. Elles ne font l&apos;objet d&apos;aucun
            traitement commercial.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            4. Liens affiliés Amazon et Fnac
          </h2>
          <p className="leading-relaxed">
            Ce site participe aux programmes d&apos;affiliation d&apos;Amazon (Amazon Associates) et de la
            Fnac. Certains liens vers des produits sont des liens affiliés : si vous cliquez et
            effectuez un achat, nous percevons une commission sans surcoût pour vous.
          </p>
          <p className="mt-3 leading-relaxed">
            Ces plateformes tierces peuvent déposer leurs propres cookies lors de votre visite
            sur leurs sites. Nous vous invitons à consulter leurs politiques de confidentialité
            respectives pour en savoir plus.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            5. Vos droits
          </h2>
          <p className="leading-relaxed mb-3">
            Conformément au Règlement Général sur la Protection des Données (RGPD – Règlement UE
            2016/679), vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc list-inside space-y-1 leading-relaxed" style={{ color: "#374151" }}>
            <li>
              <strong>Droit d&apos;accès</strong> : obtenir une copie des données vous concernant.
            </li>
            <li>
              <strong>Droit de rectification</strong> : corriger des données inexactes ou
              incomplètes.
            </li>
            <li>
              <strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données.
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong> : vous opposer à un traitement de vos données.
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : recevoir vos données dans un format
              structuré.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Pour exercer ces droits, contactez-nous par email à{" "}
            <a href="mailto:contact@quellivreoffrir.fr" style={{ color: "#c4622d" }}>
              contact@quellivreoffrir.fr
            </a>
            . Nous nous engageons à vous répondre dans un délai de 30 jours. Vous disposez
            également du droit d&apos;introduire une réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c4622d" }}
            >
              CNIL
            </a>
            .
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            6. Sécurité des données
          </h2>
          <p className="leading-relaxed">
            Ce site est hébergé par Scalingo SAS (Strasbourg, France), un hébergeur européen
            garantissant que vos données restent sur le territoire de l&apos;Union européenne. Des
            mesures techniques appropriées sont mises en œuvre pour protéger vos données contre
            tout accès non autorisé.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#1c2b30" }}
          >
            7. Modifications de cette politique
          </h2>
          <p className="leading-relaxed">
            Cette politique de confidentialité peut être mise à jour à tout moment. La date de
            dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à
            la consulter régulièrement.
          </p>
        </section>
      </div>
    </div>
  );
}
