type Kursteilnehmer = {
  kursnummer: number;
  kursgebuehr: number;
  kundennummer: number;
  fruehbucherrabatt: number;
  teilnehmer: string;
};

function rechnungsbetrag_ermittlung(
  kursteilnehmer: Kursteilnehmer[],
  kundennummer: number
): number {
  let anzahlProKunde = 0;
  let rechnungsbetrag = 0;

  for (let i = 0; i < kursteilnehmer.length; i++) {
    if (kursteilnehmer[i].kundennummer === kundennummer) {
      anzahlProKunde++;

      let rabatt =
        (kursteilnehmer[i].kursgebuehr * kursteilnehmer[i].fruehbucherrabatt) /
        100;
      rechnungsbetrag += kursteilnehmer[i].kursgebuehr - rabatt;
    }
  }

  // Mengenrabatt prüfen
  if (anzahlProKunde === 3 || anzahlProKunde === 4) {
    rechnungsbetrag *= 0.97;
  } else if (anzahlProKunde >= 5) {
    rechnungsbetrag *= 0.95;
  }

  // Umsatzsteuer (19%) hinzufügen
  rechnungsbetrag *= 1.19;

  return parseFloat(rechnungsbetrag.toFixed(2)); // Ergebnis auf 2 Nachkommastellen
}

// Test und Ergebnis anzeigen:
const betrag = rechnungsbetrag_ermittlung(
  [
    {
      kursnummer: 201105,
      kursgebuehr: 480,
      kundennummer: 5001,
      fruehbucherrabatt: 20,
      teilnehmer: "Anders, Max",
    },
    {
      kursnummer: 201105,
      kursgebuehr: 480,
      kundennummer: 4005,
      fruehbucherrabatt: 0,
      teilnehmer: "Meier, Paul",
    },
    {
      kursnummer: 201105,
      kursgebuehr: 480,
      kundennummer: 4005,
      fruehbucherrabatt: 0,
      teilnehmer: "Müller, Anna",
    },
    {
      kursnummer: 201105,
      kursgebuehr: 480,
      kundennummer: 3100,
      fruehbucherrabatt: 0,
      teilnehmer: "Müller, Klaus",
    },
    {
      kursnummer: 488105,
      kursgebuehr: 980,
      kundennummer: 1200,
      fruehbucherrabatt: 20,
      teilnehmer: "Schneider, Hans",
    },
    {
      kursnummer: 488105,
      kursgebuehr: 980,
      kundennummer: 3100,
      fruehbucherrabatt: 0,
      teilnehmer: "Zuse, Maria",
    },
  ],
  4005
); // Hier 4005 als Kunde

console.log("Rechnungsbetrag für Kunde 4005: " + betrag + " €");
