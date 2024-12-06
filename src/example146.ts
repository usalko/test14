// src/example146.ts


// Find the maximum integer n such that 1 + 2 + ... + n <= a given integer
export function example146(inputNumber: number): number {
    if (inputNumber < 1) {
        throw `Input number should be greater then zero, but equal to ${inputNumber}`
    }
    let result = 0
    for (let i = 1; i <= inputNumber; i++) {
        result += i * i * i
    }
    return result
}

