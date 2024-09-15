// tests/example064.spec.ts
import { expect } from 'chai'
import { example064 } from '../src/example064'

console.log(`
Write a JavaScript program to concatenate two strings and return the result.
If the length of the strings does not match, then remove the characters from the longer string. 
`)
describe('#example064', () => {
    it(`Input string1 is "New" input string2 is "bie"#1`, () => {
        expect(example064('New', 'bie')).equal('Newbie')
    })
    it(`Input string1 is "Many" input string2 is "pie"#2`, () => {
        expect(example064('Many', 'pie')).equal('Manpie')
    })
    it(`Input string1 is "Man" input string2 is "strong"#3`, () => {
        expect(example064('Man', 'strong')).equal('Manstr')
    })
    it(`Input string1 is "" input string2 is "" #4`, () => {
        expect(example064('', '')).equal('')
    })
})