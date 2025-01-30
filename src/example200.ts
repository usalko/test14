// src/example200.ts


// Convert an integer to a suffixed string, adding am or pm based on its value.
export function example200(inputNumber: number): string {
    return inputNumber == 0 ? '12pm' : (inputNumber > 12 ? `${inputNumber - 12}pm` : `${inputNumber}am`)
}
