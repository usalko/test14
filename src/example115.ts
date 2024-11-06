// src/example115.ts


export function example115(inputMatrix: number[][]): boolean {
    if (inputMatrix.length <= 1) {
        return true
    }
    return !inputMatrix.some((row, i) => row.some((x, j) => i !== j && x !== 0))
}