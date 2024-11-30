// src/example140.ts


export function example140(inputNumber: number): boolean {
    const numberAsDigitArray = inputNumber.toString().split('')
    if (numberAsDigitArray.length === 0) {
        return false
    }
    const firstDigit = numberAsDigitArray[0]
    return numberAsDigitArray.every((x) => x === firstDigit)
}

