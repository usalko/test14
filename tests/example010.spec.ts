// tests/example010.spec.ts
import { expect } from 'chai'
import { example010 } from '../src/example010'

const dayOfYear = (date: Date): number => {
    return ((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24) | 0
}

describe('#example010', () => {
    const userInput1 = '' + ((Math.random()*10000) | 0)
    const userInput2 = '' + ((Math.random()*10000) | 0)
    it(`Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).`, () => {
        expect(example010(userInput1, userInput2)).equal(parseInt(userInput1) * parseInt(userInput2))
    })

})