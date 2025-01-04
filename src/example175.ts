// src/example175.ts


// Create an array out of the two arrays by creating each possible pair from the two arrays.
export function example175<T1, T2>(inputArray1: T1[], inputArray2: T2[]): [T1, T2][] {
    return inputArray1.map((x) => inputArray2.map((y) => [x, y]) as [T1, T2][]).flat()
}
