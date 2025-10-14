// src/example384.ts

// get the difference between two given arrays
export function example384(inputArray1: any[], inputArray2: any[]): any[] {
    return inputArray1.filter((element) => !new Set(inputArray2).has(element))
}

