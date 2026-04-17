import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsProvider from "@/components/AnalyticsProvider";

export const metadata: Metadata = {
  title: {
    default: "Quel livre offrir ? | Trouvez le cadeau littéraire idéal",
    template: "%s | Quel livre offrir ?",
  },
  verification: {
    google: "ec74d311150bbb05",
  },
  description:
    "Trouvez le livre parfait à offrir grâce à notre quiz personnalisé. Recommandations adaptées à chaque profil : bébé, enfant, ado ou adulte.",
  metadataBase: new URL("https://quellivreoffrir.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://quellivreoffrir.fr",
    siteName: "Quel livre offrir ?",
    title: "Quel livre offrir ? | Trouvez le cadeau littéraire idéal",
    description:
      "Trouvez le livre parfait à offrir grâce à notre quiz personnalisé.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quel livre offrir ?",
    description: "Trouvez le livre parfait à offrir grâce à notre quiz personnalisé.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Quel livre offrir ?",
  url: "https://quellivreoffrir.fr",
  description:
    "Trouvez le livre idéal à offrir grâce à notre quiz personnalisé et nos recommandations par IA.",
  publisher: {
    "@type": "Organization",
    name: "Quel livre offrir ?",
    url: "https://quellivreoffrir.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
