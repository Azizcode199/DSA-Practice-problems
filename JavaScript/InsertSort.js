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
clg("change name ")