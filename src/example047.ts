// src/example047.ts
const divideBy = (inputNumber: number, dividers: [number, number]): boolean => {
    return dividers.some((x) => inputNumber % x === 0 && x <= inputNumber)
}



export function example047(inputNumber: number, range: [number, number]): boolean {
    if (range[0] > range[1]) {
        throw `Invalid range ${range}, first number should be less or equal second number`
    }
    return inputNumber >= range[0] && inputNumber <= range[1]
}