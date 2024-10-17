// src/example096.ts

const pairwise = <T>(array: T[], pairStep: (prev: T, next: T) => void) => {
    array.slice(0, array.length - 1).forEach((x, i) => {
        pairStep(x, array[i + 1])
    })
}

export function example096(inputArray: number[]): number {
    if (inputArray.length === 0) {
        return 0
    }
    if (inputArray.length === 1) {
        return inputArray[0]
    }
    let result = 0
    pairwise(inputArray, (prev, next) => result += Math.abs(next - prev))
    return result
}