// tests/example095.spec.ts
import { expect } from 'chai'
import { example095 } from '../src/example095'

console.log(`
Write a JavaScript program to replace all numbers with a specified number in an array of integers.
`)
describe('#example095', () => {
    it(`Input array is [1, 18, 5, 4, 13, 6], input number 4, replaced by number 5 #1`, () => {
        expect(example095([1, 18, 5, 4, 13, 6], 4, 5)).deep.equal([1, 18, 5, 5, 13, 6])
    })
    it(`Input array is [], input number 4, replaced by number 5 #1`, () => {
        expect(example095([], 4, 5)).deep.equal([])
    })
})