// producten
let products = [

    // injectie
    { id: 1, name: "DROSTA-ZYLONE 100 mg", price: 59.95, category: "inject", image: "img/drosta-zylone.jpg" },
    { id: 2, name: "NANDRO-ZYNOATE 250 mg", price: 64.95, category: "inject", image: "img/nandro-zynoate.jpg" },
    { id: 3, name: "Primozycare 100 mg/ml", price: 69.95, category: "inject", image: "img/primozycare.jpg" },
    { id: 4, name: "TESTO ZYPRO 100 mg", price: 59.95, category: "inject", image: "img/testo-zypro.jpg" },
    { id: 5, name: "TESTO-ZYCYP 250 mg", price: 64.95, category: "inject", image: "img/testo-zycyp.jpg" },
    { id: 6, name: "Testo-Zyenate 250 mg", price: 64.95, category: "inject", image: "img/testo-zyenate.jpg" },
    { id: 7, name: "TESTO-ZYMIX 250 mg", price: 69.95, category: "inject", image: "img/testo-zymix.jpg" },
    { id: 8, name: "TREN-ZYACE 100 mg", price: 74.95, category: "inject", image: "img/tren-zyace.jpg" },

    // tabletten
    { id: 9, name: "CLENBURN 40MCG", price: 34.95, category: "tabletten", image: "img/clenburn.jpg" },
    { id: 10, name: "DIANOCARE 10 mg", price: 39.95, category: "tabletten", image: "img/dianocare.jpg" },
    { id: 11, name: "LIOCARE 25MCG", price: 29.95, category: "tabletten", image: "img/liocare.jpg" },
    { id: 12, name: "NANDRO-ZYPRO 100 mg", price: 49.95, category: "tabletten", image: "img/nandro-zypro.jpg" },
    { id: 13, name: "OXANACARE 10 mg", price: 44.95, category: "tabletten", image: "img/oxanacare.jpg" },
    { id: 14, name: "OXYCARE 50 mg", price: 54.95, category: "tabletten", image: "img/oxycare.jpg" },
    { id: 15, name: "PROVICARE 25 mg", price: 39.95, category: "tabletten", image: "img/provicare.jpg" },
];

/*

welke producten moeten in welke catagorie?


Deze injecteerbare producten staan op de site onder Injectable:

DROSTA-ZYLONE 100 mg
NANDRO-ZYNOATE 250 mg
Primozycare 100 mg/ml
TESTO ZYPRO 100 mg
TESTO-ZYCYP 250 mg
Testo-Zyenate 250 mg
TESTO-ZYMIX 250 mg
TREN-ZYACE 100 mg


De volgende orale tabletten/tabs worden genoemd onder Oral:

CLENBURN 40MCG
DIANOCARE 10 mg
LIOCARE 25MCG
NANDRO-ZYPRO 100 mg
OXANACARE 10 mg
OXYCARE 50 mg
PROVICARE 25 mg


globale prijzen lijst:

Vetverbranding / Afslanken
	•	Tirzepatide — €74.95 – €86.85
	•	Semaglutide — €64.95 – €76.85
	•	Retatrutide — €74.50 – €141.90
	•	Retatrutide injectiepennen — €99.95 – €246.90
	•	AOD9604 — €54.95 – €66.85
	•	SLU-PP-332 — €34.95 – €45.90
	•	5-Amino-1MQ — €39.95 – €51.90
	•	L-Carnitine — €44.95 – €56.85

⸻

💪 Spierherstel & Peptide blends
	•	TB-500 — €44.95 – €56.90
	•	BPC-157 — €44.95 – €56.90
	•	Wolverine Blend (TB-500 + BPC157) — €79.95 – €91.90
	•	Wolverine Blend injectiepennen — €119.95 – €126.90

⸻

🧬 Hormoon & groeipeptiden
	•	Tesamorelin — €59.95 – €71.90
	•	IGF-LR3 (1 mg) — €79.95 – €91.85
	•	IGF-DES — €54.95 – €66.90
	•	Kisspeptin-10 — €54.95 – €66.90

⸻

⚡ Energie, herstel & longevity
	•	NAD+ (500 mg) — €74.95 – €86.90
	•	MOTS-C — €29.95 – €81.85
	•	Epithalon — €54.95 – €66.90
	•	KPV (10 mg) — €54.95 – €66.90

⸻

🧴 Huid & cosmetisch
	•	GHK-Cu — €34.95 – €61.85
	•	GHK-Cu injectiepennen — €… – €146.90 (prijs gedeeltelijk zichtbaar)
	•	Anti-aging peptide crème (GHK-Cu & Snap-8) — €54.95

⸻

🔬 KLOW blends & stacks
	•	KLOW Blend — €149.95 – €162.85
	•	KLOW 80 Blend injectiepennen — €154.95 – €161.90
	•	KLOW injectiepennen — €… – €146.90 (gedeeltelijk zichtbaar)

*/