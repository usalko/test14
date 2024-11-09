// tests/example119.spec.ts
import { expect } from 'chai'
import { example119 } from '../src/example119'

console.log(`
Write a JavaScript program to check if a given integer has an increasing digit sequence.
`)
describe('#example119', () => {
    it(`Input number is 32 #1`, () => {
        expect(example119(32)).equal(false)
    })
    it(`Input number 123 #2`, () => {
        expect(example119(123)).equal(true)
    })
    it(`Input number 3 #3`, () => {
        expect(example119(3)).equal(true)
    })
})