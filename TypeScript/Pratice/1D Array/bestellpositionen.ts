function artikelProduct(): void {
    type Artikel = {
      menge: number;
      name: string;
      einzelPreisBrutto: number;
      mwstSatz: number; // 1 = 19%, 2 = 7%
    };
  
    const bestellung: Artikel[] = [
      { menge: 4, name: "SSD 1 TB", einzelPreisBrutto: 78.90, mwstSatz: 1 },
      { menge: 3, name: "Zeitschrift", einzelPreisBrutto: 4.99, mwstSatz: 2 },
      { menge: 1, name: "USB-Stick", einzelPreisBrutto: 19.99, mwstSatz: 1 },
      { menge: 12, name: "Patchkabel 2m", einzelPreisBrutto: 3.99, mwstSatz: 1 }
    ];
  
    let gesamtMWST1 = 0;
    let gesamtMWST2 = 0;
    let gesamtBruttopreis = 0;
  
    for (let i = 0; i < bestellung.length; i++) {
      let artikel = bestellung[i];
      let gesamtPreisArtikel = artikel.menge * artikel.einzelPreisBrutto;
      gesamtBruttopreis += gesamtPreisArtikel;
  
      // MwSt pro Artikel berechnen
      if (artikel.mwstSatz === 1) {
        gesamtMWST1 = gesamtMWST1 + gesamtPreisArtikel * 0.19;
      } else if (artikel.mwstSatz === 2) {
        gesamtMWST2 += gesamtPreisArtikel * 0.07;
      }
  
      // Einzelne Position ausgeben
      console.log(`${artikel.menge} * ${artikel.name}  ${artikel.einzelPreisBrutto.toFixed(2)} €  ${gesamtPreisArtikel.toFixed(2)} €`);
    }
  
    let gesamtMWST = gesamtMWST1 + gesamtMWST2;
  
    // Gesamtsummen ausgeben
    console.log("--------");
    console.log("Gesamt Bruttopreis: " + gesamtBruttopreis.toFixed(2) + " €");
    console.log("Enthaltene MWST 19%: " + gesamtMWST1.toFixed(2) + " €");
    console.log("Enthaltene MWST 7%: " + gesamtMWST2.toFixed(2) + " €");
    console.log("Gesamt MWST: " + gesamtMWST.toFixed(2) + " €");
  }
  
artikelProduct();
  