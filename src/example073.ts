// src/example073.ts

export function example073(inputArray: number[]): number[] {
    if (inputArray.length !== 3) {
        throw 'Given array of integers should have length 3'
    }
    return inputArray.reverse()
}