// src/example100.ts


export function example100(inputArray1: number[], inputArray2: number[]): boolean {
    return inputArray2.some((value: number) => inputArray1.indexOf(value) > -1)
}