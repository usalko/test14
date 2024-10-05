// tests/example084.spec.ts
import { expect } from 'chai'
import { example084 } from '../src/example084'

console.log(`
Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
`)
describe('#example084', () => {
    it(`Input string is "a" #1`, () => {
        expect(example084("a")).equal("b")
    })
    it(`Input string is "" #2`, () => {
        expect(example084("")).equal("")
    })
    it(`Input string is "zed" #3`, () => {
        expect(example084("zed")).equal("afe")
    })
})