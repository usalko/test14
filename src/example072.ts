// src/example072.ts

export function example072(inputArray: number[]): boolean {
    if (inputArray.length !== 3) {
        throw 'Given array of integers should have length 3'
    }
    return inputArray[0] === inputArray[2]
}