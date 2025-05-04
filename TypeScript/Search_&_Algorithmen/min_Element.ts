class PunkteManager {
    private punkte: { [name: string]: number };

    constructor(punkte: { [name: string]: number }) {
        this.punkte = punkte;
    }

    findeMinName(): string {
        let minName = "";
        let minWert = Infinity;

        for (const name in this.punkte) {
            const wert = this.punkte[name]; // wie get(name)
            if (wert < minWert) {
                minWert = wert;
                minName = name;
            }
        }

        return minName;
    }
}

// Beispielnutzung
const daten = {
    Anna: 13,
    Ben: 17,
    Clara: 9,
    David: 15,
    Eva: 11
};

const manager = new PunkteManager(daten);
console.log(manager.findeMinName()); // → "Clara"
