// src/example109.ts


const isPrimeNumber = (i: number): boolean => {
    for (let n = 2; n < i; n++) {
        if (i % n === 0) {
            return false
        }
    }
    return true
}


export function example109(inputInteger: number): number[] {
    if (inputInteger < 1) {
        throw 'An input integer should be more than 1'
    }
    const result = [1]
    // TODO: optimize it
    for (let i = 2; i <= inputInteger; i++) {
        if (isPrimeNumber(i)) {
            result.push(i)
        }
    }
    return result
}