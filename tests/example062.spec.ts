// tests/example062.spec.ts
import { expect } from 'chai'
import { example062 } from '../src/example062'

console.log(`
Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three. 
`)
describe('#example062', () => {
    it(`Input string is "rocket" #1`, () => {
        expect(example062('rocket')).equal('ketroc')
    })
    it(`Input string is "cat" #2`, () => {
        expect(example062('cat')).equal('cat')
    })
    it(`Input string is "w" #3`, () => {
        expect(() => example062('w')).to.throw('The string length must be greater than or equal to three')
    })
})