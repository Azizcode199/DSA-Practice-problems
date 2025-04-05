console.log("(---Linear Search----)");

// Array with 20 numbers
let arr: number[] = [
  2, 16, 19, 7, 8, 13, 9, 11, 12, 14, 10, 15, 6, 1, 17, 4, 18, 5, 3, 20,
];

// Linear search function
function linearSearch(array: number[], target: number): number | string {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return ++i; // Position found
    }
  }
  return "Not found"; // Target not in array
}

// Example: Search for number :
let suchZahl: number = 20;
let ergebnis: number | string = linearSearch(arr, suchZahl);

console.log("Position:", ergebnis);
