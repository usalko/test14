// tests/example149.spec.ts
import { expect } from 'chai'
import { example149 } from '../src/example149'

console.log(`
Write a JavaScript program to change the capitalization of all letters in a given string.  
`)
describe('#example149', () => {
    it(`Input string is "This a String" #1`, () => {
        expect(example149('This is a String')).equal('tHIS IS A sTRING')
    })
})
