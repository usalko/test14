const lastDecimalDigit = (inputNumber: number): string => {
    return inputNumber.toString().slice(-1)
}


// src/example036.ts
export function example036(inputNumber1: number, inputNumber2: number, inputNumber3: number): boolean {
    return lastDecimalDigit(inputNumber1) === lastDecimalDigit(inputNumber2) &&
        lastDecimalDigit(inputNumber2) === lastDecimalDigit(inputNumber3)
}