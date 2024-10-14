// src/example093.ts


const symmetricAllPairWise = <T>(array: T[], pairStep: (prev: T, next: T) => void) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            pairStep(array[i], array[j])
        }
    }
}

export function example093(inputArray: number[]): number {
    if (inputArray.length < 2) {
        throw 'An array should has minimal length 2'
    }
    let maximumDifference: number | undefined = undefined
    symmetricAllPairWise(inputArray, (prev: number, next: number) => {
        if (maximumDifference === undefined || Math.abs(next - prev) > maximumDifference) {
            maximumDifference = Math.abs(next - prev)
        }
    })
    if (maximumDifference === undefined) {
        throw 'No one iteration in pairwise iterator'
    }
    return maximumDifference
}