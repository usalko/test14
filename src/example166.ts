// src/example166.ts


// Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
export function example166<T>(inputArray: T[], inputPredicate: (x: T) => boolean): boolean {
    return inputArray.every(inputPredicate)
}

