// tests/example073.spec.ts
import { expect } from 'chai'
import { example073 } from '../src/example073'

console.log(`
Write a JavaScript program to reverse the elements of a given array of integers of length 3.
.
`)
describe('#example073', () => {
    it(`Input array is "[17, 18, 19]" #1`, () => {
        expect(example073([17, 18, 19])).deep.equal([19, 18, 17])
    })
    it(`Input array is "[]" #2`, () => {
        expect(() => example073([])).to.throw('Given array of integers should have length 3')
    })
})