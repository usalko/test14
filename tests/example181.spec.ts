// tests/example181.spec.ts
import { expect } from 'chai'
import { example181 } from '../src/example181'

console.log(`Fundamental(ES6)-Part-I
31. All Elements Except First in Array

Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.
`)
describe('#example181', () => {
    it(`Input array is [1, 2, 3, 4, 5, 6, 7] #1`, () => {
        expect(example181([1, 2, 3, 4, 5, 6, 7])).deep.equal([2, 3, 4, 5, 6, 7])
    })
})
