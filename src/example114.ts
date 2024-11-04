// src/example114.ts


export function example114(inputString: string): boolean {
    if (inputString.length < 2) {
        return false
    }
    return inputString[0].toLocaleUpperCase() === inputString[0] && inputString.slice(-1) === '.'
}