// What is Selection Sort?
// Find the smallest element in the list.

// Swap it with the first element.

// Repeat with the rest of the list.

// 💻 Task 1 – Selection Sort:
// Use Selection Sort to sort this list:
// [4, 1, 6, 3, 2]
let arr = [4, 1, 6, 3, 2];

function SelectionSort() {
  for (let i = 0; i < arr.length-1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`Sort: ${arr[i]}`);
  }
}

SelectionSort();
