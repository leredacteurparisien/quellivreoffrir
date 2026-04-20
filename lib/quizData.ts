export type Profil = "bébé" | "enfant" | "ado" | "adulte";
export type QuestionType = "single" | "multiple" | "budget";

export interface QuizOption {
  value: string;
  label: string;
  freeText?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type?: QuestionType; // defaults to "single"
  options: QuizOption[];
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
      type: "multiple",
      options: [
        { value: "animaux", label: "🐻 Animaux" },
        { value: "nature", label: "🌿 Nature" },
        { value: "couleurs", label: "🎨 Couleurs & formes" },
        { value: "aventure", label: "🚀 Aventure & imaginaire" },
      ],
    },
    {
      id: "type_livre",
      question: "Quel type de livre préférez-vous offrir ?",
      type: "multiple",
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
      type: "budget",
      options: [],
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
      type: "multiple",
      options: [
        { value: "animaux", label: "🐾 Animaux" },
        { value: "aventure", label: "⚔️ Aventure & héros" },
        { value: "humour", label: "😂 Humour" },
        { value: "science", label: "🔬 Sciences & découvertes" },
        { value: "magie", label: "✨ Magie & fantasy" },
        { value: "autre", label: "🖊️ Autre (précisez)", freeText: true },
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
        { value: "autre", label: "🙂 Autre" },
      ],
    },
    {
      id: "type_livre",
      question: "Quel type de livre préférez-vous offrir ?",
      type: "multiple",
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
      type: "budget",
      options: [],
    },
  ],

  "ado": [
    {
      id: "occasion",
      question: "Quelle est l'occasion ?",
      options: [
        { value: "anniversaire", label: "🎂 Anniversaire" },
        { value: "noël", label: "🎄 Noël" },
        { value: "brevet", label: "🎓 Brevet" },
        { value: "bac", label: "🎓 Bac" },
        { value: "autre", label: "🎁 Autre occasion" },
      ],
    },
    {
      id: "gouts_litteraires",
      question: "Quels genres littéraires aime-t-il/elle ?",
      type: "multiple",
      options: [
        { value: "fantasy", label: "🐉 Fantasy & science-fiction" },
        { value: "thriller", label: "🔪 Thriller & policier" },
        { value: "romance", label: "💕 Romance" },
        { value: "contemporain", label: "🌆 Roman contemporain" },
        { value: "classique", label: "📜 Classiques" },
        { value: "autre", label: "🖊️ Autre (précisez)", freeText: true },
      ],
    },
    {
      id: "passions",
      question: "Quelles sont ses passions ?",
      type: "multiple",
      options: [
        { value: "musique", label: "🎵 Musique" },
        { value: "jeux vidéo", label: "🎮 Jeux vidéo" },
        { value: "sport", label: "⚽ Sport" },
        { value: "cinéma/séries", label: "🎬 Cinéma / séries" },
        { value: "art/dessin", label: "🎨 Art / dessin" },
        { value: "développement personnel", label: "🧘 Développement personnel" },
        { value: "autre", label: "🖊️ Autre (précisez)", freeText: true },
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
      id: "lecture",
      question: "Quel est son rapport à la lecture ?",
      options: [
        { value: "passionné", label: "📖 Grand lecteur/lectrice" },
        { value: "occasionnel", label: "📚 Lit de temps en temps" },
        { value: "peu lecteur", label: "🤷 Lit occasionnellement" },
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
        { value: "autre", label: "🙂 Autre" },
      ],
    },
    {
      id: "budget",
      question: "Quel est votre budget ?",
      type: "budget",
      options: [],
    },
    {
      id: "type_livre",
      question: "Quel format préférez-vous offrir ?",
      type: "multiple",
      options: [
        { value: "poche", label: "📗 Poche" },
        { value: "grand format", label: "📘 Grand format" },
        { value: "manga", label: "🇯🇵 Manga" },
        { value: "bande dessinée", label: "💬 BD / Comics" },
        { value: "beaux livres", label: "🖼️ Beaux livres" },
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
      type: "multiple",
      options: [
        { value: "littérature française", label: "📜 Littérature française" },
        { value: "roman étranger", label: "🌍 Roman étranger" },
        { value: "thriller/policier", label: "🔪 Thriller / Policier" },
        { value: "fantasy/SF", label: "🚀 Fantasy / Science-fiction" },
        { value: "romance", label: "💕 Romance" },
        { value: "historique", label: "🏰 Roman historique" },
        { value: "essais/documentaires", label: "📰 Essais / Documentaires" },
        { value: "autre", label: "🖊️ Autre (précisez)", freeText: true },
      ],
    },
    {
      id: "passions",
      question: "Quelles sont ses passions ?",
      type: "multiple",
      options: [
        { value: "histoire", label: "🏛️ Histoire" },
        { value: "philosophie", label: "🤔 Philosophie" },
        { value: "cuisine", label: "🍳 Cuisine" },
        { value: "voyage", label: "✈️ Voyage" },
        { value: "art/culture", label: "🎨 Art / Culture" },
        { value: "sciences", label: "🔬 Sciences" },
        { value: "psychologie", label: "🧠 Psychologie" },
        { value: "développement personnel", label: "🌱 Développement personnel" },
        { value: "autre", label: "🖊️ Autre (précisez)", freeText: true },
      ],
    },
    {
      id: "lecture",
      question: "Quel est son rapport à la lecture ?",
      options: [
        { value: "passionné", label: "📖 Grand lecteur/lectrice" },
        { value: "régulier", label: "📚 Lit régulièrement" },
        { value: "peu", label: "🤷 Lit peu" },
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
      type: "budget",
      options: [],
    },
    {
      id: "type_livre",
      question: "Quel format préférez-vous offrir ?",
      type: "multiple",
      options: [
        { value: "poche", label: "📗 Poche" },
        { value: "grand format", label: "📘 Grand format / broché" },
        { value: "beau livre", label: "🖼️ Beau livre / illustré" },
        { value: "bd", label: "💬 BD" },
        { value: "peu importe", label: "🤷 Peu importe" },
      ],
    },
  ],
};
