// tests/example137.spec.ts
import { expect } from 'chai'
import { example137 } from '../src/example137'

console.log(`
Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15.
`)
describe('#example137', () => {
    it(`Input number is 1 #1`, () => {
        expect(example137(1)).equal(15)
    })
    it(`Input number is 1 #1`, () => {
        expect(example137(17)).equal(17)
    })
})