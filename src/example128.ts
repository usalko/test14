// src/example128.ts

export function example128(inputNumber: number): number {
    if (inputNumber % 10 === 0) {
        return inputNumber
    }
    let factor = 10.0
    let result = Math.round(inputNumber / factor) * Math.round(factor)
    while (result < inputNumber && result > 0) {
        factor += 10
        result = Math.round(inputNumber / factor) * Math.round(factor)
    }
    if (result === 0) {
        return 1 * Math.round(factor)
    }
    return result
}

