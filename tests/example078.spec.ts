// tests/example078.spec.ts
import { expect } from 'chai'
import { example078 } from '../src/example078'

console.log(`
Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
`)
describe('#example078', () => {
    it(`Input array is "[0, 2]"  #1`, () => {
        expect(example078([0, 2])).equal(true)
    })
    it(`Input array is "[1, 14]"  #2`, () => {
        expect(example078([1, 14])).equal(false)
    })
    it(`Input array is "[2, 3]"  #3`, () => {
        expect(example078([2, 3])).equal(false)
    })
    it(`Input array is "[1, 3]"  #4`, () => {
        expect(example078([1, 3])).equal(false)
    })
    it(`Input array is "[3, 1]"  #5`, () => {
        expect(example078([3, 1])).equal(false)
    })
    it(`Input array is "[]"  #6`, () => {
        expect(() => example078([])).to.throw('The array length must be equal to 2')
    })
})