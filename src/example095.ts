// src/example095.ts


export function example095(inputArray: number[], searchNumber: number, numberForReplace: number): number[] {
    return inputArray.map((x) => x === searchNumber ? numberForReplace: x)
}