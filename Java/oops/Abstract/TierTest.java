package Abstract;

// Abstrakte Klasse Tier
abstract class Tier {
    protected String name;

    public Tier(String name) {
        this.name = name;
    }

    public abstract void geraeuschMachen();
}

// Unterklasse Hund
class Hund extends Tier {
    private String farbe;

    public Hund(String name, String farbe) {
        super(name); // ruft Konstruktor von Tier auf
        this.farbe = farbe;
    }

    public void geraeuschMachen() {
        System.out.println(name + " (Hund) macht: Wuff. Farbe: " + farbe);
    }
}

// Unterklasse Katze
class Katze extends Tier {
    private String schwer;

    public Katze(String name, String schwer) {
        super(name); // ruft Konstruktor von Tier auf
        this.schwer = schwer;
    }

    public void geraeuschMachen() {
        System.out.println(name + " (Katze) macht: Miau. Gewicht: " + schwer);
    }
}

// Hauptklasse mit main()
public class TierTest {
    public static void main(String[] args) {
        Tier hund = new Hund("Bello", "braun");
        Tier katze = new Katze("Miezi", "leicht");

        hund.geraeuschMachen();   // Ausgabe: Bello (Hund) macht: Wuff. Farbe: braun
        katze.geraeuschMachen();  // Ausgabe: Miezi (Katze) macht: Miau. Gewicht: leicht
    }
}
