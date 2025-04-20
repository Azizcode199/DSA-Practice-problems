// Oberklasse
class Fahrzeug {
    starten(): void {
        console.log("Fahrzeug startet");
    }
}

// Unterklasse
class Auto1 extends Fahrzeug {
    farbe: string;

    constructor(farbe: string) {
        super(); // ruft den Konstruktor der Oberklasse auf (hier optional)
        this.farbe = farbe;
    }

    hupen(): void {
        console.log("Auto hupt");
    }
}

// Hauptprogramm
// const meinAuto = new Auto();   // Objekt erstellen
const meinAuto = new Auto1("Rot");
meinAuto.starten();
meinAuto.hupen();
       // Methode aus Auto
