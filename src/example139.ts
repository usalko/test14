// src/example139.ts


export function example139(inputArray: number[]): number {
    if (inputArray.length === 0) {
        return 0
    }
    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (inputArray[i] % 10 === 0) {
            return i
        } 
    }
    return 0
}

