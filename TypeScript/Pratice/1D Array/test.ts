interface Raum {
    id: number;
    flaeche: number;
  }
  
  function bubbleSort(raeume: Raum[]) : void {
      for (let i = 0; i < raeume.length - 1; i++) {
          for (let j = 0; j < raeume.length - 1 - i; j++) {
              // Hier wird nach der Fläche des Raums sortiert
              if (raeume[j].flaeche > raeume[j + 1].flaeche) {
                  let temp = raeume[j];
                  raeume[j] = raeume[j + 1];
                  raeume[j + 1] = temp;
              }
          }
      }
      console.log(raeume);
  }
  
  const raeume: Raum[] = [
      { id: 1, flaeche: 20 },
      { id: 2, flaeche: 50 },
      { id: 3, flaeche: 30 }
  ];
  
  bubbleSort(raeume); // Gibt die Räume nach ihrer Fläche sortiert aus

  
console.log("--------------")

function umrechung (dezimalzahl: number) : void {
 
    let rest = dezimalzahl % 2
    
    dezimalzahl = Math.floor(dezimalzahl / 2);

    if(dezimalzahl > 0){
        umrechung(dezimalzahl)
    }
    console.log(rest)
}

umrechung(11)