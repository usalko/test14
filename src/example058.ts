// src/example058.ts

export function example058(inputString: string): string {
    if (inputString.length < 3) {
        throw 'Invalid input string, the string length must be more or equal 3.'
    }
    const inputStringTail =  inputString.slice(-3)
    return inputString + Array(3 + 1).join(inputStringTail)
}