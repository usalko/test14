// src/example304.ts
import {readFileSync} from 'fs'

// returns the singular or plural form of the word based on the input number.
export function example304(inputNumber: number, inputWord: string, inputWordPluralForm: string = ''): string {
    if (inputNumber == -1 || inputNumber == 1) {
        return inputWord
    }
    if (inputWordPluralForm == '') {
        return inputWord + 's'
    }
    return inputWordPluralForm
}
