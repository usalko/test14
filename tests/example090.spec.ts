// tests/example090.spec.ts
import { expect } from 'chai'
import { example090 } from '../src/example090'

console.log(`
Write a JavaScript program to find the kth greatest element in a given array of integers.
`)
describe('#example090', () => {
    it(`Input array is [3,2,1,5,6,4], k is 2 #1`, () => {
        expect(example090([3,2,1,5,6,4], 2)).equal(5)
    })
    it(`Input array is [3,2,3,1,2,4,5,5,6], k is 4 #2`, () => {
        expect(example090([3,2,3,1,2,4,5,5,6], 4)).equal(4)
    })
})