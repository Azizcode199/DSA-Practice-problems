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