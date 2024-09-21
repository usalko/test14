// src/example070.ts

export function example070(inputArray: number[]): number[] {
    if (inputArray.length !== 3) {
        throw 'Given array of integers of should have length 3'
    }
    return inputArray.slice(1).concat(inputArray.slice(0, 1))
}