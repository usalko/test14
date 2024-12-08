// src/example148.ts


// Compute the sum of all the digits that occur in a given string
export function example148(inputArray: number[]): number[] {
    if (inputArray.length % 2 !== 0) {
        throw `Illegal array length (for this function array length should be even). Input array is: ${inputArray}`
    }
    const result = Array.from(inputArray.slice(inputArray.length / 2))
    result.push(...inputArray.slice(0, inputArray.length / 2))
    return result
}

