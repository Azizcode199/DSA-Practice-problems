// Your task:
// Write a function in pseudocode that does the following.

// The function is called calculateCheckDigit
// It receives an array with 9 numbers.
// It calculates and returns the check digit.

function calculateCheckDigit(digits) {
    let summe = 0;

    for (let i = 0; i < digits.length; i++) {
        if (i % 2 == 0) {
            summe =  summe + digits[i] * 1;
        } else {
            summe =  summe + digits[i] * 3;
        }
    }

    let checkDigit  = (10 - (summe % 10)) % 10;
    return checkDigit ;
}


console.log(calculateCheckDigit([1,2,3,4,5,6,7,8,9]));  // Ausgabe z. B. 2

console.log("-------------------")
//////////////////////// 

function ziffern(z){
    let sum = 0;

    for(i=0; i < z.length;i++){
        if(i % 2 == 0){
            sum = sum + z[i] * 1
        }else{
            sum = sum + z[i] * 3
        }
    }
    
    let checkNummber  = (10 - (sum % 10)) % 10;
    return checkNummber ;
}

console.log(ziffern([1,2,3,4,5,6,7,8,9]))


console.log("-------------------")

function check(c){
    let sum = 0;
    for(let i = 0; i < c.length; i++){
        if(i % 2 == 0){
            sum = sum + c[i] * 1
        }else{
            sum = sum + c[i] * 3
        }
    }

    let checkNum = (10 - (sum % 10)) % 10;
    return checkNum
}

console.log(check([4, 7, 1, 2, 3, 6, 5, 8, 9]))

console.log("-------------------------------")

function number(n){
    let sum = 0;

    for(let i = 0; i < n.length; i++ ){
        if(i % 2 == 0){
            sum += n[i] * 1;
        } else {
            sum += n[i] * 3;
        }
    }

    let sumNumber = (10 - (sum % 10)) % 10;
    return sumNumber;
}

console.log(number([3, 1, 4, 1, 5, 9, 2, 6, 5]));  // Ausgabe: 0
