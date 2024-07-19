// tests/example008.spec.ts
import { assert, expect } from 'chai'
import { example008 } from '../src/example008'

describe('#example008', () => {
    const randomNumber: number = Math.random() * 10
    const normalizedDayOfMonth = new Date().getDate() % 3
    const matched: boolean = normalizedDayOfMonth === randomNumber
    const userGuess: string = `${matched}`
    const etalon: string = !matched ? 'Not matched': 'Good Work'
    it(`Write a JavaScript program where the program takes a random integer between 1 and 10,
 and the user is then prompted to input a guess number.
 The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".`, () => {
        expect(example008(randomNumber, userGuess)).deep.equal(etalon)
    })
})