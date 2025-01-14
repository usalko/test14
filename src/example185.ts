// src/example185.ts

const randomInteger = (rangeStart: number, rangeEnd: number): number => {
    return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeStart)
} 

// Generate a random integer in the specified range.
export function example185(inputInteger1: number, inputInteger2: number, resultLength: number): number[] {
    return Array(resultLength).map(() => randomInteger(inputInteger1, inputInteger2))
}
