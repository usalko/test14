// tests/example379.spec.ts
import { expect } from 'chai'
import { example379, } from '../src/example379'


console.log(`Fundamental(ES6)-Part-II
239. Escape String for Regex


Write a JavaScript program to escape a string to use in a regular expression.


 - Use String.prototype.replace() to escape special characters.


`)

describe('#example379', () => {
    it(`Input argument is (test) #1`, () => {
        expect(example379('(test)')).equal('\(test\)')
    })
})
