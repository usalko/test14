// src/example045.ts
const lastDigit = (inputNumber: number): string => {
    return inputNumber.toString().slice(-1)
}


export function example045(inputNumber1: number, inputNumber2: number): boolean {
    return (
        inputNumber1 == 15 || inputNumber1 == 15 ||
        Math.abs(inputNumber2 - inputNumber1) == 15 ||
        Math.abs(inputNumber1 + inputNumber2) == 15
    )
}