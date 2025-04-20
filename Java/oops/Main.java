public class Main {
    public static void main(String[] args) {
        Auto.zeigeMarke();
        Auto.beispielAuto.fahren();
        Auto.Motor.info();
    }
}

class Auto {
    static String marke = "BMW";

    static void zeigeMarke() {
        System.out.println("Marke: " + marke);
    }

    String farbe;

    static Auto beispielAuto = new Auto("Schwarz");

    public Auto(String farbe) {
        this.farbe = farbe;
    }

    void fahren() {
        System.out.println("Das Auto fährt in " + farbe);
    }

    static {
        System.out.println("Auto-Klasse wird geladen");
    }

    static class Motor {
        static void info() {
            System.out.println("Motor läuft");
        }
    }
}
