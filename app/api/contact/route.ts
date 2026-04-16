import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nom, email, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide" }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: "Message trop long (2000 caractères max)" }, { status: 400 });
    }

    // TODO: intégrer un service d'envoi d'email (Resend, SendGrid, etc.)
    // Pour l'instant, on log en développement
    console.log("Nouveau message de contact:", { nom, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
