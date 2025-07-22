// tests/example355.spec.ts
import { expect } from 'chai'
import { example355, } from '../src/example355'


console.log(`Fundamental(ES6)-Part-II
215. All Elements Except Last


Write a JavaScript program to get all the elements of an array except the last one.


 - Use Array.prototype.slice(0, -1) to return all but the last element of the array.


`)

describe('#example355', () => {
    it(`Input argument is [1, 2, 3] #1`, () => {
        expect(example355([1, 2, 3])).deep.equal([1, 2])
    })
    it(`Input arguments is [0, -1, -2] #1`, () => {
        expect(example355([0, -1, -2])).deep.equal([0, -1])
    })
})
