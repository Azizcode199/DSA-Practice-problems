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

// Beispiel: 9 digits eingeben
console.log(calculateCheckDigit([1,2,3,4,5,6,7,8,9]));  // Ausgabe z. B. 2
