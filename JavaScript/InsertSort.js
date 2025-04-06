let arr = [25, 17, 31, 13, 2];

function InsertSort() {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

InsertSort();

console.log("----------------------")

// Sort the following list using insertion sort in pseudocode: [8, 3, 5, 1]

let array = [8, 3, 5, 1];

function insertion() {
  for (let i = 1; i < array.length; i++) {
    let temp1 = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp1) {  
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp1;  
  }

  // Ausgabe
  for (let i = 0; i < array.length; i++) { 
    console.log(array[i]);
  }
}

insertion();

console.log("------------------------------------")
