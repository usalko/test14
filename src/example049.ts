// src/example049.ts

export function example049(inputString: string): string {
    let result = ''
    for(let i = 0; i < inputString.length; i++) {
        result += String.fromCharCode(inputString[i].charCodeAt(0) + 1)
    }
    return result
}