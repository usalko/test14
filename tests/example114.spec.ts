// tests/example114.spec.ts
import { expect } from 'chai'
import { example114 } from '../src/example114'

console.log(`
Write a JavaScript program to check whether a given string represents a correct sentence or not.
A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.) 
`)
describe('#example114', () => {
    it(`Input string is "I'ts correct sentence." #1`, () => {
        expect(example114('I\'ts correct sentence.')).equal(true)
    })
    it(`Input string is "incorrect sentence." #2`, () => {
        expect(example114('incorrect sentence.')).equal(false)
    })
    it(`Input string is "This an incorrect sentence too" #3`, () => {
        expect(example114('This an incorrect sentence too')).equal(false)
    })
})