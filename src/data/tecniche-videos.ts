// Rubrica video "Tecniche di Stampa": fonte unica per la griglia e per il relativo JSON-LD VideoObject.
export interface TecnicaVideo {
  slug: string;
  episodio: number;
  titolo: string;
  descrizione: string;
  video: string;
  poster: string;
  durataSecondi: number;
}

const BASE = '/videos/tecniche-di-stampa';

export const TECNICHE_VIDEOS: TecnicaVideo[] = [
  {
    slug: 'tampografia',
    episodio: 1,
    titolo: 'Tampografia',
    descrizione:
      'Trasferisce il logo su superfici curve e piccole (penne, accendini, oggetti tondi) con dettaglio preciso e colori pieni. Ideale per grandi quantità.',
    video: `${BASE}/tecniche-stampa-01-tampografia.mp4`,
    poster: `${BASE}/tecniche-stampa-01-tampografia.jpg`,
    durataSecondi: 31,
  },
  {
    slug: 'stampa-digitale',
    episodio: 2,
    titolo: 'Stampa Digitale',
    descrizione: 'Full color, edge-to-edge, sfumature e forme senza limiti. Perfetta quando il logo ha più colori.',
    video: `${BASE}/tecniche-stampa-02-stampa-digitale.mp4`,
    poster: `${BASE}/tecniche-stampa-02-stampa-digitale.jpg`,
    durataSecondi: 37,
  },
  {
    slug: 'incisione-laser',
    episodio: 3,
    titolo: 'Incisione Laser',
    descrizione: "Niente inchiostro: il laser incide il materiale. Risultato elegante e permanente su metallo, legno, penne premium.",
    video: `${BASE}/tecniche-stampa-03-incisione-laser.mp4`,
    poster: `${BASE}/tecniche-stampa-03-incisione-laser.jpg`,
    durataSecondi: 41,
  },
  {
    slug: 'serigrafia',
    episodio: 4,
    titolo: 'Serigrafia',
    descrizione: 'Colori pieni, coprenti e resistentissimi. La scelta giusta per grandi quantità con tinte piatte.',
    video: `${BASE}/tecniche-stampa-04-serigrafia.mp4`,
    poster: `${BASE}/tecniche-stampa-04-serigrafia.jpg`,
    durataSecondi: 54,
  },
  {
    slug: 'transfer-serigrafico',
    episodio: 5,
    titolo: 'Transfer Serigrafico',
    descrizione: 'La resa della serigrafia applicata a caldo: dettagli fini anche su superfici difficili.',
    video: `${BASE}/tecniche-stampa-05-transfer-serigrafico.mp4`,
    poster: `${BASE}/tecniche-stampa-05-transfer-serigrafico.jpg`,
    durataSecondi: 43,
  },
  {
    slug: 'transfer-digitale',
    episodio: 6,
    titolo: 'Transfer Digitale',
    descrizione: 'Colori pieni trasferiti a caldo: loghi complessi anche in piccole quantità.',
    video: `${BASE}/tecniche-stampa-06-transfer-digitale.mp4`,
    poster: `${BASE}/tecniche-stampa-06-transfer-digitale.jpg`,
    durataSecondi: 41,
  },
  {
    slug: 'ricamo',
    episodio: 7,
    titolo: 'Ricamo',
    descrizione: 'Il logo cucito filo su filo: percezione premium e durata infinita su polo, cappellini, giacche.',
    video: `${BASE}/tecniche-stampa-07-ricamo.mp4`,
    poster: `${BASE}/tecniche-stampa-07-ricamo.jpg`,
    durataSecondi: 32,
  },
  {
    slug: 'sublimazione',
    episodio: 8,
    titolo: 'Sublimazione',
    descrizione: 'Il colore si fonde con le fibre: stampa all-over morbida, che non si sente al tatto. Ideale per poliestere.',
    video: `${BASE}/tecniche-stampa-08-sublimazione.mp4`,
    poster: `${BASE}/tecniche-stampa-08-sublimazione.jpg`,
    durataSecondi: 34,
  },
  {
    slug: 'transfer-digitale-tessuto',
    episodio: 9,
    titolo: 'Transfer Digitale su Tessuto',
    descrizione: 'Loghi multicolore trasferiti a caldo sul tessuto, anche in piccole quantità.',
    video: `${BASE}/tecniche-stampa-09-transfer-digitale-tessuto.mp4`,
    poster: `${BASE}/tecniche-stampa-09-transfer-digitale-tessuto.jpg`,
    durataSecondi: 27,
  },
  {
    slug: 'transfer-serigrafico-tessuto',
    episodio: 10,
    titolo: 'Transfer Serigrafico su Tessuto',
    descrizione: 'Tinte compatte e resistenti sul capo, perfette per quantità importanti.',
    video: `${BASE}/tecniche-stampa-10-transfer-serigrafico-tessuto.mp4`,
    poster: `${BASE}/tecniche-stampa-10-transfer-serigrafico-tessuto.jpg`,
    durataSecondi: 32,
  },
  {
    slug: 'serigrafia-tessuto',
    episodio: 11,
    titolo: 'Serigrafia su Tessuto',
    descrizione: 'Colori piatti, coprenti e durevoli direttamente sul tessuto. Il riferimento per t-shirt e felpe in grande quantità.',
    video: `${BASE}/tecniche-stampa-11-serigrafia-tessuto.mp4`,
    poster: `${BASE}/tecniche-stampa-11-serigrafia-tessuto.jpg`,
    durataSecondi: 31,
  },
];
