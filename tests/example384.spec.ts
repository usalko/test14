// tests/example384.spec.ts
import { expect } from 'chai'
import { example384, } from '../src/example384'


console.log(`Fundamental(ES6)-Part-II
244. Difference Between Arrays

Write a JavaScript program to get the difference between two given arrays.

 - Create a Set from b to get the unique values in b.
 - Use Array.prototype.filter() on a to only keep values not contained in b, using Set.prototype.has().

`)

describe('#example384', () => {
    it(`Input arguments are [1, 2, 3], [1, 2, 4] #1`, () => {
        expect(example384([1, 2, 3], [1, 2, 4])).deep.equal([3])
    })
    it(`Input arguments are [1, 2, 4], [1, 2, 3] #2`, () => {
        expect(example384([1, 2, 4], [1, 2, 3])).deep.equal([4])
    })
})
