// tests/example099.spec.ts
import { expect } from 'chai'
import { example099 } from '../src/example099'

console.log(`
Write a JavaScript program to check whether it is possible to rearrange the characters of a given string.
This is in such a way that it will become equal to another given string.
`)
describe('#example099', () => {
    it(`Input string1 is "Funny day", input string2 is "day Funny" #1`, () => {
        expect(example099("Funny day", "day Funny")).equal(true)
    })
    it(`Input string1 is "day", input string2 is "yad" #2`, () => {
        expect(example099("day", "yad")).equal(true)
    })
    it(`Input string1 is "not equal", input string2 is "inequality" #3`, () => {
        expect(example099("not equal", "inequality")).equal(false)
    })
    it(`Input string1 is "record", input string2 is "record2" #4`, () => {
        expect(example099("record", "record2")).equal(false)
    })
    it(`Input string1 is "", input string2 is "any" #5`, () => {
        expect(example099("", "any")).equal(false)
    })
    it(`Input string1 is "", input string2 is "" #6`, () => {
        expect(example099("", "")).equal(true)
    })
})