function erstelle_liste(stundensatz) {
  let l_sum = 0;     // Summe für Leistung
  let m_sum = 0;     // Summe für Mitglied
  let g_sum = 0;     // Gesamtsumme

  let satz = hole_satz(); // erste Zeile lesen
  if (satz === "") return; // falls leer, sofort beenden

  let anz_std = lese_anz_std(satz);
  let nr = 1;
  let next_satz;

  while ((next_satz = hole_satz()) !== "") {
    if (lese_l_id(satz) === lese_l_id(next_satz)) {
      // gleiche Leistung → Stunden zusammenzählen
      anz_std += lese_anz_std(next_satz);
    } else {
      // neue Leistung → aktuelle Leistung berechnen und schreiben
      l_sum = anz_std * stundensatz;

      schreibe_daten(
        nr,
        lese_m_id(satz),
        lese_l_id(satz),
        anz_std,
        stundensatz,
        l_sum
      );

      m_sum += l_sum;

      if (lese_m_id(satz) === lese_m_id(next_satz)) {
        nr++;
      } else {
        schreibe_summe(m_sum);
        g_sum += m_sum;
        m_sum = 0;
        nr = 1;
      }

      anz_std = lese_anz_std(next_satz);
    }

    satz = next_satz;
  }

  // letzte Leistung berechnen + schreiben
  l_sum = anz_std * stundensatz;

  schreibe_daten(
    nr,
    lese_m_id(satz),
    lese_l_id(satz),
    anz_std,
    stundensatz,
    l_sum
  );

  m_sum += l_sum;
  g_sum += m_sum;

  schreibe_summe(m_sum);
  schreibe_gesamtsumme(g_sum);
}
