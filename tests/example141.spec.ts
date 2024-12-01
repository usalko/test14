// tests/example141.spec.ts
import { expect } from 'chai'
import { example141 } from '../src/example141'

console.log(`
Write a JavaScript program to find the number of elements in both arrays.
`)
describe('#example141', () => {
    it(`Input array 1 is [1, 2, 3] input array 2 is [2, 3, 4] #1`, () => {
        expect(example141([1, 2, 3, ], [2, 3, 4, ])).equal(2)
    }),
    it(`Input array 1 is [1, 2, 3, 4] input array 2 is [1, 2, 3, 4] #2`, () => {
        expect(example141([1, 2, 3, 4], [1, 2, 3, 4])).equal(4)
    })
    it(`Input array 1 is [1, 2, 3, 4] input array 2 is [1, 2, 3, 4] #3`, () => {
        expect(example141([1, 2, 3, 4], [1, 2, 3, 5])).equal(3)
    })
    it(`Input array 1 is [1, 2, 3, 4], input array 2 is [11, 22, 33, 44] #4`, () => {
        expect(example141([1, 2, 3, 4], [11, 22, 33, 44])).equal(0)
    })
})