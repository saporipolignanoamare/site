#!/bin/bash

# PROBLEMA
# •
# GitHub pages,
# dato un url */<word>
# non riconosce */<word>/index.html
# •
# Per questo, bisogna spostare il file index.html
# Dalla sua cartella al livello superiore
# E rinominarlo come la sua cartella

# NOTA
# •
# Assicurarsi che ci sia una distinzione solida tra
# - le cartelle di asset, immagini etc
# - e le cartelle dei percorsi

echo "Finalizing..."
BASE=docs/
for d in $BASE*/ ; do
    FLD=$(basename "$d") 
    if [[ $FLD != \_* ]];
    then
        # Building filepaths
        OLD="${d}index.html"
        NEW="${BASE}${FLD}.html"
        # Rename file
        mv $OLD $NEW
        echo "${OLD} -> ${NEW}"
        # Delete folders
        rm -r $d
        echo "Remove ${d}"
    fi
done