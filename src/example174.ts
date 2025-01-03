// src/example174.ts


// De-capitalize the first letter of a string.
export function example174<T>(inputString: string): string {
    return inputString.slice(0, 1).toLowerCase() + inputString.slice(1)
}

export function example174v2<T>([firstChar, ...nextChars]: string[], upperCaseRest: boolean = false): string {
    return firstChar.toLowerCase() + (upperCaseRest ? nextChars.map((ch) => ch.toUpperCase()).join(''): nextChars.join(''))
}
