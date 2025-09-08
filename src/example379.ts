// src/example379.ts

// escape a string to use in a regular expression.
export function example379(inputString: string): string {
    return inputString.replace(/(\\\[\]\+\.\-\*\?\(\))/g, '\\$1')
}

