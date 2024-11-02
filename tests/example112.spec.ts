// tests/example112.spec.ts
import { expect } from 'chai'
import { example112 } from '../src/example112'

console.log(`
Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
`)
describe('#example112', () => {
    it(`Input number1 is 3 #1`, () => {
        expect(example112(3)).equal(0)
    })
    it(`Input number1 is 10 #2`, () => {
        expect(example112(10)).equal(2)
    })
    it(`Input number1 is 15 #3`, () => {
        expect(example112(15)).equal(3)
    })
})