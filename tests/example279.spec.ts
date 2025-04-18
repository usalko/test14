// tests/example279.spec.ts
import { expect } from 'chai'
import { example279 } from '../src/example279'

console.log(`Fundamental(ES6)-Part-I
139. Split Multiline String to Array

Write a JavaScript program to split a multiline string into an array of lines.

 - Use String.prototype.split() and a regular expression to match line breaks and create an array.

`)

describe('#example279', () => {
    it(`Input argument is 'Original string:' #1`, () => {
        expect(example279('Original string:')).deep.equal(['Original string:'])
    })
    it(`Input argument is 'This\nis a\nmultiline\nstring.\n' #2`, () => {
        expect(example279('This\nis a\nmultiline\nstring.\n')).deep.equal(['This', 'is a', 'multiline', 'string.', ''])
    })
})
