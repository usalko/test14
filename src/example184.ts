// src/example184.ts


// Generate a random integer in the specified range.
export function example184(inputInteger1: number, inputInteger2: number): number {
    return Math.floor(Math.random() * (inputInteger2 - inputInteger1 + 1) + inputInteger1)
}
