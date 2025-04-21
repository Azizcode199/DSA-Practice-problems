let l_sum = 0;
let m_sum = 0;
let g_sum = 0;

let satz = hole_satz();
let anz_std = lese_anz_std(satz);
let nr = 1;

let next_satz;

while ((next_satz = hole_satz()) !== "") {
  if (lese_l_id(satz) === lese_l_id(next_satz)) {
    anz_std += lese_anz_std(next_satz);
  } else {
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
      nr = 1;
      m_sum = 0;
    }

    anz_std = lese_anz_std(next_satz);
  }

  g_sum += m_sum;
  satz = next_satz;
}

// letzte Zeile schreiben
schreibe_daten(
  nr,
  lese_m_id(satz),
  lese_l_id(satz),
  anz_std,
  stundensatz,
  anz_std * stundensatz
);

schreibe_summe(m_sum + anz_std * stundensatz);
schreibe_gesamtsumme(g_sum);
