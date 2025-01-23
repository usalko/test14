// src/example194.ts


// Remove false values from a given array.
export function example194(inputArray: boolean[]): boolean[] {
    return inputArray.filter((x) => x, inputArray)
}
