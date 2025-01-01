// tests/example171.spec.ts
import { expect } from 'chai'
import { example171 } from '../src/example171'

console.log(`Fundamental(ES6)-Part-I
21. Every nth Element in Array

Write a JavaScript program to get every nth element in a given array.
`)
describe('#example171', () => {
    it(`Input array is [1, 2, 3, 4, 5, 6, 7, 8] #1`, () => {
        expect(example171([1, 2, 3, 4, 5, 6, 7, 8], 2)).deep.equal([2, 4, 6, 8])
    })
})
