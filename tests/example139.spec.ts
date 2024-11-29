// tests/example139.spec.ts
import { expect } from 'chai'
import { example139 } from '../src/example139'

console.log(`
Write a JavaScript program to find the position of the rightmost round number in an array of integers.
If there are no round numbers, the function returns 0. 
`)
describe('#example139', () => {
    it(`Input array is [1, 30, 2] #1`, () => {
        expect(example139([1, 30, 2])).equal(1)
    })
    it(`Input array is [1, 2, 3] #1`, () => {
        expect(example139([1, 2, 3])).equal(0)
    })
})