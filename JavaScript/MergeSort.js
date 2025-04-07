let data = [3,7,12,34,56,90]
let data2 = [20,30,40,50, 100, 1000]
let data3 = []

for(i=0; i<data.length; i++){
    data3[i] = data[i];
}

for(i=0; i < data2.length;i++){
    // console.log(data.length+i)
    data3[data.length+i]=data2[i]
}
console.log("------------")
for(i = 0; i < data3.length;i++){
    console.log(data3[i])
}
