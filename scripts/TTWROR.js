function calculateTTWROR(periods) {
    // periods: Array von Objekten { mve, cfIn, cfOut, mvb }
    let growthFactor = 1;

    for (const p of periods) {
        // Rendite der Subperiode berechnen
        const r = (p.mve + p.cfOut) / (p.mvb + p.cfIn) - 1;
        
        // Wachstumsfaktor multiplizieren
        growthFactor *= (1 + r);
    }

    // Gesamte TTWROR als Prozentsatz zurückgeben
    return (growthFactor - 1) * 100;
}

/* Beispiel-Verwendung
const data = [
    { mve: 11000, cfIn: 0, cfOut: 0, mvb: 10000 }, // Periode 1
    { mve: 12000, cfIn: 2000, cfOut: 0, mvb: 11000 } // Periode 2 (nach Einzahlung)
];
console.log(calculateTTWROR(data)); // Ergebnis in Prozent */
