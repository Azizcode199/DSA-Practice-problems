console.log("-----2D array ------")

function zeige2DArray(array2D: number[][]) : void{
    for(let i = 0; i < array2D.length; i++){
        for(let j = 0; j < array2D[i].length; j++ ){
            console.log((array2D[i][j]))
        }
    }
}

let meinArra: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];
zeige2DArray(meinArra)

console.log("--------2D array mit Return -----")

function flachMachen(array2D: number[][]): number[] {
    let result: number[] = [];

    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            result.push(array2D[i][j]);  // Werte sammeln
        }
    }

    return result;  // Gibt ein 1D-Array zurück
}

// Test:
let meinArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

let neuesArray = flachMachen(meinArray);

console.log(neuesArray);  // Ausgabe: [1, 2, 3, 4, 5, 6]

console.log("-----------2D Array Summe --------------")
// Aufgabe:
// Erstelle ein 2D-Array mit 2 Zeilen und 2 Spalten:
// [ [1, 2],
//   [3, 4] ]
// Schreibe eine Funktion, die dieses Array bekommt und die Summe aller Zahlen zurückgibt.

function summe2DArray(arr2D: number[][]): number {
    let summe: number = 0;

    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            summe = summe + arr2D[i][j];
        }
    }

    return summe;
}

let summeArray: number[][] = [
    [1, 2],
    [3, 4]
];

let summe = summe2DArray(summeArray);

console.log(summe);  // Ausgabe: 10

console.log("----------------Größte Element zurückgeben ------------------")
// Das Array ist: [ [2, 4], [6, 8], [10, 12] ]
// Das größte Element ist: 12
// Die Funktion soll 12 zurückgeben.

function größteElement(arr2: number[][]): number{
    let großeZahl: number = 0; 
    for(let i = 0; i < arr2.length; i++){
        for(let j =0; j < arr2[i].length; j++){
            if(arr2[i][j] > großeZahl){
                großeZahl = arr2[i][j]
            }
        }
    }
    return großeZahl
}
let element: number [][]= [ [2, 4], [6, 8], [10, 12] ]
let bigElement = größteElement(element)
console.log(bigElement)

console.log("---------- geraden Zahlen -----------")
// Das Array ist: [ [1, 2, 3], [4, 5, 6] ]
// Die geraden Zahlen sind: 2, 4, 6
// Die Funktion soll ein Array zurückgeben: [2, 4, 6]
function zahlen(arr: number[][]): number[]{
    let geradeZahlen: number[] = [];
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 === 0){
                geradeZahlen.push(arr[i][j]);
            }
        }
    }
    return geradeZahlen;
}

let gerade: number [][]= [ [1, 2, 3], [4, 5, 6] ]
let geradeZahl = zahlen(gerade)
console.log(geradeZahl)