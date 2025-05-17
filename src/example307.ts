// src/example307.ts

// calculate how many numbers in the given array are less than or equal to the given value.
// This is done using the percentile formula.
export function example307(inputNumbers: number[], inputBoundary: number): number {
    if (inputNumbers.length == 0) {
        return 0
    }

    return (inputNumbers.reduce((n: number, x: number) => x <= inputBoundary ? n + 1: n, 0)/inputNumbers.length) * 100.0
}
