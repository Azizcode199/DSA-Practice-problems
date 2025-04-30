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


console.log("------------------")

function beSearch(arr: number[], item: number): void {
    let lr = 0;
    let up = arr.length - 1;
    let found = false;

    while (lr <= up) {
        let mid = Math.floor((lr + up) / 2);

        if (arr[mid] === item) {
            found = true;
            break;
        } else if (arr[mid] < item) {
            lr = mid + 1;
        } else {
            up = mid - 1;
        }
    }

    if (found) {
        console.log("found");
    } else {
        console.log("not found");
    }
}

beSearch([22, 35, 48, 112, 116, 123, 138, 145, 156, 172, 191], 191);

console.log("---------------------------------------------------------")
function searchBinary(arr: number[], item: number): string {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (item === arr[mid]) {
            return "Ja, gefunden an Index: " + mid;
        } else if (item < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return "Nicht gefunden. Bitte gib mir das richtige Element.";
}

console.log(searchBinary([1, 2, 3, 5, 6], 3));
