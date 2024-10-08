// src/example087.ts

const compareByContent = (array1: number[], array2: number[]): boolean => {
    const array2Index = new Set(array2)
    return array1.every((n) => array2Index.has(n))
}

const makeStatistics = (array: number[]): Map<number, number> => {
    const arrayStatistics = new Map<number, number>()
    array.forEach((n) => {
        if (arrayStatistics.get(n) === undefined) {
            arrayStatistics.set(n, 1)
        } else {
            arrayStatistics.set(n, arrayStatistics.get(n)! + 1)
        }
    })
    return arrayStatistics
}

const compareByStatistics = (array1: number[], array2: number[]): boolean => {
    const array1Statistics = makeStatistics(array1)
    const array2Statistics = makeStatistics(array2)
    return array1Statistics.size === array2Statistics.size &&
        [...array1Statistics.keys()].every((n) => array1Statistics.get(n) === array2Statistics.get(n))

}

export function example087(inputArray1: number[], inputArray2: number[]): boolean {
    return inputArray1.length === inputArray2.length &&
        compareByContent(inputArray1, inputArray2) &&
        compareByStatistics(inputArray1, inputArray2)
}