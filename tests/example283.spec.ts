// tests/example283.spec.ts
import { expect } from 'chai'
import { example283 } from '../src/example283'

console.log(`Fundamental(ES6)-Part-I
143. Sort String Alphabetically

Write a JavaScript program to sort the characters of a string Alphabetically.

 - Use the spread operator (...), Array.prototype.sort() and String.prototype.localeCompare() to sort the characters in str.
 - Recombine using String.prototype.join('').

`)

describe('#example283', () => {
    it(`Input argument is 'cabbage' #1`, () => {
        expect(example283('cabbage')).equal('aabbceg')
    })
    it(`Input argument is 'a7fs23l1n4o6x' #2`, () => {
        expect(example283('a7fs23l1n4o6x')).equal('123467aflnosx')
    })
})
