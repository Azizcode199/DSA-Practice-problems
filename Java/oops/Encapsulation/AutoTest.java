package Encapsulation;
class Auto {
    private String farbe;

    // Konstruktor
    public Auto(String farbe) {
        this.farbe = farbe;
    }

    // Getter
    public String getFarbe() {
        return farbe;
    }

    // Setter
    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }

    // Eigene Methode
    public void zeigeInfo() {
        System.out.println("Auto-Farbe ist: " + farbe);
    }
}

// Hauptklasse mit Objekt
public class AutoTest {
    public static void main(String[] args) {
        Auto meinAuto = new Auto("Rot");    // Konstruktor aufrufen
        meinAuto.zeigeInfo();               // Ausgabe: Auto-Farbe ist: Rot

        meinAuto.setFarbe("Blau");          // Setter nutzen
        meinAuto.zeigeInfo();               // Ausgabe: Auto-Farbe ist: Blau
    }
}
