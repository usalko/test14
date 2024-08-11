// tests/example028.spec.ts
import { expect } from 'chai'
import { example028 } from '../src/example028'

console.log(`
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
Return true if either of them falls within the range.
`)
describe('#example028', () => {
    it(`Input numbers are 1 50 #1`, () => {
        expect(example028(1, 50, [50, 99])).equal(false)
    })
    it(`Input numbers are 70 80 #1`, () => {
        expect(example028(70, 80, [50, 99])).equal(true)
    })
    it(`Input numbers are 100 101 #1`, () => {
        expect(example028(100, 101, [50, 99])).equal(false)
    })
})