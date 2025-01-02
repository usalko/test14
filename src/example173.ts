// src/example173.ts


// Filter out non-unique values in an array,
// based on a provided comparator function.
export function example173<T>(inputArray: T[], cmp: (x: T, y: T) => boolean): T[] {
    const storage = new Set<T>()
    return inputArray.filter((e: T) => storage.has(e) ? false: storage.add(e) || true)
}
