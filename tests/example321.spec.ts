// tests/example321.spec.ts
import { expect } from 'chai'
import { example321, example321v2 } from '../src/example321'


console.log(`Fundamental(ES6)-Part-I
181. Get Last Array Element


Write a JavaScript program to get the last element from an given array.


 - Check if arr is truthy and has a length property.
 - Use Array.prototype.length - 1 to compute the index of the last element of the given array and return it, otherwise return undefined.

`)

describe('#example321', () => {
    it(`Input argument is [1, 2, 3] #1`, () => {
        expect(example321([1, 2, 3])).equal(3)
    })
    it(`Input argument is [1, 2, 3, 4, 5, 7] #2`, () => {
        expect(example321([1, 2, 3, 4, 5, 7])).equal(7)
    })
    it(`Input argument is [1, 2, 3] #3`, () => {
        expect(example321v2([1, 2, 3])).equal(3)
    })
    it(`Input argument is [1, 2, 3, 4, 5, 7] #4`, () => {
        expect(example321v2([1, 2, 3, 4, 5, 7])).equal(7)
    })
})
