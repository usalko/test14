// tests/example133.spec.ts
import { expect } from 'chai'
import { example133 } from '../src/example133'

console.log(`
Write a JavaScript program to check whether a given fraction is proper or not. 
Note: There are two types of common fractions, proper or improper. 
When the numerator and the denominator are both positive, the fraction is called proper
if the numerator is less than the denominator, and improper otherwise.
`)
describe('#example133', () => {
    it(`Input fraction is 3/4 #1`, () => {
        expect(example133(3, 4)).equal(true)
    })
    it(`Input fraction is 4/3 #2`, () => {
        expect(example133(4, 3)).equal(false)
    })
})