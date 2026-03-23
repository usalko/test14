// tests/example406.spec.ts
import { assert, expect } from 'chai'
import { example406 } from '../src/example406'


console.log(`Fundamental(ES6)-Part-II
266. Clamp Number in Range

Write a JavaScript program to clamp a number within the inclusive range specified by the given boundary values a and b.

    - If num falls within the range, return num.
    - Otherwise, return the nearest number in the range.

`)

describe('#example406', () => {
    it(`Input arguments are 2, 3, 5 #1`, () => {
        expect(example406(2, 3, 5)).to.equal(3)
    })
    it(`Input arguments are 1, -1, -5 #1`, () => {
        expect(example406(1, -1, -5)).to.equal(-1)
    })
})
