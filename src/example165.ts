// src/example165.ts


// Return the minimum-maximum value of an array, after applying the provided function to set a comparing.
export function example165<T>(inputArray: T[], inputFunction: (x: T, y: T) => number): T[] {
    if (inputArray.length === 0) {
        return []
    }
    const initialValue: T = inputArray[0]
    return inputArray.reduce((minMax, x) => [
        inputFunction(minMax[0], x) > 0 ? x: minMax[0],
        inputFunction(minMax[1], x) > 0 ? minMax[1]: x,
    ], [initialValue, initialValue])
}

