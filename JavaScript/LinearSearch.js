console.log("(---Linear Search----)");

// Array with 20 numbers
let arr = [
  2, 16, 19, 7, 8, 13, 9, 11, 12, 14, 10, 15, 6, 1, 17, 4, 18, 5, 3, 20,
];

// Linear search function
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return ++i; // Position found
    }
  }
  return "Not found"; // Target not in array
}

// Example: Search for number 102
let suchZahl = 20;
let ergebnis = linearSearch(arr, suchZahl);

console.log("Position:", ergebnis);

// Schreibe eine Funktion linearSearch, die prüft, ob die Zahl 16 im Array ist und ihre Position (Index + 1) zurückgibt.
// Wenn die Zahl nicht gefunden wird, soll "Nicht gefunden" ausgegeben werden.

// Beispiel-Ausgabe:
// Wenn du 16 suchst → Ausgabe: Position: 6

console.log("---------------------------------------")
let zahlen = [4, 15, 8, 23, 42, 16, 9, 1, 33, 7];

function linearSearch(number, search){
    for(let i = 0; i < number.length; i++){
        if(number[i] == search){
            return ++i
        }
    }
    return "Nicht gefunden"
}

let suchst = 16
let ergebnis1 = linearSearch(zahlen, suchst)

console.log(`Position: ${ergebnis1}`);

console.log("------------------------------------------")
// Schreibe eine Funktion linearSearch, die prüft, ob der Name "Aziz" im Array ist.
// Gib die Position (ab 1) zurück.
// Wenn nicht gefunden, gib "Nicht gefunden" zurück.

// Beispiel-Ausgabe:
// Bei Suche nach "Aziz" → Ausgabe: Position: 5