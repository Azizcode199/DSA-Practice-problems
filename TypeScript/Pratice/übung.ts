function sum(arr : number[]) : number {
  let summe = 0
  for(let i = 0; i < arr.length; i++){
    summe += arr[i]
    
  }
  return summe
}

console.log(sum([3, 7, 2, 9, 4]))