// tests/example267.spec.ts
import { expect } from 'chai'
import { example267 } from '../src/example267'

console.log(`Fundamental(ES6)-Part-I
117. Truncate String to Length

Write a JavaScript program to truncate a string up to a specified length.

Note: Determine if the string's length is greater than num. Return the string truncated to the desired length, with '...' appended to the end or the original string.

 - Determine if String.prototype.length is greater than num.
 - Return the string truncated to the desired length, with '...' appended to the end or the original string.

`)

describe('#example267', () => {
    it(`Input arguments are 'boomerang', 7 #1`, () => {
        expect(example267('boomerang', 7)).equal('boom...')
    })
})
