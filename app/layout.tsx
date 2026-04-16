import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Quel livre offrir ? | Trouvez le cadeau littéraire idéal",
    template: "%s | Quel livre offrir ?",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
