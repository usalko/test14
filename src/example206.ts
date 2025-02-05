// src/example206.ts
interface QueryParams {
    [index: string]: string | string[]
}

// Check whether all elements in a given array are equal or not.
export function example206(inputArray: any[]): boolean {
    if (inputArray.length > 0) {
        return inputArray.every((x) => x === inputArray[0])
    }
    return false
}
