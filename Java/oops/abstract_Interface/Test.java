package abstract_Interface;

interface Elektro {
    void laden(); // keine Logik hier
}
abstract class Fahrzeug {
    String name;

    public Fahrzeug(String name) {
        this.name = name;
    }

    abstract void starten(); // abstrakte Methode
}
class Auto extends Fahrzeug implements Elektro {
    public Auto(String name) {
        super(name);
    }

    public void starten() {
        System.out.println(name + " startet mit Schlüssel.");
    }

    public void laden() {
        System.out.println(name + " lädt die Batterie.");
    }
}
public class Test {
    public static void main(String[] args) {
        Auto tesla = new Auto("Tesla");
        tesla.starten(); // von abstrakter Klasse
        tesla.laden();   // von Interface
    }
}
