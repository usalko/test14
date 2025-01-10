// src/example181.ts


// Find all elements in a given array except the first one.
// Return the whole array if its length is 1.
export function example181<T>(inputArray: T[]): T[] {
    return inputArray.slice(1)
}
