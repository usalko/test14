// src/example065.ts

export function example065(inputString: string): boolean {
    if (inputString.length < 6) {
        throw 'The string length must be greater than or equal to 6.'
    }
    return inputString.endsWith('Script')
}