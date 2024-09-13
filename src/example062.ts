// src/example062.ts

export function example062(inputString: string): string {
    if (inputString.length < 3) {
        throw 'The string length must be greater than or equal to three'
    }
    return inputString.slice(-3) + inputString.slice(0, -3)
}