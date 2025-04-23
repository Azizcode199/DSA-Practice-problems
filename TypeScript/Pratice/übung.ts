function sum(arr : number[]) : number {
  let summe = 0
  for(let i = 0; i < arr.length; i++){
    summe += arr[i]
    
  }
  return summe
}

console.log(sum([3, 7, 2, 9, 4]))

console.log("-----------------")

function größteZahl(list : number[]) : number{
  let maxZahl = list[0]
  for(let i = 0; i < list.length; i++){
    if(list[i] > maxZahl){
      maxZahl = list[i]
    }
  }
  return maxZahl
}

console.log(größteZahl([5, -1, 8, 3, 6]))
console.log("--------------------")

function geradeZahlen(arr: number[]): number{
  let anzahl = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      anzahl++
    }
  }
  return anzahl
}

console.log(geradeZahlen([4, 7, 10, 1, 8, 6]))
console.log("---------------------")

function zahlDurchschnitt(list : number[]) : number {
  let summe = 0
  for(let i = 0; i < list.length; i++){
    summe += list[i]
  }

  let durchschnittSumme = summe / list.length
  
  return durchschnittSumme
  
}

console.log(zahlDurchschnitt([6, 8, 4, 10, 2]))
console.log("-----------------------------")

function produkt(arr : number[]) : number{
  let zahl = 1
  for(let i = 0; i < arr.length; i++){
    zahl = zahl * arr[i]
  }
  return zahl
}

console.log(produkt([2, 3, 4, 5]))
console.log("--------------------")
function drehe(array : number[]): number[]{
  let zahl = []
  for(let i = array.length-1; i >= 0; i--){
    zahl.push(array[i])
  }

  return zahl
  
}
console.log(drehe([4, 9, 2, 8, 1]))

console.log("-------------------------")
function drehe1(array : number[]): void{
  
  for(let i = array.length-1; i >= 0; i--){
    console.log(array[i])
  }
  
}
drehe1([4, 9, 2, 8, 1])

console.log("----------------------")

function zweitGrößte(arr:number[]) : number {
  let max = arr[0]
  for(let i = 1; i < arr.length;i++){
     if(arr[i] > max){
        max = arr[i]
     }
  }
  
  let max2 = -Infinity;
  for(let j= 0; j < arr.length; j++ ){
    if(arr[j] != max && arr[j] >  max2){
      max2 = arr[j]
    }
  }
  

  return max2

}

console.log(zweitGrößte([7, 3, 9, 5, 8]))
console.log("--------------------------")

function findZahl(arr : number[]) : string{
  let findNumber = 7
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === findNumber){
      return 'ja'
    }
  }
  return 'nein'

}

console.log(findZahl([5, 2, 7, 4, 9]))

console.log("--------------------------")

function geradenZahlen(arr: number[]) : number[]{
  let anzahl = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] %2===0){
      anzahl.push(arr[i]) 
    }
  }
  return anzahl
}

console.log(geradenZahlen([3, 6, 1, 8, 5, 4]))
console.log("--------------------------------------")

// Aufgabe:
// Finde die häufigste Zahl im Array.
// Also die Zahl, die am meisten vorkommt.
// Beispiel-Array: [2, 5, 3, 2, 4, 2, 5]
// → Ergebnis: 2 (weil sie 3-mal vorkommt)

function häufigste(arr: number[]) : number {
  let maxCount = 0
  let häufigsteZahl = arr[0]

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

  return häufigsteZahl
}

console.log(häufigste([212, 3, 3, 3, 3, 2, 5, 444,555,555,555,555,555,55,555]))
