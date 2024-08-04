// tests/example022.spec.ts
import { expect } from 'chai'
import { example022 } from '../src/example022'

console.log(`
Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
`)
describe('#example022', () => {
    it(`Input string is "alpha-centavra" position 13 #1`, () => {
        expect(example022('alpha-centavra', 13)).equal('alpha-centavr')
    })
    it(`Input string is "betta" position 11 #1`, () => {
        expect(example022('betta', 11)).equal('betta')
    })
})