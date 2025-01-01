// tests/example172.spec.ts
import { expect } from 'chai'
import { example172 } from '../src/example172'

console.log(`Fundamental(ES6)-Part-I
22. Filter Non-Unique Values in Array

Write a JavaScript program to filter out non-unique values in an array.
`)
describe('#example172', () => {
    it(`Input array is [5, 6, 6, 7, 8, 8, 9] #1`, () => {
        expect(example172([5, 6, 6, 7, 8, 8, 9])).deep.equal([5, 6, 7, 8, 9])
    })
})
