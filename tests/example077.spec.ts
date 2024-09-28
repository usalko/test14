// tests/example077.spec.ts
import { expect } from 'chai'
import { example077 } from '../src/example077'

console.log(`
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
`)
describe('#example077', () => {
    it(`Input array is "[0, 2]"  #1`, () => {
        expect(example077([0, 2])).equal(false)
    })
    it(`Input array is "[1, 14]"  #2`, () => {
        expect(example077([1, 14])).equal(true)
    })
    it(`Input array is "[2, 3]"  #3`, () => {
        expect(example077([2, 3])).equal(true)
    })
    it(`Input array is "[1, 3]"  #4`, () => {
        expect(example077([1, 3])).equal(true)
    })
    it(`Input array is "[3, 1]"  #5`, () => {
        expect(example077([3, 1])).equal(true)
    })
    it(`Input array is "[]"  #6`, () => {
        expect(() => example077([])).to.throw('The array length must be equal to 2')
    })
})