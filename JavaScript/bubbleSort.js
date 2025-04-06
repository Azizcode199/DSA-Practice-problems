// What is Bubble Sort?
// Bubble Sort compares two neighbors and swaps them if they're in the wrong order.
// It does this repeatedly until everything is sorted.

// 💻 Aufgabe 1 – Bubble Sort:
// Sortiere mit Bubble Sort diese Liste:
// [6, 2, 9, 1, 5]

let sort = [6, 2, 9, 1, 5]

function BubbleSort(){
    for(i = 0; i < sort.length-1; i++){
        for(j = 0; j < sort.length  - i - 1; j++){
            if(sort[j] > sort[j+1]){
                let temp = sort[j]
                sort[j] = sort[j+1]
                sort[j+1] = temp
            }
        }
    }
    for(let i = 0; i < sort.length; i++){
        console.log(`Listsort: ${sort[i]}`)
    }
}

BubbleSort()

console.log("--------------------------------")
// 🧠 Task 2 – Bubble Sort Challenge:
// Sort this list using Bubble Sort:
// [7, -3, 2, 0, -1, 5, 2, -3]

// 👉 Contains:

// Negative numbers

// Duplicate values

let list = [7, -3, 2, 0, -1, 5, 2, -3]
function sortNumber(){
    for(let i = 0; i < list.length-1; i++){
        for(let j = 0; j < list.length - i - 1; j++ ){
            if(list[j] > list[j+1]){
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
            }
        }
    }
    for(let i = 0; i < list.length; i++){
        if(i == 0 || list[i] != list[i -1]){
            console.log(`Bubblesort: ${list[i]}`)
        }
    }
}
sortNumber()