// Your task:
// Write a function in pseudocode that does the following.

// The function is called calculateCheckDigit
// It receives an array with 9 numbers.
// It calculates and returns the check digit.
function calculateCheckDigit(digits: number[]): number {
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            sum += digits[i] * 1;
        } else {
            sum += digits[i] * 3;
        }
    }

    let checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit;
}

// Example: enter 9 digits
console.log(calculateCheckDigit([1, 2, 3, 4, 5, 6, 7, 8, 9]));  // Output: e.g. 2
