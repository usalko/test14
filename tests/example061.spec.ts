// tests/example061.spec.ts
import { expect } from 'chai'
import { example061 } from '../src/example061'

console.log(`
Write a JavaScript program to concatenate two strings except for their first character.
`)
describe('#example061', () => {
    it(`Input string1 is "rocket" input string2 "science" #1`, () => {
        expect(example061('rocket', 'science')).equal('rocketcience')
    })
    it(`Input string1 is "a" input string2 "" #2`, () => {
        expect(example061('a', '')).equal('a')
    })
    it(`Input string1 is "" input string2 "a" #3`, () => {
        expect(example061('', 'a')).equal('')
    })
    it(`Input string1 is "" input string2 "" #4`, () => {
        expect(example061('', '')).equal('')
    })
})