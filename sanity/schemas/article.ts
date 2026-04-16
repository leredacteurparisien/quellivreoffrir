export default {
  name: "article",
  type: "document",
  title: "Article de blog",
  fields: [
    {
      name: "titre",
      type: "string",
      title: "Titre",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug (URL)",
      options: { source: "titre", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "date",
      type: "date",
      title: "Date de publication",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "auteur",
      type: "string",
      title: "Auteur de l'article",
    },
    {
      name: "image",
      type: "image",
      title: "Image de couverture",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Texte alternatif" },
      ],
    },
    {
      name: "categorie",
      type: "string",
      title: "Catégorie",
      options: {
        list: [
          { value: "idees-cadeaux", title: "Idées cadeaux" },
          { value: "actualite-litteraire", title: "Actualité littéraire" },
          { value: "coups-de-coeur", title: "Coups de cœur" },
        ],
      },
    },
    {
      name: "extrait",
      type: "text",
      title: "Extrait / Description courte",
      rows: 3,
    },
    {
      name: "contenu",
      type: "array",
      title: "Contenu",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    },
  ],
};
