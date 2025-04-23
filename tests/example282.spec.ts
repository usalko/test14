// tests/example282.spec.ts
import { expect } from 'chai'
import { example282 } from '../src/example282'

console.log(`Fundamental(ES6)-Part-I
142. Lowest Index for Sorted Insertion

Write a JavaScript program to get the lowest index at which values should be inserted
into an array in order to maintain its sorting order.

Note: Check if the array is sorted in descending order (loosely).

 - Loosely check if the array is sorted in descending order.
 - Use Array.prototype.findIndex() to find the appropriate index where the element should be inserted.

`)

describe('#example282', () => {
    it(`Input arguments are [5, 3, 2, 1], 4 #1`, () => {
        expect(example282([5, 3, 2, 1], 4)).equal(1)
    })
    it(`Input arguments are [30, 50], 40 #2`, () => {
        expect(example282([30, 50], 40)).equal(1)
    })
})
