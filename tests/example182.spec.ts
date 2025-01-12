// tests/example182.spec.ts
import { expect } from 'chai'
import { example182 } from '../src/example182'

console.log(`Fundamental(ES6)-Part-I
32. Sum Array After Mapping Function

Write a JavaScript program to get the sum of a given array, 
after mapping each element to a value using the provided function.
`)
describe('#example182', () => {
    it(`Input array is [1, 2, 3, 4, 5, 6, 7] #1`, () => {
        expect(example182([1, 2, 3, 4, 5, 6, 7])).deep.equal([2, 3, 4, 5, 6, 7])
    })
})
