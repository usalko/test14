// src/example076.ts

export function example076(inputArray: number[]): number[] {
    if (inputArray.length < 1) {
        throw 'The length must be larger than or equal to 1  '
    }
    return inputArray.slice(0, 1).concat(inputArray.slice(-1))
}