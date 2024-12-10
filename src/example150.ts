// src/example150.ts


// Change the capitalization of all letters in a given string
export function example150(inputNumber: number): number {
    const digitArray = inputNumber.toString().split('')
    if (digitArray.length % 2 !== 0) {
        throw `Number should contain even number of digits, but input number is ${inputNumber}`
    }
    for (let i = 0; i < digitArray.length / 2; i ++) {
        // Swap digits
        const index1 = i * 2
        const index2 = i * 2 + 1

        let value = digitArray[index1]
        digitArray[index1] = digitArray[index2]
        digitArray[index2] = value
    }
    return parseInt(digitArray.join(''))
}

