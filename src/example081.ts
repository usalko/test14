// src/example081.ts

export function example081(inputNumber: number, inputDigit1: string, inputDigit2: string): number {
    if (inputNumber < 10 || inputNumber > 99) {
        throw 'Given positive integer should have length two'
    }
    if (! new RegExp(/\d/).test(inputDigit1)) {
        throw 'First input should be one digit'
    }
    if (! new RegExp(/\d/).test(inputDigit2)) {
        throw 'Second input should be one digit'
    }
    return new Number(inputDigit1.toString() + inputDigit2.toString() + inputNumber.toString()).valueOf()
}