// tests/example107.spec.ts
import { expect } from 'chai'
import { example107 } from '../src/example107'

console.log(`
Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. 
For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
`)
describe('#example107', () => {
    it(`Input array is [1, 2, 3] #1`, () => {
        expect(example107([1, 3, 2])).deep.equal([[1, 3], [1, 2]])
    })
    it(`Input array is [2, 4. 6] #2`, () => {
        expect(example107([2, 4, 6])).deep.equal([[2, 4], [2, 6]])
    })
    it(`Input array is [2, 4. 16] #2`, () => {
        expect(example107([2, 4, 16])).deep.equal([[2, 4], [2, 16], [4, 16]])
    })
})