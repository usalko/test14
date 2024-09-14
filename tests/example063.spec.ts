// tests/example063.spec.ts
import { expect } from 'chai'
import { example063 } from '../src/example063'

console.log(`
Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
The string length must be greater than or equal to three.
`)
describe('#example063', () => {
    it(`Input string is "restricts" #1`, () => {
        expect(example063('restricts')).equal('tri')
    })
    it(`Input string is "res" #2`, () => {
        expect(example063('res')).equal('res')
    })
    it(`Input string is "" #3`, () => {
        expect(() => example063('')).to.throw('The string length must be greater than or equal to three.')
    })
})