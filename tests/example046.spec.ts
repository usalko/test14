// tests/example046.spec.ts
import { expect } from 'chai'
import { example046 } from '../src/example046'

console.log(`
Write a JavaScript program to check two given non-negative integers
if one (not both) is a multiple of 7 or 11.
`)
describe('#example046', () => {
    it(`Input numbers are 14, 3 #1`, () => {
        expect(example046(14, 3, [7, 11])).equal(true)
    })
    it(`Input numbers are 7, 22 #1`, () => {
        expect(example046(6, 22, [7, 11])).equal(true)
    })
    it(`Input numbers are 14, 28 #1`, () => {
        expect(example046(14, 28, [7, 11])).equal(false)
    })
    it(`Input numbers are 44, 66 #1`, () => {
        expect(example046(44, 66, [7, 11])).equal(false)
    })
    it(`Input numbers are 33, 35 #1`, () => {
        expect(example046(33, 35, [7, 11])).equal(false)
    })
    it(`Input numbers are 21, 99 #1`, () => {
        expect(example046(21, 99, [7, 11])).equal(false)
    })
})