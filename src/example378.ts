// src/example378.ts

// calculate the factorial of a number.
export function example378(inputNumber: number): number {
    if (inputNumber < 0) {
        throw new TypeError('TypeError');
    }
    return inputNumber > 1 ? example378(inputNumber - 1) * inputNumber: inputNumber
}

