// src/example131.ts


export function example131(inputArray: number[]): number[] {
    let result = []
    let prefix = 0
    for (let i = 0; i < inputArray.length; i++) {
        prefix += inputArray[i]
        result.push(prefix)
    }
    return result
}

