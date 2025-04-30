// function minElementSearch(arr: number[]): number {
//     let min = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[i+1])
//            min = arr[i+1]    
//     }
//     return  min;
// }

// console.log(minElementSearch([6, 4, 52, 5, 1]));

console.log("------------- Selection Sort ---------------------")

function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        // Finde das Minimum im unsortierten Teil
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Tausche, falls notwendig
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    // Gib das sortierte Array zurück
    return arr;
}

console.log(selectionSort([6, 4, 52, 5, 1]));


