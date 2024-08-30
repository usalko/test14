// src/example048.ts

export function example048(inputString: string): string {
    let result = ''
    for(let i = inputString.length - 1; i >=0; i--) {
        result += inputString[i]
    }
    return result
}