// src/example032.ts
export function example032(inputNumber1: number, inputNumber2: number, controlPoint: number): number {
    const inputNumber1Distance = Math.abs(controlPoint - inputNumber1)
    const inputNumber2Distance = Math.abs(controlPoint - inputNumber2)
    return inputNumber1Distance > inputNumber2Distance ? inputNumber2 : inputNumber1
}