#!/bin/bash

# Product mapping
declare -A products=(
    [01]="DROSTA-ZYLONE-100mg"
    [02]="NANDRO-ZYNOATE-250mg"
    [03]="Primozycare-100mg"
    [04]="TESTO-ZYPRO-100mg"
    [05]="TESTO-ZYCYP-250mg"
    [06]="Testo-Zyenate-250mg"
    [07]="TESTO-ZYMIX-250mg"
    [08]="TREN-ZYACE-100mg"
    [09]="CLENBURN-40MCG"
    [10]="DIANOCARE-10mg"
    [11]="LIOCARE-25MCG"
    [12]="NANDRO-ZYPRO-100mg"
    [13]="OXANACARE-10mg"
    [14]="OXYCARE-50mg"
    [15]="PROVICARE-25mg"
    [16]="Tirzepatide"
    [17]="Semaglutide"
    [18]="Retatrutide"
    [19]="Retatrutide-injectiepennen"
    [20]="AOD9604"
    [21]="SLU-PP-332"
    [22]="5-Amino-1MQ"
    [23]="L-Carnitine"
    [24]="TB-500"
    [25]="BPC-157"
    [26]="Wolverine-Blend-TB500-BPC157"
    [27]="Wolverine-Blend-injectiepennen"
    [28]="Tesamorelin"
    [29]="IGF-LR3"
    [30]="IGF-DES"
)

# Rename files
for old_file in *-scaled.jpg *-1-scaled.jpg; do
    if [[ -f "$old_file" ]]; then
        # Extract number from filename
        num=$(echo "$old_file" | sed -E 's/^0?([0-9]+).*/\1/' | sed 's/^/0/')
        num=$(printf "%02d" "${num#0}")
        
        # Get product name
        product_name="${products[$num]}"
        
        if [[ -n "$product_name" ]]; then
            # Determine suffix
            if [[ "$old_file" == *"-1-scaled.jpg" ]]; then
                new_file="${product_name}-1.jpg"
            else
                new_file="${product_name}.jpg"
            fi
            
            # Only rename if different
            if [[ "$old_file" != "$new_file" ]]; then
                mv "$old_file" "$new_file"
                echo "Renamed: $old_file → $new_file"
            fi
        fi
    fi
done
