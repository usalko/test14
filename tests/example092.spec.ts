// tests/example092.spec.ts
import { expect } from 'chai'
import { example092 } from '../src/example092'

console.log(`
Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
`)
describe('#example092', () => {
    it(`Input array is [12, 1, 18, 2, 21, 90] #1`, () => {
        expect(example092([12, 1, 18, 2, 21, 90])).equal(69)
    })
    it(`Input array is [] #2`, () => {
        expect(() => example092([])).to.throw(`An array should has minimal length 2`)
    })
    it(`Input array is [1] #3`, () => {
        expect(() => example092([1])).to.throw(`An array should has minimal length 2`)
    })
    it(`Input array is [1, 1, 18, 2, 21, 90] #4`, () => {
        expect(example092([12, 1, 18, 2, 21, 90])).equal(69)
    })
})