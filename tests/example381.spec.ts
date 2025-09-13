// tests/example381.spec.ts
import { expect } from 'chai'
import { example381, } from '../src/example381'


console.log(`Fundamental(ES6)-Part-II
241. Remove Elements Until Condition


Write a JavaScript program to remove elements from an array until the passed function returns true.
Returns the remaining elements in the array.


 - Loop through the array, using Array.prototype.slice() to drop the first element of the array until the value returned from func is true.
 - Return the remaining elements.


`)

describe('#example381', () => {
    it(`Input arguments are [1, 2, 3, 4], (n: any) => n >= 3 #1`, () => {
        expect(example381([1, 2, 3, 4], (n: any) => n >= 3)).deep.equal([3, 4])
    })
})
