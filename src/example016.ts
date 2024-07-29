// src/example016.ts
export function example016(userInput1: string, userInput2: string): number {
    if (!userInput1.match(/\d+/)) {
        throw new Error(`User input "${userInput1}" not a positive integer number`)
    }
    if (!userInput1.match(/\d+/)) {
        throw new Error(`User input "${userInput2}" not a positive integer number`)
    }
    const value = parseInt(userInput1) + parseInt(userInput2)
    return parseInt(userInput1) === parseInt(userInput2) ? 3 * value : value
}