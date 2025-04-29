function linearSearch1(arr: number[], searchNumber: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNumber) {
            return i; // Gefunden, Index zurückgeben
        }
    }
    return -1; // Nicht gefunden
}

console.log(linearSearch1([12, 543, 56, 78, 982,85], 78));





console.log("----------with string Searching--------")

function lineSearch(arr: number[], searchNumber: number): void {
    let found = false;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNumber) {
            console.log('Yes', arr[i] + ' :' + i);
            found = true;
            break; // optional: if you want to stop after finding
        }
    }

    if (!found) {
        console.log("Not found!!!");
    }
}

lineSearch([12, 543, 56, 78, 982], 12);

console.log("-------------------with While line Search---------------------")

function withWhileSearch(arr: number[], searchNumber: number): void {
    let i = 0;
    let found = false;

    while (i < arr.length)        {
        if (arr[i] === searchNumber) {
            console.log('Yes', arr[i] + ' :' + i);
            found = true;
            break; // optional: abbrechen, wenn gefunden
        }
        i++;
    }

    if (!found) {
        console.log("Not found!!!");
    }
}

withWhileSearch([12, 543, 56, 78, 982], 12);
