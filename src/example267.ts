// src/example267.ts

// truncate a string up to a specified length.
export function example267(inputString: string, inputLength: number): string {
    return inputString.slice(0, inputLength - 3) + (inputLength < inputString.length ? '...': '')
}

