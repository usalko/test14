// src/example349.ts

// get a list of elements in both arrays, using a provided comparator function.
export function example349(inputArray1: any[], inputArray2: any[], inputComparator: any): any[] {
    return inputArray1.filter((x: any) => inputArray2.findIndex((y: any) => inputComparator(x, y)) > -1)
}
