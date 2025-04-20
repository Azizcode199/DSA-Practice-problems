package Polymorphismus;

// Oberklasse
class Tier {
    String name;

    // Konstruktor
    public Tier(String name) {
        this.name = name;
    }

    void geraeusch() {
        System.out.println(name + " macht ein Geräusch");
    }
}

// Unterklasse: Hund
class Hund extends Tier {
    public Hund(String name) {
        super(name); // ruft Konstruktor von Tier
    }

    void geraeusch() {
        System.out.println(name + " sagt: Wuff");
    }
}

// Unterklasse: Katze
class Katze extends Tier {
    public Katze(String name) {
        super(name);
    }

    void geraeusch() {
        System.out.println(name + " sagt: Miau");
    }
}

// Hauptklasse
public class TierTest {
    public static void main(String[] args) {
        Tier t1 = new Hund("Bello");
        Tier t2 = new Katze("Miezi");

        t1.geraeusch(); // Bello sagt: Wuff
        t2.geraeusch(); // Miezi sagt: Miau
    }
}
