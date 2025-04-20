package Inheritance;
class Auto {
    // 1. private Variable
    private String farbe;

    // 2. Konstruktor
    public Auto(String farbe) {
        this.farbe = farbe;
    }

    // 3. Getter (lesen)
    public String getFarbe() {
        return farbe;
    }

    // 4. Setter (ändern)
    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }
}

// Hauptklasse
public class AutoTest {
    public static void main(String[] args) {
        Auto meinAuto = new Auto("Rot");  // Objekt mit Konstruktor
        System.out.println(meinAuto.getFarbe()); // Ausgabe: Rot

        meinAuto.setFarbe("Blau");  // Farbe ändern mit Setter
        System.out.println(meinAuto.getFarbe()); // Ausgabe: Blau
    }
}



