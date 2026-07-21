// Dati dei 3 kit del verticale golf — fonte unica per /golf e le pagine di dettaglio.
export interface GolfKit {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  includes: string[];
  priceLabel: string;
  metaTitle: string;
  metaDescription: string;
}

export const GOLF_KITS: GolfKit[] = [
  {
    slug: 'kit-gara',
    name: 'Kit Gara Sponsor',
    eyebrow: 'per lo sponsor',
    tagline: 'Il kit che lo sponsor prenota con una telefonata.',
    description:
      "L'allestimento completo per intestare una gara al proprio brand: bandiere sul percorso, banner e il roll up per la premiazione. Prezzo fisso, grafica inclusa, consegna confermata prima della gara.",
    includes: [
      '18 bandiere gara personalizzate con il logo sponsor',
      '2 banner',
      'Tee marker personalizzati ([TBD-QTY-TEEMARKER] pezzi)',
      '1 roll up per la premiazione',
    ],
    priceLabel: '[TBD-PREZZO-KIT-GARA]',
    metaTitle: 'Kit Gara Sponsor — Bandiere e Allestimento Gara Golf | 2promo',
    metaDescription:
      "Kit Gara Sponsor: 18 bandiere gara logate, 2 banner, tee marker e roll up premiazione. Prezzo fisso, grafica inclusa, consegna confermata prima della gara.",
  },
  {
    slug: 'kit-circolo',
    name: 'Kit Circolo',
    eyebrow: 'per il circolo',
    tagline: "L'identità del club, dal cancello alla buca 18.",
    description:
      "Il pacchetto per chi vuole vestire il campo con l'immagine del circolo: bandiere personalizzate, tovaglia per le premiazioni e totem all'ingresso.",
    includes: [
      'Bandiere personalizzate del club ([TBD-QTY] pezzi)',
      'Tovaglia premiazioni',
      "Totem ingresso",
    ],
    priceLabel: '[TBD-PREZZO-KIT-CIRCOLO]',
    metaTitle: 'Kit Circolo — Bandiere e Allestimento Golf Club | 2promo',
    metaDescription:
      "Kit Circolo: bandiere personalizzate del club, tovaglia premiazioni, totem ingresso. Prezzo fisso, grafica inclusa, consegna confermata.",
  },
  {
    slug: 'kit-green',
    name: 'Kit Green',
    eyebrow: 'ricambio stagionale',
    tagline: "Il campo pronto all'apertura, senza pensarci.",
    description:
      "Il ricambio stagionale per riaprire il campo con le bandiere in ordine: set completo per le 18 buche più il materiale tessile di ricambio.",
    includes: [
      'Set bandiere campo (18 buche)',
      'Materiale tessile di ricambio',
    ],
    priceLabel: '[TBD-PREZZO-KIT-GREEN]',
    metaTitle: 'Kit Green — Bandiere Campo Golf 18 Buche | 2promo',
    metaDescription:
      "Kit Green: set bandiere campo per le 18 buche e materiale tessile di ricambio per il rinnovo stagionale. Prezzo fisso, consegna confermata.",
  },
];

export const getGolfKit = (slug: string): GolfKit | undefined =>
  GOLF_KITS.find((k) => k.slug === slug);
