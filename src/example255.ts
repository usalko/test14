// src/example255.ts

// returns true if the given value is a number, false otherwise.
export function example255(inputValue: any): boolean {
    const result = parseFloat(inputValue)
    return !Number.isNaN(result) && Number.isFinite(result) && Number(result) == result
}


