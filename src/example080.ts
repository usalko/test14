// src/example080.ts

export function example080(inputArray: number[]): number[] {
    if (inputArray.length < 1) {
        throw 'The array length should be at least 1'
    }
    return [inputArray.slice(-1)[0], inputArray[0]]
}