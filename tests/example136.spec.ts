// tests/example136.spec.ts
import { expect } from 'chai'
import { example136 } from '../src/example136'

console.log(`
Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.
`)
describe('#example136', () => {
    it(`Input string is "1c" #1`, () => {
        expect(example136('1c')).equal('$c')
    })
    it(`Input string is "fire" #2`, () => {
        expect(() => example136('fire')).to.throw('A string should have at least one digit')
    })
    it(`Input string is "123" #3`, () => {
        expect(example136('123')).equal('$23')
    })
})