# TBD Registry — Verticale Golf

Elenco completo di ogni placeholder `[TBD-*]` introdotto per il verticale `/golf`. Nessuno di questi valori è stato inventato: vanno riempiti da Giovanni/Cowork in un passaggio unico, poi rimossi da questo registro.

## Prezzi

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-PREZZO-KIT-GARA]` | `src/data/golf-kits.ts:28` | Prezzo pubblico fisso del Kit Gara Sponsor (mostrato su `/golf` e `/golf/kit-gara`) |
| `[TBD-PREZZO-KIT-CIRCOLO]` | `src/data/golf-kits.ts:45` | Prezzo pubblico fisso del Kit Circolo |
| `[TBD-PREZZO-KIT-GREEN]` | `src/data/golf-kits.ts:61` | Prezzo pubblico fisso del Kit Green |

## Quantità

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-QTY-TEEMARKER]` | `src/data/golf-kits.ts:25` | Numero di tee marker inclusi nel Kit Gara Sponsor |
| `[TBD-QTY]` | `src/data/golf-kits.ts:41` | Numero di bandiere personalizzate incluse nel Kit Circolo |

## Tempi di produzione/riordino

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-GG-BUFFER]` | `src/components/golf/GolfComeFunziona.astro:38`, `src/pages/golf/index.astro:19` (FAQ) | Giorni lavorativi minimi di anticipo garantiti tra data di consegna e data gara, nella formula di promessa consegna approvata (brief §5) |
| `[TBD-GG-RIORDINO]` | `src/pages/golf/index.astro:40` (FAQ) | Tempi di riordino grafica su formati già in archivio (modello struttura+grafica) |

## Tracking

| Placeholder | Dove | Cosa serve |
|---|---|---|
| `[TBD-ADS-CONVERSION-LABEL]` | `src/pages/golf/grazie.astro` (commento + variabile `GOLF_ADS_CONVERSION_LABEL`) | Label della conversione Google Ads dedicata al verticale golf. **Non bloccante**: finché la env var `PUBLIC_GOLF_ADS_CONVERSION_LABEL` resta vuota, il codice NON spara l'evento conversione (niente placeholder letterale inviato a Google Ads) — parte solo l'evento GA4 `generate_lead`. Da valorizzare su Cloudflare Pages quando la campagna Ads golf viene creata. |

## Foto prodotto mancanti

Tutte le foto disponibili sul catalogo fornitore (ultimadisplays.it) mostravano grafiche demo, modelli o nomi commerciali proprietari stampati sul rendering — non utilizzabili per la regola di anonimizzazione (brief §7). L'unica foto pulita trovata (nessuna stampa/logo/testo) è quella del gazebo, già in uso. Per tutti gli altri item la card mostra un placeholder "Foto in arrivo":

| Item | Dove | Nota |
|---|---|---|
| `[TBD-FOTO]` Fondali premiazione e media wall | `src/components/golf/GolfCatalogoCompleto.astro:6` | — |
| `[TBD-FOTO]` Banchetti segreteria | `src/components/golf/GolfCatalogoCompleto.astro:8` | — |
| `[TBD-FOTO]` Segnaletica percorso | `src/components/golf/GolfCatalogoCompleto.astro:9` | — |
| `[TBD-FOTO]` Gonfiabili | `src/components/golf/GolfCatalogoCompleto.astro:10` | — |
| `[TBD-FOTO]` Tovaglie e bandiere istituzionali | `src/components/golf/GolfCatalogoCompleto.astro:11` | — |
| `[TBD-FOTO]` Bandiere gara/circolo/green, tee marker (tessile golf) | non presenti come card fotografiche — nessun'immagine fornitore (Canepa & Campi) disponibile | Da fotografare quando arriva un campione fisico, o recuperare da area riservata fornitore |

Dettaglio completo della ricerca foto (cosa è stato scartato e perché) in `PROJECTS/2promo/verticale-golf/mapping-prodotti.md` (file interno, fuori dal repo pubblico).

## Come procedere

1. Cercare/sostituire ogni placeholder in questo file con il valore reale.
2. Aggiornare `src/data/golf-kits.ts` e i punti indicati.
3. Aggiungere le foto mancanti in `public/golf/products/` seguendo le regole in `verticale-golf/mapping-prodotti.md`, poi sostituire `image: null` con il path nel file indicato.
4. Cancellare le righe di questo registro via via che vengono risolte.
