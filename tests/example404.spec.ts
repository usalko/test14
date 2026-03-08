// tests/example404.spec.ts
import { assert, expect } from 'chai'
import { example404 } from '../src/example404'


console.log(`Fundamental(ES6)-Part-II
264. Capitalize First Letters of Words
Write a JavaScript program to capitalize the first letter of every word in a string.

    - Use String.prototype.replace() to match the first character of each word and String.prototype.toUpperCase() to capitalize it.
`)

describe('#example404', () => {
    it(`Input argument is 'hello world!' #1`, () => {
        expect(example404('hello world!')).equal('Hello World!')
    })
})
