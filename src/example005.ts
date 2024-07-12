// src/example005.ts

export function example005(input: string): string {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        result += input[input.length - i - 1]
    }
    return result
}