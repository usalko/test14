// tests/example087.spec.ts
import { expect } from 'chai'
import { example087 } from '../src/example087'

console.log(`
Write a JavaScript program to determine if two arrays of integers of the same length are similar.
The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
`)
describe('#example087', () => {
    it(`Input array1 is [1, 2], input array2 is [2, 1] #1`, () => {
        expect(example087([1, 2], [2, 1])).equal(true)
    })
    it(`Input array1 is [6], input array2 is [] #2`, () => {
        expect(example087([6], [])).equal(false)
    })
    it(`Input array1 is [0], input array2 is [0] #3`, () => {
        expect(example087([0], [0])).equal(true)
    })
    it(`Input array1 is [], input array2 is [] #4`, () => {
        expect(example087([], [])).equal(true)
    })
    it(`Input array1 is [1, -1, 2], input array2 is [2, 1, -1] #5`, () => {
        expect(example087([1, -1, 2], [2, 1, -1])).equal(true)  // one right shift == two swaps
    })
    it(`Input array1 is [1, -1, 2], input array2 is [-1, 2, 1] #6`, () => {
        expect(example087([1, -1, 2], [-1, 2, 1])).equal(true) // one left shift == two swaps
    })
    it(`Input array1 is [1, -1, 2], input array2 is [-1, 1, 2] #7`, () => {
        expect(example087([1, -1, 2], [-1, 1, 2])).equal(true)
    })
    it(`Input array1 is [1, -1, 2], input array2 is [1, 2, -1] #8`, () => {
        expect(example087([1, -1, 2], [1, 2, -1])).equal(true)
    })
    it(`Input array1 is [1, -1, 2], input array2 is [2, -1, 1] #9`, () => {
        expect(example087([1, -1, 2], [2, -1, 1])).equal(true)
    })
    it(`Input array1 is [1, -1, 2], input array2 is [2, 1, 1] #10`, () => {
        expect(example087([1, 1, 2], [2, 1, 1])).equal(true)
    })
})