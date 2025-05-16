// tests/example307.spec.ts
import { expect } from 'chai'
import { example307 } from '../src/example307'


console.log(`Fundamental(ES6)-Part-I
167. Count Less-Than-or-Equal Numbers


Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value.
This is done using the percentile formula.


 - Use Array.prototype.reduce() to calculate how many numbers are below the value and how many are the same value
 and apply the percentile formula.


`)

describe('#example307', () => {
    it(`Input arguments are [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5 #1`, () => {
        expect(example307([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).equal(50)
    })
    it(`Input arguments are [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10 #2`, () => {
        expect(example307([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).equal(100)
    })
    it(`Input arguments are [1, 2, 3, 4, 5, 6], 3 #3`, () => {
        expect(example307([1, 2, 3, 4, 5, 6], 3)).equal(50)
    })
    it(`Input arguments are [1, 2, 3, 4, 5, 6], 4 #4`, () => {
        expect(example307([1, 2, 3, 4, 5, 6], 4)).equal(66.66)
    })
})
