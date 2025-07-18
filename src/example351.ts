// src/example351.ts

// get a list of elements in both arrays, after applying the provided function to each array element of both.
export function example351(inputArray1: any[], inputArray2: any[]): any[] {
    const inputSet2 = new Set(inputArray2)
    return inputArray1.filter((x: any) => inputSet2.has(x))
}
