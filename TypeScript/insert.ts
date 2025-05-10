function insertDsa(arr:number []): void{
  let newElement: number = 70
  let position : number = 2;
  console.log(arr)
  for(let i = arr.length-1; i >= 0; i--){
    // console.log(arr[i])
    if(i>=position){
      arr[i+1] = arr[i]
      if(i===position){
        arr[i]=newElement;
      }
    }
  }
  console.log(arr)

}

insertDsa([60,30,10,67,40])