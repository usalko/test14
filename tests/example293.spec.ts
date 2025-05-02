// tests/example293.spec.ts
import { expect } from 'chai'
import { example293 } from '../src/example293'

console.log(`Fundamental(ES6)-Part-I
153. Reverse Characters in String


Write a JavaScript program to reverse the order of characters in the string.

 - Use the spread operator (...) and Array.prototype.reverse() to reverse the order of the characters in the string.
 - Combine characters to get a string using String.prototype.join('').

`)

describe('#example293', () => {
    it(`Input argument is 'php' #1`, () => {
        expect(example293('php')).equal('php')
    })
    it(`Input argument is 'foobar' #2`, () => {
        expect(example293('foobar')).equal('raboof')
    })
})
