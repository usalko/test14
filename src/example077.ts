// src/example077.ts

export function example077(inputArray: number[]): boolean {
    if (inputArray.length !== 2) {
        throw 'The array length must be equal to 2'
    }
    return inputArray[0] === 1 ||
        inputArray[0] === 3 ||
        inputArray[1] === 1 ||
        inputArray[1] === 3
}