// src/example107.ts


export function example107(inputArray: number[]): number[][] {
    const result: number[][] = []
    const sortedInputArray = [...inputArray].sort()
    for (let i = 0; i < sortedInputArray.length; i++) {
        for (let j = i + 1; j < sortedInputArray.length; j++) {
            if (inputArray[j] % inputArray[i] === 0) {
                result.push([inputArray[i], inputArray[j]])
            }
        }
    }
    return result
}