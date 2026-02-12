// tests/example403.spec.ts
import { assert, expect } from 'chai'
import { example403 } from '../src/example403'


console.log(`Fundamental(ES6)-Part-II
263. Capitalize First Letter
Write a JavaScript program to capitalize the first letter of a string.

    - Use array destructuring and String.prototype.toUpperCase() to capitalize the first letter of the string.
    - Use Array.prototype.join('') to combine the capitalized first with the ...rest of the characters.
    - Omit the lowerRest argument to keep the rest of the string intact, or set it to true to convert to lowercase.

`)

describe('#example403', () => {
    it(`Input argument is 'fooBar' #1`, () => {
        expect(example403('fooBar')).equal('FooBar')
    })
    it(`Input arguments are 'fooBar', true #1`, () => {
        expect(example403('fooBar', true)).equal('Foobar')
    })
})
