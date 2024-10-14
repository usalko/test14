// tests/example093.spec.ts
import { expect } from 'chai'
import { example093 } from '../src/example093'

console.log(`
Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
`)
describe('#example093', () => {
    it(`Input array is [9, 4, 35, 6, 9, -1] #1`, () => {
        expect(example093([9, 4, 35, 6, 9, -1])).equal(36)
    })
    it(`Input array is [] #2`, () => {
        expect(() => example093([])).to.throw(`An array should has minimal length 2`)
    })
    it(`Input array is [1] #3`, () => {
        expect(() => example093([1])).to.throw(`An array should has minimal length 2`)
    })
})