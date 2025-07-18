// tests/example351.spec.ts
import { expect } from 'chai'
import { example351 } from '../src/example351'


console.log(`Fundamental(ES6)-Part-II
211. Common Elements in Arrays


Write a JavaScript program to get a list of elements that exist in both arrays.


 - Create a Set from b, then use Array.prototype.filter() on a to only keep values contained in b.


`)

describe('#example351', () => {
    it(`Input arguments are [1, 2, 3], [4, 3, 2] #1`, () => {
        expect(example351([1, 2, 3], [4, 3, 2])).deep.equal([2, 3])
    })
})
