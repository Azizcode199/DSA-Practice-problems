function ermittleMaxUmsatz(umsaetze: number[]) : number{
    let max = umsaetze[0];
    for(let i = 0; i < 3; i++){
        if(umsaetze[i] > max){
            max = umsaetze[i]
        }
    }
    return max
}

console.log(ermittleMaxUmsatz([6500,500, 4500]))
// console.log("Hochte Umsatz : "+ermittleMaxUmsatz([5000, 4500,3333,11112,
//     34444,555334,234,
//     21345,345345,7777,554566,787878]))
console.log("---------------------------------------------")
function auswertung(alter : number[]) : void {
    let summe = 0
    let anzahl30 = 0
    let anzahl = alter.length
    let i = 0
    while(i < anzahl){
        summe = summe + alter[i]
        
        if(alter[i] < 30){
            anzahl30 ++ 
        }
    
        i++
    }

    let durchschnitt = summe / anzahl
    let prozentUnter30 = anzahl30 * 100 / anzahl
   
    console.log("Durchschnitt: " + durchschnitt);
    console.log("Prozent unter 30: " + prozentUnter30);

}

auswertung([26,55,63,12,65,28,27])