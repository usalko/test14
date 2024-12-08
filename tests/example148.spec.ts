// tests/example148.spec.ts
import { expect } from 'chai'
import { example148 } from '../src/example148'

console.log(`
Write a JavaScript program to swap two halves of a given array of integers of even length.  
`)
describe('#example148', () => {
    it(`Input array is [1, 2] #1`, () => {
        expect(example148([1, 2])).deep.equal([2, 1])
    })
    it(`Input array is [1, 2, 4, 5] #2`, () => {
        expect(example148([1, 2, 4, 5])).deep.equal([4, 5, 1, 2])
    })
})
