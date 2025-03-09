// tests/example237.spec.ts
import { expect } from 'chai'
import { example237 } from '../src/example237'

console.log(`Fundamental(ES6)-Part-I
87. Get n Maximum Elements from Array

Write a JavaScript program to get the n maximum elements from the provided array. 
If n is greater than or equal to the provided array's length, return the original array (sorted in descending order).

 - Use Array.prototype.sort() combined with the spread operator (...) to create a shallow clone of the array and sort it in descending order.
 - Use Array.prototype.slice() to get the specified number of elements.
 - Omit the second argument, n, to get a one-element array.
 - If n is greater than or equal to the provided array's length, then return the original array (sorted in descending order).

`)

describe('#example237', () => {
    it(`Input argument is [1, 2, 3] #1`, () => {
        expect(example237([1, 2, 3])).deep.equal([3])
    })
    it(`Input argument is [1, 2, 3], 2 #1`, () => {
        expect(example237([1, 2, 3], 2)).deep.equal([2, 3])
    })
})
