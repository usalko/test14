// src/example102.ts


export function example102(inputArray: number[]): number {
    let result = 0
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i; j < inputArray.length; j++) {
            if (i < j && inputArray[i] > inputArray[j]) {
                result++
            }
        }
    }
    return result
}