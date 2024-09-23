// tests/example072.spec.ts
import { expect } from 'chai'
import { example072 } from '../src/example072'

console.log(`
Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
.
`)
describe('#example072', () => {
    it(`Input array is "[1, 2, 3]" #1`, () => {
        expect(example072([1, 2, 3])).equal(false)
    })
    it(`Input array is "[1, 2, 1]" #1`, () => {
        expect(example072([1, 2, 1])).equal(true)
    })
    it(`Input array is "[]" #1`, () => {
        expect(() => example072([])).to.throw('Given array of integers should have length 3')
    })
})