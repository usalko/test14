// tests/example098.spec.ts
import { expect } from 'chai'
import { example098 } from '../src/example098'

console.log(`
Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
`)
describe('#example098', () => {
    it(`Input string is "RaR" #1`, () => {
        expect(example098("RaR")).equal('RAR')
    })
    it(`Input string is "Respect" #2`, () => {
        expect(example098("Respect")).equal('respect')
    })
    it(`Input string is "" #3`, () => {
        expect(example098("")).equal('')
    })
})