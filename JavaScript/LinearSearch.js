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
