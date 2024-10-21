// tests/example100.spec.ts
import { expect } from 'chai'
import { example100 } from '../src/example100'

console.log(`
Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.
`)
describe('#example100', () => {
    it(`Input array1 is [1, 15, 18, 26], input array2 is [12, 64] #1`, () => {
        expect(example100([1, 15, 18, 26], [12, 64])).equal(false)
    })
    it(`Input array1 is [2, 4, 8, 16, 32, 64], input array2 is [64, 128, 256] #2`, () => {
        expect(example100([2, 4, 8, 16, 32, 64], [64, 128, 256])).equal(true)
    })
})