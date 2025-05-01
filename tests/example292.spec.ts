// tests/example292.spec.ts
import { expect } from 'chai'
import { example292 } from '../src/example292'

console.log(`Fundamental(ES6)-Part-I
152. Round Number to Digits


Write a JavaScript program to round a number to a specified amount of digits.


 - Use Math.round() and template literals to round the number to the specified number of digits.
 - Omit the second argument, decimals, to round to an integer.

`)

describe('#example292', () => {
    it(`Input argument is 1.005, 2 #1`, () => {
        expect(example292(1.005, 2)).equal(1.01)
    })
    it(`Input argument is 1.05, 2 #2`, () => {
        expect(example292(1.05, 2)).equal(1.05)
    })
    it(`Input argument is 1.0005, 2 #3`, () => {
        expect(example292(1.0005, 2)).equal(1)
    })
})
