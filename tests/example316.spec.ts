// tests/example316.spec.ts
import { expect } from 'chai'
import { example316 } from '../src/example316'


console.log(`Fundamental(ES6)-Part-I
176. n Minimum Elements in Array


Write a JavaScript program to get the n minimum elements from the provided array.
If n is greater than or equal to the provided array's length, return the original
array (sorted in ascending order).


 - Use Array.prototype.sort() combined with the spread operator (...) to create a shallow clone of the array and sort it in ascending order.
 - Use Array.prototype.slice() to get the specified number of elements.
 - Omit the second argument, n, to get a one-element array.
 - If n is greater than or equal to the provided array's length, then return the original array (sorted in ascending order).

`)

describe('#example316', () => {
    it(`Input argument is [1, 2, 3] #1`, () => {
        expect(example316([1, 2, 3])).deep.equal([1])
    })
    it(`Input arguments are [1, 2, 3], 2 #1`, () => {
        expect(example316([1, 2, 3], 2)).deep.equal([1, 2])
    })
})
