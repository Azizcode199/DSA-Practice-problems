class Monatsverbrauch {
    verbraucherNr: number;
    monatsnummer: number;
    verbrauch: number;

    constructor(verbraucherNr: number, monatsnummer: number, verbrauch: number) {
        this.verbraucherNr = verbraucherNr;
        this.monatsnummer = monatsnummer;
        this.verbrauch = verbrauch;
    }
}

class Jahresstatistik {
    minVerbrauch: number;
    maxVerbrauch: number;
    limitVerbraucher: Monatsverbrauch[];

    constructor(minVerbrauch: number, maxVerbrauch: number, limitVerbraucher: Monatsverbrauch[]) {
        this.minVerbrauch = minVerbrauch;
        this.maxVerbrauch = maxVerbrauch;
        this.limitVerbraucher = limitVerbraucher;
    }
}

function statistik(verbrauch: number[][], limit: number): Jahresstatistik {
    let minMonat = Number.MAX_VALUE;
    let maxMonat = Number.MIN_VALUE;
    let greaterLimit: Monatsverbrauch[] = [];

    for (let vn = 0; vn < verbrauch.length; vn++) {
        for (let m = 1; m <= 12; m++) {
            let v = verbrauch[vn][m] - verbrauch[vn][m - 1];

            if (v > limit) {
                greaterLimit.push(new Monatsverbrauch(verbrauch[vn][0], m, v));
            }

            if (v < minMonat) {
                minMonat = v;
            }

            if (v > maxMonat) {
                maxMonat = v;
            }
        }
    }

    return new Jahresstatistik(minMonat, maxMonat, greaterLimit);
}
