# TBD Registry: Verticale Golf

Elenco completo di ogni placeholder `[TBD-*]` introdotto per il verticale `/golf`. Nessuno di questi valori è stato inventato: vanno riempiti da Giovanni/Cowork in un passaggio unico, poi rimossi da questo registro.

## Prezzi

I kit sono ancora un'idea di composizione, non un listino definitivo (indicazione di Giovanni, 21/07): niente prezzo pubblicato sul sito. Ogni kit mostra un pulsante "Richiedi il prezzo" al posto del prezzo, sia nella griglia su `/golf` sia nella pagina di dettaglio. Nessun placeholder di prezzo da riempire finché non si decide di pubblicare un listino.

## Quantità

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-QTY-TEEMARKER]` | `src/data/golf-kits.ts` (kit Gara Sponsor, campo `includes`) | Numero di tee marker inclusi nel Kit Gara Sponsor |
| `[TBD-QTY]` | `src/data/golf-kits.ts` (kit Circolo, campo `includes`) | Numero di bandiere personalizzate incluse nel Kit Circolo |

## Tempi di produzione e riordino

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-GG-BUFFER]` | `src/components/golf/GolfComeFunziona.astro` (box "la promessa"), `src/pages/golf/index.astro` (prima FAQ) | Giorni lavorativi minimi di anticipo garantiti tra data di consegna e data gara, nella formula di promessa consegna approvata (brief §5) |
| `[TBD-GG-RIORDINO]` | `src/pages/golf/index.astro` (FAQ sul riordino grafica) | Tempi di riordino grafica su formati già in archivio (modello struttura+grafica) |

## Tracking

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-ADS-CONVERSION-LABEL]` | `src/pages/golf/grazie.astro` (commento e variabile `GOLF_ADS_CONVERSION_LABEL`) | Label della conversione Google Ads dedicata al verticale golf. Non bloccante: finché la env var `PUBLIC_GOLF_ADS_CONVERSION_LABEL` resta vuota, il codice non spara l'evento conversione (niente placeholder letterale inviato a Google Ads), parte solo l'evento GA4 `generate_lead`. Da valorizzare su Cloudflare Pages quando la campagna Ads golf viene creata. |

## Immagini

Ogni card di kit e catalogo ha ormai un visual reale: le 3 foto prodotto pulite trovate su Ultima Displays (fondali, gazebo, gonfiabili), trattate in un duotone navy/cream coerente con la palette 2promo, più 6 icone originali disegnate da zero per gli item senza foto disponibile (banchetti, segnaletica, tovaglie/bandiere istituzionali, roll up, totem, bandiera buca). Nessun placeholder "Foto in arrivo" rimasto. Dettaglio completo di ogni scelta in `PROJECTS/2promo/verticale-golf/mapping-prodotti.md` (file interno).

Resta scoperto solo il tessile golf vero e proprio (bandiere gara, bandiere circolo, bandiere green, tee marker), fornito da Canepa & Campi: oggi rappresentato dalle icone, non da foto reali del prodotto specifico.

| Item | Dove | Nota |
|---|---|---|
| `[TBD-FOTO]` Bandiere gara, bandiere circolo, bandiere green, tee marker | Rappresentati con icone generiche nelle card kit, non foto | Da fotografare quando arriva un campione fisico, o recuperare da area riservata fornitore Canepa & Campi, poi sostituire l'icona con la foto reale |

## Come procedere

1. Cercare e sostituire ogni placeholder in questo file con il valore reale.
2. Aggiornare `src/data/golf-kits.ts` nei punti indicati.
3. Quando arriva una foto vera del tessile golf, seguire le regole in `verticale-golf/mapping-prodotti.md`, salvarla in `public/golf/products/`, poi sostituire l'`icon` con un `image` nel file indicato (vedi `GolfCatalogoCompleto.astro` o `golf-kits.ts` per il pattern già in uso sugli altri item).
4. Cancellare le righe di questo registro via via che vengono risolte.
