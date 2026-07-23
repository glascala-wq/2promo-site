# 2promo-landing — regole di lavoro per sessioni concorrenti

Questo repository viene lavorato da più chat/sessioni Claude Code contemporaneamente. Per evitare conflitti (file sovrascritti, push rifiutati, lavoro di altre sessioni interrotto), **ogni nuova sessione deve lavorare nel proprio git worktree**, mai direttamente in questa cartella (`/Users/glasc/Sites/2promo-landing`), prima di modificare qualsiasi file.

Fanno eccezione i task puramente di lettura/ricerca che non toccano nessun file: per quelli non serve un worktree.

## Come iniziare una sessione

Dalla cartella principale del repo:

```bash
scripts/new-worktree.sh <slug-task>
```

Lo script: aggiorna `origin/main`, crea il worktree in `../2promo-worktrees/<slug-task>` su un nuovo branch omonimo, copia `.env` e installa le dipendenze. Alla fine stampa il percorso e i comandi successivi.

Poi:
1. `cd` nel worktree stampato dallo script.
2. Lavora lì per tutta la sessione (edit, build, dev server, commit): mai più nella cartella principale.
3. Per il dev server/preview, scegli una porta esplicita se ne sai già una libera, altrimenti lascia fare ad `autoPort` (già configurato in `astro.config.mjs`): un'altra sessione potrebbe già occupare la 4321.
4. Prima di committare, controlla `git status` per non includere file di un'altra sessione.

## Come chiudere una sessione

Dal worktree, poi dalla cartella principale:

```bash
# nel worktree, a lavoro committato
git push origin <slug-task>

# nella cartella principale
git checkout main
git fetch origin
git merge origin/main   # se qualcun altro ha pushato nel frattempo
git merge <slug-task>
git push origin main

git worktree remove ../2promo-worktrees/<slug-task>
git branch -d <slug-task>
```

Se il merge dà conflitti, risolvili a mano prima di pushare — non forzare, non scartare il lavoro di un'altra sessione.

## Perché

Più sessioni che editano gli stessi file nella stessa cartella si sovrascrivono a vicenda senza preavviso. Il worktree isola ogni sessione nella propria copia di lavoro: i conflitti, se ci sono, si affrontano una sola volta al merge, non in continuazione mentre si lavora.
