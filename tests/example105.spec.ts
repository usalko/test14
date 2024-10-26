// tests/example105.spec.ts
import { expect } from 'chai'
import { example105 } from '../src/example105'

console.log(`
Write a JavaScript program to find the number of times to replace a given number with the sum of its digits.
This is until it converts to a single-digit number.
`)
describe('#example105', () => {
    it(`Input number is 12 #1`, () => {
        expect(example105(12)).equal(1)
    })
    it(`Input number is 66 #2`, () => {
        expect(example105(66)).equal(2)
    })
    it(`Input number is 123 #3`, () => {
        expect(example105(123)).equal(1)
    })
    it(`Input number is 156 #4`, () => {
        expect(example105(156)).equal(2)
    })
    it(`Input number is 0 #5`, () => {
        expect(example105(0)).equal(0)
    })
    it(`Input number is 9 #6`, () => {
        expect(example105(9)).equal(0)
    })
})