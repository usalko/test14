// src/example204.ts


// Initialize a two-dimensional array of given size and value.
export function example204(inputNumber1: number, inputNumber2: number): number[] {
    return [...Array(inputNumber2 - inputNumber1 + 1).keys()].map((n) => n + inputNumber1)
}
