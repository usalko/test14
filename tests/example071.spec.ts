// tests/example071.spec.ts
import { expect } from 'chai'
import { example071 } from '../src/example071'

console.log(`
Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers.
The array length must be larger than or equal to 1.
.
`)
describe('#example071', () => {
    it(`Input array is "[1]" #1`, () => {
        expect(example071([1])).equal(true)
    })
    it(`Input array is "[1, 3, 15]" #2`, () => {
        expect(example071([1, 3, 15])).equal(true)
    })
    it(`Input array is "[15, 17]" #3`, () => {
        expect(example071([15, 17])).equal(false)
    })
    it(`Input array is "[3, 2, 1]" #4`, () => {
        expect(example071([3, 2, 1])).equal(true)
    })
    it(`Input array is "[1, 1, 1, 1, 1, 1]" #5`, () => {
        expect(example071([1, 1, 1, 1, 1])).equal(true)
    })
    it(`Input array is "[]" #6`, () => {
        expect(() => example071([])).to.throw('The array length must be larger than or equal to 1')
    })
})