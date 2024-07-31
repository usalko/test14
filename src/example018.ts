// src/example018.ts
export function example018(userInput1: string, userInput2: string, controlNumber: number): boolean {
    if (!userInput1.match(/\d+/)) {
        throw new Error(`User input "${userInput1}" not a positive integer number`)
    }
    if (!userInput2.match(/\d+/)) {
        throw new Error(`User input "${userInput2}" not a positive integer number`)
    }
    return parseInt(userInput1) === 50 || parseInt(userInput2) === 50 || (parseInt(userInput1) + parseInt(userInput2)) === 50
}