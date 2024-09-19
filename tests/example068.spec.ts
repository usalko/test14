// tests/example068.spec.ts
import { expect } from 'chai'
import { example068 } from '../src/example068'

console.log(`
Write a JavaScript program to create a new string using the first and last n characters from a given string.
.
`)
describe('#example068', () => {
    it(`Input string is "Negative" input number is 3 #1`, () => {
        expect(example068('Negative', 2)).equal('Neve')
    })
    it(`Input string is "Rope" input number is 4 #2`, () => {
        expect(example068('Rope', 4)).equal('RopeRope')
    })
    it(`Input string is "" input number is 6 #3`, () => {
        expect(() => example068('', 6)).to.throw('The string length must be larger than or equal to 6')
    })
})