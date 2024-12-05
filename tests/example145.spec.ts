// tests/example145.spec.ts
import { expect } from 'chai'
import { example145 } from '../src/example145'

console.log(`
Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer. 
`)
describe('#example145', () => {
    it(`Input number is 3 #1`, () => {
        expect(example145(3)).equal(2)
    })
    it(`Input number is 10 #2`, () => {
        expect(example145(10)).equal(4)
    })
})
