// tests/example049.spec.ts
import { expect } from 'chai'
import { example049 } from '../src/example049'

console.log(`
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
`)
describe('#example049', () => {
    it(`Input string is "father" #1`, () => {
        expect(example049('father')).equal('gbuifs')
    })
    it(`Input string is "sentences" #2`, () => {
        expect(example049('sentences')).equal('tfoufodft')
    })
})