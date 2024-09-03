// tests/example052.spec.ts
import { expect } from 'chai'
import { example052 } from '../src/example052'

console.log(`
Write a JavaScript program to convert letters of a given string alphabetically.
`)
describe('#example052', () => {
    it(`Input string is "forever yang" #1`, () => {
        expect(example052('forever yang')).equal(' aeefgnorrvy')
    })
    it(`Input number is "nnnnnnnnnnnn" #2`, () => {
        expect(example052('nnnnnnnnnnnn')).equal('nnnnnnnnnnnn')
    })
})