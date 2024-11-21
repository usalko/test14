// tests/example131.spec.ts
import { expect } from 'chai'
import { example131 } from '../src/example131'

console.log(`
Write a JavaScript program to create an array of prefix sums of the given array. 
In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan
of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ...,
the sums of prefixes of the input sequence:

y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2
`)
describe('#example131', () => {
    it(`Input array is [1, 2, 3] #1`, () => {
        expect(example131([1, 2, 3])).deep.equal([1, 3, 6])
    })
})