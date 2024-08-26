// src/example044.ts
const lastDigit = (inputNumber: number): string => {
    return inputNumber.toString().slice(-1)
}


export function example044(inputNumber1: number, inputNumber2: number, inputNumber3: number): boolean {
    return (
        inputNumber1 >= 20 && inputNumber1 < Math.max(inputNumber2, inputNumber3) ||
        inputNumber2 >= 20 && inputNumber2 < Math.max(inputNumber1, inputNumber3) ||
        inputNumber3 >= 20 && inputNumber3 < Math.max(inputNumber1, inputNumber2)
    )
}