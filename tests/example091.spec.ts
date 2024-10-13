// tests/example091.spec.ts
import { expect } from 'chai'
import { example091 } from '../src/example091'

console.log(`
Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers
(numbers that follow each other in order) in a given array of positive integers.
`)
describe('#example091', () => {
    it(`Input array is [3,2,1,5,6,4] #1`, () => {
        expect(example091([3,2,1,5,6,4])).equal(12)
    })
    it(`Input array is [] #2`, () => {
        expect(example091([])).equal(0)
    })
    it(`Input array is [3,1,2,31,32,1] #3`, () => {
        expect(example091([3,1,2,31,32,1])).equal(68)
    })
})