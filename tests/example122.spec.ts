// tests/example122.spec.ts
import { expect } from 'chai'
import { example122 } from '../src/example122'

console.log(`
Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
`)
describe('#example122', () => {
    it(`Input array is [1, 2, 3] #1`, () => {
        expect(example122([1, 2, 3])).equal(true)
    })
    it(`Input array is [3, 2, 1] #2`, () => {
        expect(example122([3, 2, 1])).equal(true)
    })
    it(`Input array is [1, 2, 1] #3`, () => {
        expect(example122([1, 2, 1])).equal(false)
    })
    it(`Input array is [2, 2, 2] #4`, () => {
        expect(example122([2, 2, 2])).equal(false)
    })
    it(`Input array is [17, 18, 20] #5`, () => {
        expect(example122([17, 18, 20])).equal(true)
    })
    it(`Input array is [10000000, 999999] #6`, () => {
        expect(example122([10000000, 999999])).equal(true)
    })
})