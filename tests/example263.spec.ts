// tests/example263.spec.ts
import { expect } from 'chai'
import { example263 } from '../src/example263'

console.log(`Fundamental(ES6)-Part-I
113. Unescape HTML Characters

Write a JavaScript program to unescape escaped HTML characters.

Note: Create a Set with all values of a and b and convert to an array.

 - Use String.prototype.replace() with a regexp that matches the characters that need to be unescaped.
 - Use the function's callback to replace each escaped character instance with its associated unescaped
   character using a dictionary (object).

`)

describe('#example263', () => {
    it(`Input argument is '<a href="#">Me & you</a>' #1`, () => {
        expect(example263('<a href="#">Me & you</a>')).deep.equal("<a href=\"#\">Me & you</a>")
    })
})
