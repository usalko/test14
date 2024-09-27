// tests/example076.spec.ts
import { expect } from 'chai'
import { example076 } from '../src/example076'

console.log(`
Write a JavaScript program to create an array by taking the first and last elements from a given array of integers.
The length must be larger than or equal to 1. 
`)
describe('#example076', () => {
    it(`Input array is "[45, 43, 41]"  #1`, () => {
        expect(example076([45, 43, 41])).deep.equal([45, 41])
    })
    it(`Input array is "[1]"  #2`, () => {
        expect(example076([1])).deep.equal([1, 1])
    })
    it(`Input array is "[]"  #3`, () => {
        expect(() => example076([])).to.throw('The length must be larger than or equal to 1')
    })
})