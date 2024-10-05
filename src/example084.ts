// src/example084.ts

export function example084(inputString: string): string {
    let result = ''
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].charCodeAt(0) === 'z'.charCodeAt(0)) {
            result += 'a'
        } else {
            result += String.fromCharCode(inputString[i].charCodeAt(0) + 1)
        }
    }
    return result
}