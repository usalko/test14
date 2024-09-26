// src/example075.ts

export function example075(inputArray1: number[], inputArray2: number[]): number[] {
    if (inputArray1.length !== 3 || inputArray2.length !== 3) {
        if (inputArray2.length === 3) {
            throw 'Given array1 of integers should have length 3'
        }
        if (inputArray1.length === 3) {
            throw 'Given array2 of integers should have length 3'
        }
        throw 'Given array1 of integers and array2 of integers should have length 3'
    }
    return inputArray1.slice(1, -1).concat(inputArray2.slice(1, -1))
}