// tests/example096.spec.ts
import { expect } from 'chai'
import { example096 } from '../src/example096'

console.log(`
Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
`)
describe('#example096', () => {
    it(`Input array is [8, 2, 5, 7, 1] #1`, () => {
        expect(example096([8, 2, 5, 7, 1])).equal(17)
    })
    it(`Input array is [9] #2`, () => {
        expect(example096([9])).equal(9)
    })
    it(`Input array is [9, 9] #3`, () => {
        expect(example096([9, 9])).equal(0)
    })
    it(`Input array is [9, 1, 2, 2, 4, 3] #4`, () => {
        expect(example096([9, 1, 2, 2, 4, 3])).equal(12)
    })
    it(`Input array is [] #5`, () => {
        expect(example096([])).equal(0)
    })
})