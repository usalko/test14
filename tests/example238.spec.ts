// tests/example238.spec.ts
import { expect } from 'chai'
import { example238 } from '../src/example238'

console.log(`Fundamental(ES6)-Part-I
88. Find Median of Numbers in Array

Write a JavaScript program to get the median of an array of numbers.

Note: Find the middle of the array, use Array.sort() to sort the values. Return the number at the midpoint if length is odd, otherwise the average of the two middle numbers.

 - Find the middle of the array, use Array.prototype.sort() to sort the values.
 - Return the number at the midpoint if Array.prototype.length is odd, otherwise the average of the two middle numbers.

`)

describe('#example238', () => {
    it(`Input argument is [5, 6, 50, 1, -5] #1`, () => {
        expect(example238([5, 6, 50, 1, -5])).equal(5)
    })
    it(`Input argument is [1, 2, 3, 4, 5] #2`, () => {
        expect(example238([1, 2, 3, 4, 5])).equal(3)
    })
})
