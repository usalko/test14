// src/example092.ts


const pairwise = <T>(array: T[], pairStep: (prev: T, next: T) => void) => {
    array.slice(0, array.length - 1).forEach((x, i) => {
        pairStep(x, array[i + 1])
    })
}

export function example092(inputArray: number[]): number {
    if (inputArray.length < 2) {
        throw 'An array should has minimal length 2'
    }
    let maximumDifference: number | undefined = undefined
    pairwise(inputArray, (prev: number, next: number) => {
        if (maximumDifference === undefined || Math.abs(next - prev) > maximumDifference) {
            maximumDifference = Math.abs(next - prev)
        }
    })
    if (maximumDifference === undefined) {
        throw 'No one iteration in pairwise iterator'
    }
    return maximumDifference
}