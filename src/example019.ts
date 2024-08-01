// src/example019.ts
export function example019(userInput: string, intervalStart: number, intervalEnd: number, controlNumber: number): boolean {
    if (!userInput.match(/\d+/)) {
        throw new Error(`User input "${userInput}" not a positive integer number`)
    }
    return (parseInt(userInput) >= intervalStart && parseInt(userInput) <= intervalEnd) || parseInt(userInput) == controlNumber
}