// src/example067.ts

export function example067(inputString: string): string {
    if (inputString.startsWith('P') ||
        inputString.startsWith('p') ||
        inputString.endsWith('P') ||
        inputString.endsWith('p')) {
        return inputString.slice(1, -1)
    }
    return inputString
}