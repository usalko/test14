// tests/example110.spec.ts
import { expect } from 'chai'
import { example110 } from '../src/example110'

console.log(`
Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
`)
describe('#example110', () => {
    it(`Input sequence is [1, 12, 3, 4, 15, 30], input number is 30 #1`, () => {
        expect(example110([1, 12, 3, 4, 15, 30], 30)).deep.equal([12, 4])
    })
    it(`Input sequence is [], input number is 10 #1`, () => {
        expect(example110([], 10)).deep.equal([])
    })
})