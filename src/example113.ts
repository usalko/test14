// src/example113.ts


export function example113(inputNumber: number): number {
    if (inputNumber < 0) {
        throw `An input number should be positive. But this input number ${inputNumber} isn't.`
    }
    let result = inputNumber
    let divider = 2
    while (divider <= inputNumber) {
        result += Math.floor(inputNumber / divider)
        divider *= 2
    }
    return result
}