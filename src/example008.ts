// src/example008.ts

export function example008(randomNumber: number, userGuess: string): string {
    if (randomNumber === parseInt(userGuess)) {
        return 'Good Work'
    }
    return 'Not matched'
}