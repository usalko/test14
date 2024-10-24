// tests/example103.spec.ts
import { expect } from 'chai'
import { example103 } from '../src/example103'

console.log(` is
Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
`)
describe('#example103', () => {
    it(`Input number 324 #1`, () => {
        expect(example103(324)).equal(34)
    })
    it(`Input number -123 #1`, () => {
        expect(() => example103(-123)).to.throw('Input number should be positive')
    })
    it(`Input number 0 #1`, () => {
        expect(() => example103(0)).to.throw('Input number should be greater or equal 10')
    })
})