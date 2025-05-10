console.log("[------------- 1D-Array  --------------]")
function printArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log("Element", i, "ist:", arr[i]);
  }
}

printArray([10, 20, 30, 40, 50]);

console.log("[------------- 2D-Array  --------------]")

function print2DArray(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`Element [${i}][${j}] ist: ${matrix[i][j]}`);
    }
  }
}

print2DArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

console.log("[------------- 3D-Array  --------------]")

function print3DArray(arr: number[][][]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        console.log(`Element [${i}][${j}][${k}] ist: ${arr[i][j][k]}`);
      }
    }
  }
}

print3DArray([
  [ [1, 2], [3, 4] ],
  [ [5, 6], [7, 8] ]
]);

