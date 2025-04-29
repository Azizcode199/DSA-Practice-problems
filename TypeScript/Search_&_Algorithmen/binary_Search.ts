// 📝 Aufgabe:
// Gegeben ist ein sortiertes Array von Zahlen:
// [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
// Schreibe eine Funktion, die mit Binary Search prüft, 
// ob die Zahl 23 im Array enthalten ist,
// und den Index zurückgibt, wenn gefunden.
// Wenn nicht gefunden, soll -1 zurückgegeben werden.

function binarySuchen(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Gefunden
        } else if (arr[mid] < target) {
            left = mid + 1; // In der rechten Hälfte suchen
        } else {
            right = mid - 1; // In der linken Hälfte suchen
        }
    }

    return -1; // Nicht gefunden
}

console.log(binarySuchen([2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91], 72));
