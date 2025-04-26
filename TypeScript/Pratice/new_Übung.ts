// Aufgabe:
// Erstelle ein Array, das alle ungeraden Zahlen aus dem ursprünglichen Array enthält.
// Beispiel:
// Original: [5, 2, 9, 4, 7]
// Neu: [5, 9, 7]

function ungeradenNumber(arr:number[]): number[]{
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] %2  !== 0){
            newArray.push(arr[i])
        }
    }
    return newArray

}

console.log(ungeradenNumber([5, 2, 9, 4, 7]))

// Aufgabe:
// Erstelle ein Array mit der Quadratzahl jeder Zahl im ursprünglichen Array.
// Beispiel:
// Original: [2, 3, 4]
// Neu: [4, 9, 16] (weil 2² = 4, 3² = 9, 4² = 16)
console.log("----------------Quadratzahl---------------------")
function newQuadrat(arr: number[]) : number []{
    let quadratzahl = []
    for(let i = 0; i < arr.length; i++){
        quadratzahl.push(arr[i] ** 2)
    }
    return quadratzahl
}

console.log(newQuadrat([2, 3, 4]))
// Aufgabe:
// Erstelle ein neues Array, in dem nur die Zahlen größer als der Durchschnitt des ursprünglichen Arrays 
// enthalten sind.
// Beispiel:
// Array: [2, 3, 4, 5]
// Durchschnitt: 3.5
// Zahlen größer als der Durchschnitt: [4, 5]
console.log("----------------Quadratzahl---------------------")

function durchschnitt(arr: number[]) : number[]{
    let zahlGrößen = []
    let summe = 0
    
    for(let i = 0; i<arr.length; i++){
       summe += arr[i]
    }

    let durchschnitt = summe / arr.length

    for(let i = 0; i<arr.length;i++){
        if(arr[i] > durchschnitt ){
            zahlGrößen.push(arr[i])
        }
    }
    
    return zahlGrößen
}
console.log(durchschnitt([2, 3, 4, 5]))

// Aufgabe:
// Erstelle ein neues Array, das nur die häufigsten Zahlen aus dem ursprünglichen Array enthält.
// Beispiel:
// Array: [4, 5, 6, 4, 7, 5, 4]
// Häufigste Zahl: 4 (weil es 3-mal vorkommt)
console.log("-------------------- häufigsten Zahlen ---------------------")


