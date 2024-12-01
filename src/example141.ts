// src/example141.ts


export function example141(inputArray1: number[], inputArray2: number[]): number {
    const uniqueElements1 = new Set(inputArray1)
    return inputArray2.reduce((count, x) => count += (uniqueElements1.has(x)? 1 : 0), 0)
}

