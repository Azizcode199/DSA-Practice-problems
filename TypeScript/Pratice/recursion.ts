console.log("------Recursion-------")
let counter = 1
function demo(n1:number){

    if(counter > n1){
        return;
    }
    console.log("Aziz: " + counter)
    counter++
    demo(n1)
}

demo(10)
console.log("------ Recursion Sorting -------")
// Sorting using Recursive Function 
//[7,2,3,5,1]

function isSorted(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function sortCheck(array: number[]): void {
    let i = 0;
    let j = 1;

    if (isSorted(array)) {
        console.log("Sortiert:", array);
        return;
    }

    while (i < array.length - 1) {
        if (array[i] <= array[j]) {
            i++;
            j++;
        } else {
            [array[i], array[j]] = [array[j], array[i]];
            i = 0;
            j = 1;
        }
    }

    console.log("Sortiert:", array);
}

let myArray = [7, 2, 3, 5, 1];
sortCheck(myArray); // Ausgabe: Sortiert: [1, 2, 3, 5, 7]
