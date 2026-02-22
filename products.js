// producten
let products = [

    // injectie sectie
    { id: 1, name: "DROSTA-ZYLONE 100 mg", price: "39,95", category: "inject", image: "todo" },
    { id: 2, name: "NANDRO-ZYNOATE 250 mg", price: "39,95", category: "inject", image: "todo" },
    { id: 3, name: "Primozycare 100 mg/ml", price: "44,95", category: "inject", image: "todo" },
    { id: 4, name: "TESTO ZYPRO 100 mg", price: "39,95", category: "inject", image: "todo" },
    { id: 5, name: "TESTO-ZYCYP 250 mg", price: "39,95", category: "inject", image: "todo" },
    { id: 6, name: "Testo-Zyenate 250 mg", price: "39,95", category: "inject", image: "todo" },
    { id: 7, name: "TESTO-ZYMIX 250 mg", price: "43,95", category: "inject", image: "todo" },
    { id: 8, name: "TREN-ZYACE 100 mg", price: "39,95", category: "inject", image: "todo" },

    // tabletten sectie
    { id: 9, name: "CLENBURN 40MCG", price: "30,00", category: "tabletten", image: "todo" },
    { id: 10, name: "DIANOCARE 10 mg", price: "29,95", category: "tabletten", image: "todo" },
    { id: 11, name: "LIOCARE 25MCG", price: "?", category: "tabletten", image: "todo" },
    { id: 12, name: "NANDRO-ZYPRO 100 mg", price: "?", category: "tabletten", image: "todo" },
    { id: 13, name: "OXANACARE 10 mg", price: "39,95", category: "tabletten", image: "todo" },
    { id: 14, name: "OXYCARE 50 mg", price: "59,95", category: "tabletten", image: "todo" },
    { id: 15, name: "PROVICARE 25 mg", price: "39,95", category: "tabletten", image: "todo" },

    // peptides sectie (geen dosering toevoegen vanwege ?)
    { id: 16, name: "Tirzepatide", price: "?", category: "peptides", image: "todo" },
    { id: 17, name: "Semaglutide", price: "?", category: "peptides", image: "todo" },
    { id: 18, name: "Retatrutide", price: "?", category: "peptides", image: "todo" },
    { id: 19, name: "Retatrutide injectiepennen", price: "?", category: "peptides", image: "todo" },
    { id: 20, name: "AOD9604", price: "?", category: "peptides", image: "todo" },
    { id: 21, name: "SLU-PP-332", price: "?", category: "peptides", image: "todo" },
    { id: 22, name: "5-Amino-1MQ", price: "?", category: "peptides", image: "todo" },
    { id: 23, name: "L-Carnitine", price: "?", category: "peptides", image: "todo" },
    { id: 24, name: "TB-500", price: "?", category: "peptides", image: "todo" },
    { id: 25, name: "BPC-157", price: "?", category: "peptides", image: "todo" },
    { id: 26, name: "Wolverine Blend (TB-500 + BPC157)", price: "?", category: "peptides", image: "todo" },
    { id: 27, name: "Wolverine Blend injectiepennen", price: "?", category: "peptides", image: "todo" },
    { id: 28, name: "Tesamorelin", price: "?", category: "peptides", image: "todo" },
    { id: 29, name: "IGF-LR3", price: "?", category: "peptides", image: "todo" },
    { id: 30, name: "IGF-DES", price: "?", category: "peptides", image: "todo" },
    { id: 31, name: "Kisspeptin-10", price: "?", category: "peptides", image: "todo" },
    { id: 32, name: "NAD+ (500 mg)", price: "?", category: "peptides", image: "todo" },
    { id: 33, name: "MOTS-C", price: "?", category: "peptides", image: "todo" },
    { id: 34, name: "Epithalon", price: "?", category: "peptides", image: "todo" },
    { id: 35, name: "KPV (10 mg)", price: "?", category: "peptides", image: "todo" },
    { id: 36, name: "GHK-Cu", price: "?", category: "peptides", image: "todo" },
    { id: 37, name: "GHK-Cu injectiepennen", price: "?", category: "peptides", image: "todo" },
    { id: 38, name: "Anti-aging peptide crème (GHK-Cu & Snap-8)", price: "?", category: "peptides", image: "todo" },
    { id: 39, name: "KLOW Blend", price: "?", category: "peptides", image: "todo" },
    { id: 40, name: "KLOW 80 Blend injectiepennen", price: "?", category: "peptides", image: "todo" },
    { id: 41, name: "KLOW injectiepennen", price: "?", category: "peptides", image: "todo" }
];

/*

// injectie

DROSTA-ZYLONE 100 mg €?
NANDRO-ZYNOATE 250 mg €?
Primozycare 100 mg/ml €?
TESTO ZYPRO 100 mg €?
TESTO-ZYCYP 250 mg €?
Testo-Zyenate 250 mg €?
TESTO-ZYMIX 250 mg €?
TREN-ZYACE 100 mg €?


// tabletten

CLENBURN 40MCG €?
DIANOCARE 10 mg €?
LIOCARE 25MCG €?
NANDRO-ZYPRO 100 mg €?
OXANACARE 10 mg €?
OXYCARE 50 mg €?
PROVICARE 25 mg €?


// peptides

Tirzepatide ?mg/mcg €?
Semaglutide ?mg/mcg €?
Retatrutide ?mg/mcg €?
Retatrutide injectiepennen ?mg/mcg €?
AOD9604 ?mg/mcg €?
SLU-PP-332 ?mg/mcg €?
5-Amino-1MQ ?mg/mcg €?
L-Carnitine ?mg/mcg €?
TB-500 ?mg/mcg €?
BPC-157 ?mg/mcg €?
Wolverine Blend (TB-500 + BPC157) ?mg/mcg €?
Wolverine Blend injectiepennen ?mg/mcg €?
Tesamorelin ?mg/mcg €?
IGF-LR3 ?mg/mcg €?
IGF-DES ?mg/mcg €?
Kisspeptin-10 ?mg/mcg €?
NAD+ (500 mg) ?mg/mcg €?
MOTS-C ?mg/mcg €?
Epithalon ?mg/mcg €?
KPV (10 mg) ?mg/mcg €?
GHK-Cu ?mg/mcg €?
GHK-Cu injectiepennen ?mg/mcg €?
Anti-aging peptide crème (GHK-Cu & Snap-8) ?mg/mcg €?
KLOW Blend ?mg/mcg €?
KLOW 80 Blend injectiepennen ?mg/mcg €?
KLOW injectiepennen ?mg/mcg €?

*/