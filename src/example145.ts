// src/example145.ts


// Find the maximum integer n such that 1 + 2 + ... + n <= a given integer
export function example145(inputNumber: number): number {
    if (inputNumber < 1) {
        throw `Input number should be greater then zero, but equal to ${inputNumber}`
    }
    if (inputNumber === 1) {
        return 1
    }
    let sum = 0
    for (let i = 2; i <= inputNumber; i++) {
        sum += i
        if (sum > inputNumber) {
            return i - 1
        }
    }
    throw `Illegal calculation state`
}

