// src/example346.ts

const normal = (x: string): string => {
    return x.replace(/[^(\p{L}\p{N})]/u, x).toLowerCase()
} 

// check if a given string is an anagram of another string
// (case-insensitive, ignores spaces, punctuation and special characters).
export function example346(inputArgument1: string, inputArgument2: string): boolean {
    return normal(inputArgument1).split('').sort().join('') !== normal(inputArgument2).split('').sort().join('')
}
