type Messung = {
    datum: string;
    zeit: string;
    messArt: number;
    istWert: number;
    sollWert: number;
  };
  
  function setArray(laenge: number): number[] {
    return new Array(laenge).fill(0);
  }
  
  function absolut(wert: number): number {
    return Math.abs(wert);
  }
  
  function druckeTag(datum: string, tP: number[]): void {
    console.log("Datum:", datum);
    console.log("Messart | Anzahl Abweichungen");
    for (let i = 0; i < tP.length; i++) {
      console.log(i, "|", tP[i]);
    }
  }
  
  function druckeReport(messung: Messung[], messArtAnzahl: number, maxToleranz: number): void {
    let tP: number[] = setArray(messArtAnzahl);
    let abweichung: number;
    let abweichungProzent: number;
    let datum: string = messung[0].datum;
  
    for (let i = 0; i <= messung.length; i++) {
      if (i != messung.length && messung[i].datum === datum) {
        abweichung = absolut(messung[i].sollWert - messung[i].istWert);
        abweichungProzent = (abweichung * 100) / messung[i].sollWert;
  
        if (abweichungProzent > maxToleranz) {
          tP[messung[i].messArt] += 1;
        }
      } else {
        druckeTag(datum, tP);
        tP = setArray(messArtAnzahl);
  
        if (i != messung.length) {
          datum = messung[i].datum;
        }
      }
    }
  }
  