// tests/example407.spec.ts
import { assert, expect } from 'chai'
import { example407 } from '../src/example407'


console.log(`Fundamental(ES6)-Part-II
267. Midpoint Between Points

Write a JavaScript program to calculate the midpoint between two pairs of points.

    - Destructure the array to get x1, y1, x2 and y2.
    - Calculate the midpoint for each dimension by dividing the sum of the two endpoints by 2
`)

describe('#example407', () => {
    it(`Input arguments are [6, 6], [4, 4] #1`, () => {
        expect(example407([6, 6], [4, 4])).deep.equal([5, 5])
    })
    it(`Input arguments are [2, -2], [4, 4] #2`, () => {
        expect(example407([2, -2], [4, 4])).deep.equal([3, 1])
    })
    it(`Input arguments are [2, 2], [-4, -1] #3`, () => {
        expect(example407([2, 2], [-4, -1])).deep.equal([-1, 0.5])
    })
    it(`Input arguments are [1, 3], [2, 5] #4`, () => {
        expect(example407([1, 3], [2, 5])).deep.equal([1.5, 4])
    })
})
