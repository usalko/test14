// src/example064.ts

export function example064(inputString1: string, inputString2: string): string {
    const minLength = Math.min(inputString1.length, inputString2.length)
    return inputString1.slice(0, minLength) + inputString2.slice(0, minLength)
}