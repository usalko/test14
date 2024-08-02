// src/example020.ts
export function example020(userInput1: string, userInput2: string): boolean {
    if (!userInput1.match(/(\+-)?\d+/)) {
        return false
    }
    if (!userInput2.match(/(\+-)?\d+/)) {
        return false
    }
    return (parseInt(userInput1) > 0 && parseInt(userInput2) < 0) ||
        (parseInt(userInput1) < 0 && parseInt(userInput2) > 0)
}