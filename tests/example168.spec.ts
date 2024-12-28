// tests/example168.spec.ts
import { expect } from 'chai'
import { example168 } from '../src/example168'

console.log(`Fundamental(ES6)-Part-I
18. Remove Left Elements from Array

Write a JavaScript program to remove specified elements from the left of a given array of elements.
`)
describe('#example168', () => {
    it(`Input array is [3, 5, 3], input array for remove elements [3] #1`, () => {
        expect(example168([3, 5, 3], [3]).deep.equal([3, 5])
    })
})
