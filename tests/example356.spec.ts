// tests/example356.spec.ts
import { expect } from 'chai'
import { example356, } from '../src/example356'


console.log(`Fundamental(ES6)-Part-II
216. Indices of Value in Array


Write a JavaScript program to get all val indices in an array. If val never occurs, return [].


 - Use Array.prototype.reduce() to loop over elements and store indexes for matching elements.


`)

describe('#example356', () => {
    it(`Input arguments are [1, 2, 3, 1, 2, 3], 1 #1`, () => {
        expect(example356([1, 2, 3, 1, 2, 3], 1)).deep.equal([0, 3])
    })
    it(`Input arguments are [1, 2, 3], 4 #1`, () => {
        expect(example356([1, 2, 3], 4)).deep.equal([])
    })
})
