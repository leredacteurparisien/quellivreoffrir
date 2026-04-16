export type Profil = "bébé" | "enfant" | "ado" | "adulte";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

export const quizQuestions: Record<Profil, QuizQuestion[]> = {
  "bébé": [
    {
      id: "occasion",
      question: "Quelle est l'occasion ?",
      options: [
        { value: "naissance", label: "🎀 Naissance" },
        { value: "anniversaire", label: "🎂 Anniversaire" },
        { value: "noël", label: "🎄 Noël" },
        { value: "autre", label: "🎁 Autre occasion" },
      ],
    },
    {
      id: "age_precis",
      question: "Quel est l'âge précis du bébé ?",
      options: [
        { value: "0-6 mois", label: "0 – 6 mois" },
        { value: "6-12 mois", label: "6 – 12 mois" },
        { value: "1-2 ans", label: "1 – 2 ans" },
        { value: "2-3 ans", label: "2 – 3 ans" },
      ],
    },
    {
      id: "univers",
      question: "Quel univers lui plaira ?",
      options: [
        { value: "animaux", label: "🐻 Animaux" },
        { value: "nature", label: "🌿 Nature" },
        { value: "couleurs", label: "🎨 Couleurs & formes" },
        { value: "aventure", label: "🚀 Aventure & imaginaire" },
      ],
    },
    {
      id: "lien",
      question: "Quel est votre lien avec le bébé ?",
      options: [
        { value: "parent", label: "👨‍👩‍👦 Parent" },
        { value: "grands-parents", label: "👴👵 Grands-parents" },
        { value: "ami famille", label: "👫 Ami de la famille" },
        { value: "autre", label: "🙂 Autre" },
      ],
    },
    {
      id: "type_livre",
      question: "Quel type de livre préférez-vous offrir ?",
      options: [
        { value: "imagier", label: "📖 Imagier" },
        { value: "album illustré", label: "🖼️ Album illustré" },
        { value: "livre bain", label: "🛁 Livre de bain" },
        { value: "livre tissu", label: "🧸 Livre en tissu" },
      ],
    },
    {
      id: "budget",
      question: "Quel est votre budget ?",
      options: [
        { value: "moins de 10€", label: "Moins de 10 €" },
        { value: "10-20€", label: "10 – 20 €" },
        { value: "20-30€", label: "20 – 30 €" },
        { value: "plus de 30€", label: "Plus de 30 €" },
      ],
    },
  ],

  "enfant": [
    {
      id: "occasion",
      question: "Quelle est l'occasion ?",
      options: [
        { value: "anniversaire", label: "🎂 Anniversaire" },
        { value: "noël", label: "🎄 Noël" },
        { value: "fin d'année scolaire", label: "🏫 Fin d'année scolaire" },
        { value: "autre", label: "🎁 Autre occasion" },
      ],
    },
    {
      id: "age",
      question: "Quel est l'âge de l'enfant ?",
      options: [
        { value: "4-6 ans", label: "4 – 6 ans" },
        { value: "7-9 ans", label: "7 – 9 ans" },
        { value: "10-12 ans", label: "10 – 12 ans" },
      ],
    },
    {
      id: "gouts",
      question: "Quels sont ses centres d'intérêt ?",
      options: [
        { value: "animaux", label: "🐾 Animaux" },
        { value: "aventure", label: "⚔️ Aventure & héros" },
        { value: "humour", label: "😂 Humour" },
        { value: "science", label: "🔬 Sciences & découvertes" },
        { value: "magie", label: "✨ Magie & fantasy" },
      ],
    },
    {
      id: "lecture",
      question: "Quel est son niveau de lecture ?",
      options: [
        { value: "débutant", label: "📗 Débutant (apprend à lire)" },
        { value: "intermédiaire", label: "📘 Intermédiaire (lit seul)" },
        { value: "avancé", label: "📕 Avancé (grand lecteur)" },
      ],
    },
    {
      id: "lien",
      question: "Quel est votre lien avec l'enfant ?",
      options: [
        { value: "parent", label: "👨‍👩‍👦 Parent" },
        { value: "famille", label: "👨‍👩‍👧‍👦 Famille (oncle, tante…)" },
        { value: "ami", label: "👫 Ami(e)" },
        { value: "enseignant", label: "🍎 Enseignant(e)" },
      ],
    },
    {
      id: "type_livre",
      question: "Quel type de livre préférez-vous offrir ?",
      options: [
        { value: "roman", label: "📚 Roman" },
        { value: "bande dessinée", label: "💬 Bande dessinée" },
        { value: "documentaire", label: "🔭 Documentaire" },
        { value: "livre illustré", label: "🎨 Livre illustré" },
      ],
    },
    {
      id: "budget",
      question: "Quel est votre budget ?",
      options: [
        { value: "moins de 10€", label: "Moins de 10 €" },
        { value: "10-15€", label: "10 – 15 €" },
        { value: "15-25€", label: "15 – 25 €" },
        { value: "plus de 25€", label: "Plus de 25 €" },
      ],
    },
  ],

  "ado": [
    {
      id: "occasion",
      question: "Quelle est l'occasion ?",
      options: [
        { value: "anniversaire", label: "🎂 Anniversaire" },
        { value: "noël", label: "🎄 Noël" },
        { value: "bac/brevet", label: "🎓 Bac / Brevet" },
        { value: "autre", label: "🎁 Autre occasion" },
      ],
    },
    {
      id: "gouts_litteraires",
      question: "Quels genres littéraires aime-t-il/elle ?",
      options: [
        { value: "fantasy", label: "🐉 Fantasy & science-fiction" },
        { value: "thriller", label: "🔪 Thriller & policier" },
        { value: "romance", label: "💕 Romance" },
        { value: "contemporain", label: "🌆 Roman contemporain" },
        { value: "classique", label: "📜 Classiques" },
      ],
    },
    {
      id: "essais",
      question: "Est-il/elle ouvert(e) aux essais ou documentaires ?",
      options: [
        { value: "oui", label: "✅ Oui, volontiers" },
        { value: "non", label: "❌ Non, plutôt fiction" },
        { value: "peut-être", label: "🤔 Pourquoi pas" },
      ],
    },
    {
      id: "passions",
      question: "Quelles sont ses passions ?",
      options: [
        { value: "musique", label: "🎵 Musique" },
        { value: "jeux vidéo", label: "🎮 Jeux vidéo" },
        { value: "sport", label: "⚽ Sport" },
        { value: "cinéma/séries", label: "🎬 Cinéma / séries" },
        { value: "art/dessin", label: "🎨 Art / dessin" },
        { value: "développement personnel", label: "🧘 Développement personnel" },
      ],
    },
    {
      id: "lecture",
      question: "Quel est son rapport à la lecture ?",
      options: [
        { value: "passionné", label: "📖 Grand lecteur/lectrice" },
        { value: "occasionnel", label: "📚 Lit de temps en temps" },
        { value: "peu lecteur", label: "🤷 Peu lecteur/lectrice" },
      ],
    },
    {
      id: "lien",
      question: "Quel est votre lien avec l'ado ?",
      options: [
        { value: "parent", label: "👨‍👩‍👦 Parent" },
        { value: "famille", label: "👨‍👩‍👧‍👦 Famille" },
        { value: "ami", label: "👫 Ami(e)" },
        { value: "enseignant", label: "🍎 Enseignant(e)" },
      ],
    },
    {
      id: "budget",
      question: "Quel est votre budget ?",
      options: [
        { value: "moins de 10€", label: "Moins de 10 €" },
        { value: "10-20€", label: "10 – 20 €" },
        { value: "20-30€", label: "20 – 30 €" },
        { value: "plus de 30€", label: "Plus de 30 €" },
      ],
    },
    {
      id: "type_livre",
      question: "Quel format préférez-vous offrir ?",
      options: [
        { value: "poche", label: "📗 Poche" },
        { value: "grand format", label: "📘 Grand format" },
        { value: "manga", label: "🇯🇵 Manga" },
        { value: "bande dessinée", label: "💬 BD / Comics" },
      ],
    },
    {
      id: "langue",
      question: "Dans quelle langue ?",
      options: [
        { value: "français", label: "🇫🇷 Français" },
        { value: "anglais", label: "🇬🇧 Anglais (pour pratiquer)" },
        { value: "les deux", label: "🌍 Peu importe" },
      ],
    },
  ],

  "adulte": [
    {
      id: "occasion",
      question: "Quelle est l'occasion ?",
      options: [
        { value: "anniversaire", label: "🎂 Anniversaire" },
        { value: "noël", label: "🎄 Noël" },
        { value: "fête des mères/pères", label: "💐 Fête des mères / pères" },
        { value: "retraite", label: "🎊 Départ en retraite" },
        { value: "autre", label: "🎁 Autre occasion" },
      ],
    },
    {
      id: "gouts_litteraires",
      question: "Quels genres littéraires apprécie-t-il/elle ?",
      options: [
        { value: "littérature française", label: "📜 Littérature française" },
        { value: "roman étranger", label: "🌍 Roman étranger" },
        { value: "thriller/policier", label: "🔪 Thriller / Policier" },
        { value: "fantasy/SF", label: "🚀 Fantasy / Science-fiction" },
        { value: "romance", label: "💕 Romance" },
        { value: "historique", label: "🏰 Roman historique" },
      ],
    },
    {
      id: "essais",
      question: "Est-il/elle ouvert(e) aux essais et documentaires ?",
      options: [
        { value: "oui", label: "✅ Oui, très ouvert(e)" },
        { value: "non", label: "❌ Non, préfère la fiction" },
        { value: "peut-être", label: "🤔 Selon le sujet" },
      ],
    },
    {
      id: "passions",
      question: "Quelles sont ses passions ?",
      options: [
        { value: "histoire", label: "🏛️ Histoire" },
        { value: "philosophie", label: "🤔 Philosophie" },
        { value: "cuisine", label: "🍳 Cuisine" },
        { value: "voyage", label: "✈️ Voyage" },
        { value: "art/culture", label: "🎨 Art / Culture" },
        { value: "sciences", label: "🔬 Sciences" },
        { value: "psychologie", label: "🧠 Psychologie" },
        { value: "développement personnel", label: "🌱 Développement personnel" },
      ],
    },
    {
      id: "lecture",
      question: "Quel est son rapport à la lecture ?",
      options: [
        { value: "passionné", label: "📖 Grand lecteur/lectrice" },
        { value: "régulier", label: "📚 Lit régulièrement" },
        { value: "occasionnel", label: "🤷 Lit occasionnellement" },
      ],
    },
    {
      id: "lien",
      question: "Quel est votre lien avec le destinataire ?",
      options: [
        { value: "conjoint/e", label: "❤️ Conjoint(e)" },
        { value: "ami proche", label: "👫 Ami(e) proche" },
        { value: "parent", label: "👴👵 Parent" },
        { value: "collègue", label: "💼 Collègue" },
        { value: "autre", label: "🙂 Autre" },
      ],
    },
    {
      id: "budget",
      question: "Quel est votre budget ?",
      options: [
        { value: "moins de 10€", label: "Moins de 10 €" },
        { value: "10-20€", label: "10 – 20 €" },
        { value: "20-30€", label: "20 – 30 €" },
        { value: "plus de 30€", label: "Plus de 30 €" },
      ],
    },
    {
      id: "type_livre",
      question: "Quel format préférez-vous offrir ?",
      options: [
        { value: "poche", label: "📗 Poche" },
        { value: "grand format", label: "📘 Grand format / broché" },
        { value: "beau livre", label: "🖼️ Beau livre / illustré" },
        { value: "peu importe", label: "🤷 Peu importe" },
      ],
    },
    {
      id: "langue",
      question: "Dans quelle langue ?",
      options: [
        { value: "français", label: "🇫🇷 Français" },
        { value: "anglais", label: "🇬🇧 Anglais" },
        { value: "les deux", label: "🌍 Peu importe" },
      ],
    },
  ],
};
