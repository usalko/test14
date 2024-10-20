// src/example099.ts


export function example099(inputString1: string, inputString2: string): boolean {
    return inputString1.split('').sort().join('') === inputString2.split('').sort().join('')
}