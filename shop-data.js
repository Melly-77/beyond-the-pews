// ============================================
// SHOP-PRODUKTE — Beyond the Pews
// ============================================
// So fügst du ein neues Produkt hinzu: kopiere einen ganzen Block
// (von { bis },) und trage deine eigenen Infos ein.
//
// price: als Text, z.B. "24,90 €" (kein Zahlungssystem eingebaut —
//        der Link führt zu deinem externen Shop / Zahlungsanbieter,
//        z.B. Amazon, ein eigener Stripe-/PayPal-Link, etc.)
// link:  wohin der "Ansehen"-Button führt. Leer lassen ("") für
//        "Demnächst verfügbar" ohne Link.
// category: für die Filter-Buttons oben auf der Seite
// ============================================

const shopData = [
  {
    name: "Lutherbibel 1912 — Schmuckausgabe",
    category: "Bibeln",
    price: "34,90 €",
    image: "https://placehold.co/400x400/5C1A2C/FAF5EF?text=Bibel",
    desc: "Hochwertige Ausgabe der Lutherbibel mit Kunstledereinband und Goldschnitt.",
    link: ""
  },
  {
    name: "Andachtsbuch: Jeden Tag ein Altar",
    category: "Bücher",
    price: "18,90 €",
    image: "https://placehold.co/400x400/B8755A/FAF5EF?text=Andacht",
    desc: "30 Impulse, um Glauben im Alltag sichtbar zu machen — passend zum Podcast.",
    link: ""
  },
  {
    name: "Bibelstudien-Journal",
    category: "Bücher",
    price: "16,50 €",
    image: "https://placehold.co/400x400/D6A088/2A1015?text=Journal",
    desc: "Ein geführtes Journal für tägliche Bibellese mit Platz für eigene Notizen.",
    link: ""
  }
];
