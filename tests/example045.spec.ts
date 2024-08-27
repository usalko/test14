// tests/example045.spec.ts
import { expect } from 'chai'
import { example045 } from '../src/example045'

console.log(`
Write a JavaScript program that checks two integer values and returns true
if either one is 15 or if their sum or difference is 15.
`)
describe('#example045', () => {
    it(`Input numbers are 17, 24 #1`, () => {
        expect(example045(17, 24)).equal(false)
    })
    it(`Input numbers are 15, 27 #1`, () => {
        expect(example045(15, 27)).equal(true)
    })
    it(`Input numbers are 7, 8 #1`, () => {
        expect(example045(7, 8)).equal(true)
    })
    it(`Input numbers are 28, 13 #1`, () => {
        expect(example045(28, 13)).equal(true)
    })
})