// tests/example183.spec.ts
import { expect } from 'chai'
import { example183 } from '../src/example183'

console.log(`Fundamental(ES6)-Part-I
33. Random Number in Range

Write a JavaScript program to generate a random number in the specified range.
`)
describe('#example183', () => {
    it(`Input array is [1, 2, 3, 4, 5, 6, 7] #1`, () => {
        expect(example183([1, 2, 3, 4, 5, 6, 7])).deep.equal([2, 3, 4, 5, 6, 7])
    })
})
