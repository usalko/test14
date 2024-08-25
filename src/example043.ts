// src/example043.ts
const lastDigit = (inputNumber: number): string => {
    return inputNumber.toString().slice(-1)
}


export function example043(inputNumber1: number, inputNumber2: number, inputNumber3: number): boolean {
    return lastDigit(inputNumber1) == lastDigit(inputNumber2) || lastDigit(inputNumber1) == lastDigit(inputNumber3)
}