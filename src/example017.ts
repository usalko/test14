// src/example017.ts
export function example017(userInput1: string, controlNumber: number): number {
    if (!userInput1.match(/\d+/)) {
        throw new Error(`User input "${userInput1}" not a positive integer number`)
    }
    const value = Math.abs(controlNumber - parseInt(userInput1))
    return parseInt(userInput1) > controlNumber ? 3 * value : value
}