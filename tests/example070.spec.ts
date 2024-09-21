// tests/example070.spec.ts
import { expect } from 'chai'
import { example070 } from '../src/example070'

console.log(`
Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
.
`)
describe('#example070', () => {
    it(`Input array is "[1,2,3]" #1`, () => {
        expect(example070([1, 2, 3])).deep.equal([2, 3, 1])
    })
    it(`Input array is "[]" #2`, () => {
        expect(() => example070([])).to.throw('Given array of integers of should have length 3')
    })
})