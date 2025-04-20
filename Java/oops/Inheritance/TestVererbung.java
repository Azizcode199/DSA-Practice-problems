package Inheritance;
class Fahrzeug {
    void starten() {
        System.out.println("Fahrzeug startet");
    }
}

// Unterklasse
class Auto extends Fahrzeug {
    void hupen() {
        System.out.println("Auto hupt");
    }
}

// Hauptklasse mit main()
public class TestVererbung {
    public static void main(String[] args) {
        Auto meinAuto = new Auto();   // Objekt erstellen
        meinAuto.starten();           // Methode aus Fahrzeug
        meinAuto.hupen();             // Methode aus Auto
    }
}


