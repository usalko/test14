// tests/example235.spec.ts
import { expect } from 'chai'
import { example235 } from '../src/example235'

console.log(`Fundamental(ES6)-Part-I
85. Mask Characters Except Last Few

Write a JavaScript program to replace all but the last number of characters with the specified mask character.

 - Use String.prototype.slice() to grab the portion of the characters that will remain unmasked.
 - Use String.padStart() to fill the beginning of the string with the mask character up to the original length.
 - If num is negative, the unmasked characters will be at the start of the string.
 - Omit the second argument, num, to keep a default of 4 characters unmasked.
 - Omit the third argument, mask, to use a default character of '*' for the mask.

`)

describe('#example235', () => {
    it(`Input argument is '1234567890' #1`, () => {
        expect(example235('1234567890')).equal('******7890')
    })
    it(`Input arguments are '1234567890', 3 #2`, () => {
        expect(example235('1234567890', 3)).equal('*******890')
    })
    it(`Input arguments are '1234567890', -4, '$' #1`, () => {
        expect(example235('1234567890', -4, '$')).equal('$$$$567890')
    })
})
