// src/example141.ts


export function example141(inputArray1: number[], inputArray2: number[]): number {
    const uniqueElements = new Set(inputArray1)
    for (let i = 0; i < inputArray2.length; i++) {
        uniqueElements.add(inputArray2[i])
    }
    return uniqueElements.size
}

