package Interface;

// Interface
interface Haus {
    void zeigeBesitz();
}

// Klasse Mama hat ein Auto
class Mama implements Haus {
    public void zeigeBesitz() {
        System.out.println("Mama hat ein Auto 🚗");
    }
}

// Klasse Papa hat Motorroller
class Papa implements Haus {
    public void zeigeBesitz() {
        System.out.println("Papa hat einen Motorroller 🛵");
    }
}

// Klasse Kind1 hat Computer
class Kind1 implements Haus {
    public void zeigeBesitz() {
        System.out.println("Kind1 hat einen Computer 🖥️");
    }
}

// Klasse Kind2 hat Laptop
class Kind2 implements Haus {
    public void zeigeBesitz() {
        System.out.println("Kind2 hat einen Laptop 💻");
    }
}

// Hauptklasse
public class HausTest {
    public static void main(String[] args) {
        Haus mama = new Mama();
        Haus papa = new Papa();
        Haus kind1 = new Kind1();
        Haus kind2 = new Kind2();

        mama.zeigeBesitz();
        papa.zeigeBesitz();
        kind1.zeigeBesitz();
        kind2.zeigeBesitz();
    }
}
