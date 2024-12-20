// src/example160.ts


// Extract values at specified indexes from a specified array.
export function example160(inputArray: number[], inputIndexes: number[]): number[] {
    return inputIndexes.filter((i) => i >= 0 && i < inputArray.length).map((i) => inputArray[i])
}

