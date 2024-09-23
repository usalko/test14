// tests/example069.spec.ts
import { expect } from 'chai'
import { example069 } from '../src/example069'

console.log(`
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
.
`)
describe('#example069', () => {
    it(`Input array is "[0,1,2]" #1`, () => {
        expect(example069([0, 1, 2])).equal(3)
    })
    it(`Input array is "[0,0,0]" #2`, () => {
        expect(example069([0, 0, 0])).equal(0)
    })
    it(`Input array is "[1,1,1,1]" #3`, () => {
        expect(() => example069([1, 1, 1, 1])).to.throw('Given array of integers should have length 3')
    })
    it(`Input array is "[1,1]" #4`, () => {
        expect(() => example069([1, 1])).to.throw('Given array of integers should have length 3')
    })
})