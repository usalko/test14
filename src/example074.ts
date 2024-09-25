// src/example074.ts

export function example074(inputArray: number[]): number[] {
    if (inputArray.length < 3) {
        return inputArray
    }
    const maxValueOfMediateElements = inputArray.slice(1, -1).reduce((prev, curr) => Math.max(prev, curr))
    return [inputArray[0], ...Array(inputArray.length - 2).fill(maxValueOfMediateElements), inputArray.slice(-1)[0]]
}