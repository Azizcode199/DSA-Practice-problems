// Interface
interface Haus {
    zeigeBesitz(): void;
}

// Klasse Mama
class Mama implements Haus {
    zeigeBesitz(): void {
        console.log("Mama hat ein Auto 🚗");
    }
}

// Klasse Papa
class Papa implements Haus {
    zeigeBesitz(): void {
        console.log("Papa hat einen Motorroller 🛵");
    }
}

// Klasse Kind1
class Kind1 implements Haus {
    zeigeBesitz(): void {
        console.log("Kind1 hat einen Computer 🖥️");
    }
}

// Klasse Kind2
class Kind2 implements Haus {
    zeigeBesitz(): void {
        console.log("Kind2 hat einen Laptop 💻");
    }
}

// Hauptprogramm
const mama: Haus = new Mama();
const papa: Haus = new Papa();
const kind1: Haus = new Kind1();
const kind2: Haus = new Kind2();

mama.zeigeBesitz();
papa.zeigeBesitz();
kind1.zeigeBesitz();
kind2.zeigeBesitz();
