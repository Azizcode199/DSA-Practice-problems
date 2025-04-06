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
// Task 2:
// Use insertion sort to sort the following list in pseudocode or JavaScript:
// [7, 4, 2, 9, 1]


let list = [7, 4, 2, 9, 1];

function sortList(){
  for(let i = 1; i < list.length; i++){
    let temp = list[i]
    let j = i - 1
    while(j >= 0 && list[j] > temp){
      list[j + 1] = list[j]
      j--
    } 
    list[j + 1] = temp
  }
  for(let i = 0; i < list.length; i++){
    console.log(list[i])
  }
}

sortList()

console.log("---------------------------")
// Task 3:
// Sort this list using insertion sort:
// [10, 6, 8, 3, 2]

// Rewrite the code (pseudocode or JavaScript). I'll check it for you 🙂

let sort = [10, 6, 8, 3, 2]

function Sort_list(){
  for(let i = 1; i < sort.length; i++){
    let temp = sort[i]
    let j = i - 1; 
    while(j >= 0 && sort[j] > temp){
      sort[j + 1] = sort[j]
      j--
    }
    sort[j + 1] = temp
  }
  for(let i = 0; i < sort.length; i++){
    console.log(`Position: ${sort[i]}`)
  }
}

Sort_list()

console.log("-------------------------")
// Task 4:
// Sort this list using Insertion Sort:
// [12, 5, 3, 15, 8, 1, 10]

// Please rewrite the code – I'm waiting for your solution 😊

let l = [12, 5, 3, 15, 8, 1, 10]
function listCode(){
  for(let i = 1; i < l.length; i++){
    let temp = l[i]
    let j = i - 1
    while(j >= 0 && l[j] > temp){
      l[j + 1 ] = l[j]
      j--
    }
    l[j+1] = temp
  }
  for(let i = 0; i < l.length; i++){
    console.log(`Sortnumber : ${l[i]}`)
  }
}

listCode()

console.log("-----------------------------------")
// Task 5 – Challenge:
// Use Insertion Sort to sort this list:
// [4, -1, 7, 4, 0, -3, 7, 2]

// 👉 Contains:

// Negative numbers

// Duplicate values

// Write your code – I'm excited! 😎

let newlist = [4, -1, 7, 4, 0, -3, 7, 2]
function values(){
  for(let i = 1; i < newlist.length; i++){
    let temp = newlist[i]
    let j = i - 1
    while(j >=0 && newlist[j] > temp){
      newlist[j + 1 ] = newlist[j]
      j--
    }
    newlist[j+1] = temp
  }
  for(let i = 0; i < newlist.length;i++ ){
    if(i === 0 || newlist[i] !== newlist[i- 1]){
      console.log(`List: ${newlist[i]}`)
    }
    
  } 
}

values()

console.log("--------------------")
// Task 6 – Bonus:
// Use Insertion Sort to sort this list,
// displaying each number only once:
// [9, 4, -2, 7, 3, 4, 1, 0, -2, 9, 6, 3, 8]

let sortNumber = [9, 4, -2, 7, 3, 4, 1, 0, -2, 9, 6, 3, 8]
function numberlist(){
  for(let i = 1; i < sortNumber.length; i++){
    let temp = sortNumber[i]
    let j = i - 1
    while(j >= 0 && sortNumber[j] > temp ){
      sortNumber[j + 1] = sortNumber[j]
      j--
    }
    sortNumber[j + 1] = temp;
  }
  for(let i = 0; i < sortNumber.length; i++){
    if(i === 0 || sortNumber[i] != sortNumber[i-1]){
      console.log(`List: ${sortNumber[i]}`)
    }
  }
}

numberlist()