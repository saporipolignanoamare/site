# Importante!

Leggi i commenti nel file `finalize.sh`! (che è stato aggiunto allo script `npm run build`)

## Nota

Anche se lo script `finalize.sh` risolve il problema dei percorsi di Github Pages:

1. lo risolve solo per il primo livello
2. resta il fatto che file `.html` che stanno in sottocartelle non riescano a pescare CSS e assets

Non è un problema che c'è ora, visto che c'è solo un livello. Da tenere a mente nel caso ci saranno sottocartelle.

1. Bisognerà rendere lo script ricorsivo
2. (Al momento non c'è soluzione)
