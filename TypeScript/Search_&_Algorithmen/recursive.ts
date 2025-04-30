function umrechnung(dezimalzahl: number): void {
    
    
    if (dezimalzahl > 0) {
        const rest: number = dezimalzahl % 2;
        dezimalzahl = Math.floor(dezimalzahl / 2);
        umrechnung(dezimalzahl);
        console.log(rest, dezimalzahl); // Ausgabe von hinten nach vorne (richtig)
    }
}

umrechnung(11)