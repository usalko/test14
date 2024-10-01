// tests/example080.spec.ts
import { expect } from 'chai'
import { example080 } from '../src/example080'

console.log(`
Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
`)
describe('#example080', () => {
    it(`Input array is "[]"  #1`, () => {
        expect(() => example080([])).to.throw('The array length should be at least 1')
    })
    it(`Input array is "[1]"  #2`, () => {
        expect(example080([1])).deep.equal([1, 1])
    })
    it(`Input array is "[1, 2]"  #3`, () => {
        expect(example080([1, 2])).deep.equal([2, 1])
    })
    it(`Input array is "[1, 2, 3]"  #4`, () => {
        expect(example080([1, 2, 3])).deep.equal([3, 1])
    })
    it(`Input array is "[2, 1]"  #5`, () => {
        expect(example080([2, 1])).deep.equal([1, 2])
    })
    it(`Input array is "[64, 32, 16]"  #6`, () => {
        expect(example080([64, 32, 16])).deep.equal([16, 64])
    })
})