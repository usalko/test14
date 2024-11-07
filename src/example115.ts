// src/example115.ts


const isSquareMatrix = (inputMatrix: number[][]): boolean => {
    return inputMatrix.every((row) => row.length == inputMatrix.length)
}


export function example115(inputMatrix: number[][]): boolean {
    if (!isSquareMatrix(inputMatrix)) {
        throw `Input matrix ${inputMatrix} not a square matrix.`
    }

    if (inputMatrix.length <= 1) {
        return true
    }
    return !inputMatrix.some((row, i) => row.some((x, j) => i !== j && x !== 0))
}