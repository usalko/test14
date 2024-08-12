// tests/example030.spec.ts
import { expect } from 'chai'
import { example030 } from '../src/example030'

console.log(`
Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
If "Script" appears in the string, return the string without "Script" otherwise return the original one.
`)
describe('#example030', () => {
    it(`JavaScript is cool #1`, () => {
        expect(example030('JavaScript is cool')).equal('Java is cool')
    })
    it(`It's a javaScript world #1`, () => {
        expect(example030('It\'s a javaScript world')).equal('It\'s a javaScript world')
    })
    it(`Recover yourself please #1`, () => {
        expect(example030('Recover yourself please')).equal('Recover yourself please')
    })
})