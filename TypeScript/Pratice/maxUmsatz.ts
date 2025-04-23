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