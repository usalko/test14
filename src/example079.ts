// src/example079.ts

export function example079(inputArray: number[]): boolean {
    if (inputArray.length > 2) {
        throw 'The array length should be 0, 1, or 2'
    }
    let number1Count = 0
    let number2Count = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == 40) {
            number1Count++
        }
        if (inputArray[i] == 30) {
            number2Count++
        }
    }
    return number1Count >= 2 || number2Count >= 2
}