// src/example046.ts
const divideBy = (inputNumber: number, dividers: [number, number]): boolean => {
    return dividers.some((x) => inputNumber % x === 0 && x <= inputNumber)
}



export function example046(inputNumber1: number, inputNumber2: number, dividers: [number, number]): boolean {
    return divideBy(inputNumber1, dividers) !== divideBy(inputNumber2, dividers)
}