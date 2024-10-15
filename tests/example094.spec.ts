// tests/example094.spec.ts
import { expect } from 'chai'
import { example094 } from '../src/example094'

console.log(`
Write a JavaScript program to find the number appearing most frequently in a given array of integers.
`)
describe('#example094', () => {
    it(`Input array is [5, 4, 3, 4, 7, 6] #1`, () => {
        expect(example094([5, 4, 3, 4, 7, 6])).equal(4)
    })
    it(`Input array is [2, 2, 4, 4, 6, 6] #2`, () => {
        expect(example094([2, 2, 4, 4, 6, 6])).equal(2)
    })
    it(`Input array is [] #3`, () => {
        expect(() => example094([])).to.throw('An array sholud contain at least one element')
    })
    it(`Input array is [10] #4`, () => {
        expect(example094([10])).equal(10)
    })
})