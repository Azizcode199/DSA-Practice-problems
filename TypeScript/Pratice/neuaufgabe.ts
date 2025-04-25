// Aufgabe:
// Finde die kleinste Zahl im Array.
// Beispiel:
// Array: [7, 3, 9, 2, 5]
// Ergebnis: 2

function kleinste(arr: number[]) : number {
    let kleinZahl = arr[0];
    for(let i = 1;i < arr.length;i++){
        if(arr[i] < kleinZahl){
            kleinZahl = arr[i]
        }
    }
    return kleinZahl
}

console.log(kleinste([1, 3, 9, 2, -5]))

// Aufgabe:
// Erstelle ein neues Array, das nur die geraden Indizes des ursprünglichen Arrays enthält.
// Beispiel:
// Original: [5, 2, 3, 4, 7, 8]
// Neu: [5, 3, 7] (diese Werte befinden sich an den geraden Indizes: 0, 2, 4)
console.log("-------geraden Indizes-------")
function geradeIndizes(arr:number[]) : number[]{
    let gerade = []
    for(let i =0; i < arr.length;i++){
        if(i % 2 == 0){
            gerade.push(arr[i])  
        }
    }
    return gerade
}
console.log(geradeIndizes([5, 2, 3, 4, 7, 8]))

// Aufgabe:
// Berechne das Produkt aller Zahlen im Array.
// Beispiel:
// Array: [2, 3, 4]
// Produkt: 2 * 3 * 4 = 24
console.log("----------------------")
function zahlMultiplizier(arr: number []) : number{
    let produkt = 1
    for(let i = 0; i < arr.length; i++){
        produkt *= arr[i]
    }

    return produkt
}

console.log(zahlMultiplizier([2, 3, 4]))

// Aufgabe:
// Prüfe, ob das Array aufsteigend sortiert ist.
// Beispiel:
// Array: [1, 2, 3, 4] → Ja, aufsteigend sortiert.
// Array: [1, 3, 2, 4] → Nein, nicht aufsteigend.
console.log("------aufsteigend-------")
function aufsteigend(arr: number[]) : string{
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i + 1]){
            return 'nein'
        }
    }
    return 'ja'
}
console.log(aufsteigend([1, 2, 3, 4]))
console.log(aufsteigend([1, 3, 2, 4]))
