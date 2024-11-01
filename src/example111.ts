// src/example111.ts


export function example111(inputNumber1: number, inputNumber2: number, inputNumber3: number): number {
    // TODO: scale to any sequence of numbers
    if (inputNumber1 === inputNumber2 && inputNumber2 === inputNumber3) {
        throw 'All numbers are equals'
    }
    if (inputNumber1 !== inputNumber2 && inputNumber2 !== inputNumber3 && inputNumber1 !== inputNumber3) {
        throw 'All numbers are differs'
    }
    if (inputNumber1 === inputNumber3) {
        return inputNumber2
    }
    if (inputNumber1 === inputNumber2) {
        return inputNumber3
    }
    return inputNumber1
}