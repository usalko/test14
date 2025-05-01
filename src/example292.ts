// src/example292.ts

// round a number to a specified amount of digits.
export function example292(inputNumber: number, inputCountOfDigit: number): number {
    const factor = Math.round(Number.parseFloat(`${inputNumber}e${inputCountOfDigit}`))
    return Number.parseFloat(`${factor}e-${inputCountOfDigit}`)
}
