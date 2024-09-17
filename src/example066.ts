// src/example066.ts

export function example066(inputString: string): string {
    if (inputString.startsWith('New') || inputString.startsWith('Los')) {
        return inputString
    }
    return ''
}