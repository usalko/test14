// tests/example366.spec.ts
import { expect } from 'chai'
import { example366, } from '../src/example366'


console.log(`Fundamental(ES6)-Part-II
226. n Random Unique Elements


Write a JavaScript program to get n random elements with unique keys from an array up to the size of the array.

 
 - Shuffle the array using the Fisher-Yates algorithm.
 - Use Array.prototype.slice() to get the first n elements.
 - Omit the second argument, n, to get only one element at random from the array.


`)

describe('#example366', () => {
    it(`Input argument are: [1, 2, 3], 2 #1`, () => {
        expect(example366([1, 2, 3], 2)).deep.equal([3,2])
    })
    it(`Input argument are: [1, 2, 3], 4 #2`, () => {
        expect(example366([1, 2, 3], 4)).deep.equal([2,3,1])
    })
})
