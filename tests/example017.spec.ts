// tests/example017.spec.ts
import { expect } from 'chai'
import { example017 } from '../src/example017'

console.log(`
Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple the absolute difference if the specified number is greater than 19.
`)
describe('#example017', () => {
    it(`Input number 21 #1`, () => {
        expect(example017('21', 19)).equal(2*3)
    })
    it(`Input number 10 #1`, () => {
        expect(example017('10', 19)).equal(9)
    })
})