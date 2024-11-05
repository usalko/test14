// src/example115.ts


export function example115(inputNumber: number): number {
    if (inputNumber === 0) {
        return 0
    }
    const numberAsDigitArray = Math.abs(inputNumber).toString().split('').map((x) => parseInt(x))
    if (numberAsDigitArray.length === 1) {
        return 0
    }
    return example115(numberAsDigitArray.reduce((a, b) => a + b)) + 1
}