// src/example015.ts
export function example015(userInput: string, limit: number): number {
    if (!userInput.match(/\d+/)) {
        throw new Error(`User input "${userInput}" not a positive integer number`)
    }
    const value = Math.abs(parseInt(userInput) - limit)
    return Math.abs(parseInt(userInput)) > limit ? 2 * value : value
}