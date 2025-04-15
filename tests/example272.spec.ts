// tests/example272.spec.ts
import { expect } from 'chai'
import { example272 } from '../src/example272'

console.log(`Fundamental(ES6)-Part-I
122. Add Ordinal Suffix to Number

Write a JavaScript program to add an ordinal suffix to a number.

 - Use the modulo operator (%) to find values of single and tens digits.
 - Find which ordinal pattern digits match.
 - If digit is found in teens pattern, use teens ordinal.

`)

describe('#example272', () => {
    it(`Input argument is '1' #1`, () => {
        expect(example272('1')).equal('1st')
    })
    it(`Input argument is '4' #2`, () => {
        expect(example272('4')).equal('4th')
    })
    it(`Input argument is '50' #3`, () => {
        expect(example272('50')).equal('50th')
    })
    it(`Input argument is '123' #4`, () => {
        expect(example272('123')).equal('123rd')
    })
})
