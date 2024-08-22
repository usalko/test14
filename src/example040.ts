// src/example040.ts
export function example040(inputNumber1: number, inputNumber2: number): boolean {
    const inputNumbersSum = inputNumber1 + inputNumber2
    const inputNumbersDiff = Math.abs(inputNumber2 - inputNumber1)
    return inputNumber1 == 8 || inputNumber2 == 8 || inputNumbersSum == 8 || inputNumbersDiff == 8
}