// tests/example382.spec.ts
import { expect } from 'chai'
import { example382, } from '../src/example382'


console.log(`Fundamental(ES6)-Part-II
242. Remove Elements from End Until Condition


Write a JavaScript program to remove elements from the end of an array until the passed function returns true.
Returns the remaining elements of the array.


 - Loop through the array, using Array.prototype.slice() to drop the last element of the array until the value returned from func is true.
 - Return the remaining elements.


`)

describe('#example382', () => {
    it(`Input arguments are [1, 2, 3, 4], (n: any) => n < 3 #1`, () => {
        expect(example382( [1, 2, 3, 4], (n: any) => n < 3)).deep.equal([1, 2])
    })
})
