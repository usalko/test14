// tests/example364.spec.ts
import { expect } from 'chai'
import { example364, } from '../src/example364'


console.log(`Fundamental(ES6)-Part-II
224. Remove HTML/XML Tags


Write a JavaScript program to remove HTML/XML tags from strings.

 
Note: Use a regular expression to remove HTML/XML tags from a string.

 - Use a regular expression to remove HTML/XML tags from a string.


`)

describe('#example364', () => {
    it(`Input argument is: '<p><em>lorem</em> <strong>ipsum</strong></p>' #1`, () => {
        expect(example364('<p><em>lorem</em> <strong>ipsum</strong></p>')).equal('lorem ipsum')
    })
})
