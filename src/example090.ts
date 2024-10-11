// src/example090.ts

export function example090(inputArray: number[], k: number): number {
    if (k > 0 && k <= inputArray.length) {
        // Stupid implementation
        return inputArray.sort()[inputArray.length - k]
    }
    throw `A k should be between 1 and ${inputArray.length} (include 1 and ${inputArray.length} values)`
}