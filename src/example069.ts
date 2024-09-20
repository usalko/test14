// src/example069.ts

export function example069(inputArray: number[]): number {
    if (inputArray.length !== 3) {
        throw 'Given array of integers of should have length 3'
    }
    return inputArray.reduce((acc, el) => acc + el)
}