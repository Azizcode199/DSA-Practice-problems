const mitglieder = {
    100: { vorname: "Jens", nachname: "Clausen" },
    101: { vorname: "Sabrina", nachname: "Rader" },
    102: { vorname: "Baktash", nachname: "Silkaburg" }  // Neue ID verwendet
  };
  
  // === Journal mit Leistungen ===
  const journal = [
    { mitgliedID: 100, leistungID: 300, leistung: 'kochen', stunden: 2 },
    { mitgliedID: 100, leistungID: 300, leistung: 'kochen', stunden: 3 },
    { mitgliedID: 100, leistungID: 301, leistung: 'putzen', stunden: 1 },
    { mitgliedID: 102, leistungID: 400, leistung: 'tragen', stunden: 1 },
    { mitgliedID: 102, leistungID: 402, leistung: 'Fit', stunden: 5 }
  ];
  
  const stundensatz = 6;
  let aktuelleMitglied = journal[0].mitgliedID;
  let aktuelleLeistung = journal[0].leistungID;
  let aktuelleLeistungText = journal[0].leistung;
  let anzStd = journal[0].stunden;
  let mSum = 0;
  let gSum = 0;
  let nr = 1;
  
  const tbody = document.querySelector("#ausgabe tbody");
  
  // === Zeile schreiben ===
  function schreibeDaten(nr, mitgliedID, leistungID, leistung, stunden, stundensatz, gesamt) {
    const mitglied = mitglieder[mitgliedID];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nr}</td>
      <td>${mitglied.vorname}</td>
      <td>${mitglied.nachname}</td>
      <td>${leistungID}</td>
      <td>${leistung}</td>
      <td>${stunden}</td>
      <td>${stundensatz.toFixed(2)} €</td>
      <td>${gesamt.toFixed(2)} €</td>
    `;
    tbody.appendChild(row);
  }
  
  // === Mitgliedssumme schreiben ===
  function schreibeSumme(mSum) {
    const row = document.createElement("tr");
    row.classList.add("summe");
    row.innerHTML = `<td colspan="7">➤ Summe Mitglied</td><td>${mSum.toFixed(2)} €</td>`;
    tbody.appendChild(row);
  }
  
  // === Gesamtsumme schreiben ===
  function schreibeGesamtsumme(gSum) {
    const row = document.createElement("tr");
    row.classList.add("gesamt");
    row.innerHTML = `<td colspan="7">Gesamtsumme</td><td>${gSum.toFixed(2)} €</td>`;
    tbody.appendChild(row);
  }
  
  // === Hauptverarbeitung ===
  for (let i = 1; i < journal.length; i++) {
    const eintrag = journal[i];
  
    if (eintrag.leistungID === aktuelleLeistung && eintrag.mitgliedID === aktuelleMitglied) {
      anzStd +=  eintrag.stunden;
    } else {
      const lSum = anzStd * stundensatz;
      schreibeDaten(nr, aktuelleMitglied, aktuelleLeistung, aktuelleLeistungText, anzStd, stundensatz, lSum);
      mSum += lSum;
  
      if (eintrag.mitgliedID !== aktuelleMitglied) {
        schreibeSumme(mSum);
        gSum += mSum;
        mSum = 0;
        nr = 1;
      } else {
        nr++;
      }
  
      aktuelleMitglied = eintrag.mitgliedID;
      aktuelleLeistung = eintrag.leistungID;
      aktuelleLeistungText = eintrag.leistung;
      anzStd = eintrag.stunden;
    }
  }
  
  // === Letzte Zeile schreiben ===
  const letzteSumme = anzStd * stundensatz;
  schreibeDaten(nr, aktuelleMitglied, aktuelleLeistung, aktuelleLeistungText, anzStd, stundensatz, letzteSumme);
  mSum += letzteSumme;
  gSum += mSum;
  schreibeSumme(mSum);
  schreibeGesamtsumme(gSum);