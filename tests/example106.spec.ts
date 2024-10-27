// tests/example106.spec.ts
import { expect } from 'chai'
import { example106 } from '../src/example106'

console.log(`
Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
`)
describe('#example106', () => {
    it(`Input number1 is 12, input number2 is 2 #1`, () => {
        expect(example106(12, 2)).equal(3)
    })
    it(`Input number1 is 17, input number2 is 1 #2`, () => {
        expect(example106(17, 1)).equal(17)
    })
})