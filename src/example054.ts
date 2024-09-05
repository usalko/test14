// src/example054.ts

const englishVowels = [
    'a', 'A',
    'e', 'E',
    'i', 'I',
    'o', 'O',
    'u', 'U',
]

export function example054(inputString: string): number {
    let result = 0
    for (let i = 0; i < inputString.length; i++) {
        if (englishVowels.includes(inputString[i])) {
            result++
        }
    }
    return result
}