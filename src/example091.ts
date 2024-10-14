// src/example091.ts

const subSequenceWise = <T>(array: T[], subSequenceWiseStep: (sequence: T[]) => void) => {
    let partition: T[] = []
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        partition.push(current)

        const next: T | undefined = (i + 1) < array.length ? array[i + 1]: undefined
        if (next === undefined || next! < current) {
            subSequenceWiseStep(partition)
            partition = []
        }
    }
}

export function example091(inputArray: number[]): number {
    let maxSum: number | undefined = undefined
    subSequenceWise(inputArray, (sequence: number[]) => {
        const sequenceSum = sequence.reduce((prev, curr) => prev+curr)
        if (maxSum === undefined || sequenceSum > maxSum) {
            maxSum = sequenceSum
        }
    })
    if (maxSum === undefined) {
        throw 'No one iteration in subSequenceWise iterator'
    }

    return maxSum
}