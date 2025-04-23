// tests/example281.spec.ts
import { expect } from 'chai'
import { example281 } from '../src/example281'

console.log(`Fundamental(ES6)-Part-I
141. Highest Index for Sorted Insertion

Write a JavaScript program to get the highest index at which value should be inserted
into an array in order to maintain its sort order.


 - Loosely check if the array is sorted in descending order.
 - Use Array.prototype.reverse() and Array.prototype.findIndex() to find the appropriate last index where the element should be inserted.

`)

describe('#example281', () => {
    it(`Input arguments are [10, 20, 30, 30, 40], 30 #1`, () => {
        expect(example281([10, 20, 30, 30, 40], 30)).equal(4)
    })
})
