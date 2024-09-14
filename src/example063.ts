// src/example063.ts

export function example063(inputString: string): string {
    if (inputString.length < 3) {
        throw 'The string length must be greater than or equal to three.'
    }
    const middlePosition = Math.ceil(inputString.length / 2)
    return inputString.slice(middlePosition - 2, middlePosition + 1)
}