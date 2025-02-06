// src/example207.ts

// compute the average of an array, after mapping each element to a value using the provided function.
export function example207(inputArray: any[], inputFunction: (x: any) => number): number {
    if (inputArray.length === 0) {
        return 0
    }
    const sum = inputArray.map(inputFunction).reduce((x, y) => x + y)
    return sum / inputArray.length
}
