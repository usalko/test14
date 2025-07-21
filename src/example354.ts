// src/example354.ts

// initialize an array containing the numbers in the specified range (in reverse)
// where start and end are inclusive of their common difference step.
export function example354(inputEnd: number, inputStart: number = 0, inputStep: number = 1): number[] {
    return Array.from({ length: Math.ceil((inputEnd + 1 - inputStart) / inputStep) }).map((x, i: number) => i * inputStep + inputStart).reverse()
}
