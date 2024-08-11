// tests/example029.spec.ts
import { expect } from 'chai'
import { example029 } from '../src/example029'

console.log(`
Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
Return true if one or more of them are in the specified range.
`)
describe('#example029', () => {
    it(`Input numbers are 7 15 90 #1`, () => {
        expect(example029(7, 15, 90, [50, 99])).equal(true)
    })
    it(`Input numbers are 3 2 1 #1`, () => {
        expect(example029(3, 2, 1, [50, 99])).equal(false)
    })
    it(`Input numbers are 100 101 102 #1`, () => {
        expect(example029(100, 101, 102, [50, 99])).equal(false)
    })
})