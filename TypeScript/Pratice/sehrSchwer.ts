function mehrMall(arr: number[]): number[] {
    let count: { [key: number]: number } = {};  // Index-Signatur hinzufügen
    let maxCount = 0;
    let immermalAnzahl: number[] = [];

    // Zähle, wie oft jede Zahl vorkommt
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }

    // Bestimme die höchste Häufigkeit manuell
    for (let num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
        }
    }

    // Finde alle Zahlen, die die höchste Häufigkeit haben
    for (let num in count) {
        if (count[num] === maxCount) {
            immermalAnzahl.push(Number(num));  // Füge die Zahl in das Ergebnis-Array ein
        }
    }

    return immermalAnzahl;
}

console.log(mehrMall([4, 5, 6, 4, 7, 5, 4]));  // Gibt [4] zurück

function häufigste1(arr: number[]) : number[] {
    let maxCount = 0
    let häufigsteZahl = arr[0]
    let newArray = []
  
    for(let i = 0; i < arr.length; i++) {
      let count = 0
      for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          count++
        }
      }
      if(count > maxCount) {
        maxCount = count
        häufigsteZahl = arr[i]
      }
    }
    newArray.push(häufigsteZahl)
    return newArray
  }
  
  console.log(häufigste1([65,78,65,65,65]))
