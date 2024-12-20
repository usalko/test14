// tests/example160.spec.ts
import { expect } from 'chai'
import { example160 } from '../src/example160'

console.log(`Fundamental(ES6)-Part-I
10. Extract Values by Indexes from Array

Write a JavaScript program to extract values (from array) at specified indexes which defined in a specified array.
`)
describe('#example160', () => {
    it(`Input array is [1, 2, 3], input indexes are [0, 2] #1`, () => {
        expect(example160([1, 2, 3], [0, 2])).deep.equal([1, 3])
    })
})
