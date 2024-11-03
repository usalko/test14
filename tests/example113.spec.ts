// tests/example113.spec.ts
import { expect } from 'chai'
import { example113 } from '../src/example113'

console.log(`
Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
`)
describe('#example113', () => {
    it(`Input number1 is 6 #1`, () => {
        expect(example113(6)).equal(6 + 3 + 1)
    })
    it(`Input number1 is 0 #2`, () => {
        expect(example113(0)).equal(0)
    })
    it(`Input number1 is 1 #3`, () => {
        expect(example113(1)).equal(1)
    })
    it(`Input number1 is -1 #4`, () => {
        expect(() => example113(-1)).throw('An input number should be positive. But this input number -1 isn\'t.')
    })
})