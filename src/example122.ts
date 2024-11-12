// src/example122.ts


export function example122(inputArray: number[]): boolean {
    if (inputArray.length < 2) {
        return true
    }
    const perhapsIsIncreasing = inputArray[0] < inputArray[1]
    const perhapsIsDecreasing = inputArray[0] > inputArray[1]
    if (!perhapsIsDecreasing && !perhapsIsIncreasing) {
        return false
    }
    // Check logic errors in array
    return inputArray.every((n, i) => {
        if (perhapsIsDecreasing && i > 0) {
            return n < inputArray[i - 1]
        } else if (perhapsIsIncreasing && i > 0) {
            return n > inputArray[i - 1]
        } else {
            return true
        }
    })
}