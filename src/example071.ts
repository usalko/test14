// src/example071.ts

export function example071(inputArray: number[]): boolean {
    if (inputArray.length < 1) {
        throw 'The array length must be larger than or equal to 1'
    }
    return inputArray[0] === 1 || inputArray.slice(-1)[0] === 1
}