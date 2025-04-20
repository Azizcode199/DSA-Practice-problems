// class Auto {
//     static markt: string = "BMW"
// }

// console.log(Auto.markt)

// class Auto {
//     static  zeigeMarke(): void{
//         console.log("Marke ist BMW")
//     }
// }

// Auto.zeigeMarke();

// class Auto {
//     static Motor = {
//         info(): void {
//             console.log("Motor läuft");
//         }
//     }
// }

// Auto.Motor.info(); // ✅ Ausgabe: Motor läuft

// class Auto {
//     static{
//         console.log("Auto-klasse wird gestartet")
//     }
// }

// class Auto {
//   static beispielAuto = new Auto();

//   fahren(): void {
//     console.log("Auto fährt");
//   }
// }

// // Aufruf ohne Objekt erstellen
// Auto.beispielAuto.fahren();

class Auto {
  // 1. static Variable
  static marke: string = "BMW";

  // 2. static Methode
  static zeigeMarke(): void {
    console.log("Marke: " + Auto.marke);
  }

  // 3. normale Instanz-Variable
  farbe: string;

  // 4. static Objekt
  static beispielAuto: Auto = new Auto("Schwarz");

  // 5. Konstruktor
  constructor(farbe: string) {
    this.farbe = farbe;
  }

  // 6. normale Methode
  fahren(): void {
    console.log("Das Auto fährt in " + this.farbe);
  }

  // 7. static Block (ab TypeScript 4.4)
  static {
    console.log("Auto-Klasse wird geladen");
  }

  // 8. static innere Klasse
  static Motor = class {
    static info(): void {
      console.log("Motor läuft");
    }
  };
}
Auto.zeigeMarke();
Auto.beispielAuto.fahren();
Auto.Motor.info();


