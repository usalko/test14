// tests/example115.spec.ts
import { expect } from 'chai'
import { example115 } from '../src/example115'

console.log(`
Write a JavaScript program to find the number of times to replace a given number with the sum of its digits.
This is until it converts to a single-digit number.
`)
describe('#example115', () => {
    it(`Input number is 123 #1`, () => {
        expect(example115(123)).equal(1)
    })
    it(`Input number is 999 #2`, () => {
        expect(example115(999)).equal(2)
    })
    it(`Input number is 0 #3`, () => {
        expect(example115(0)).equal(0)
    })
    it(`Input number is -12 #4`, () => {
        expect(example115(-12)).equal(1)
    })
})