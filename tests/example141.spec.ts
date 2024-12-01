// tests/example141.spec.ts
import { expect } from 'chai'
import { example141 } from '../src/example141'

console.log(`
Write a JavaScript program to find the number of elements in both arrays.
`)
describe('#example141', () => {
    it(`Input array 1 is [1, 2, 3] input array 2 is [2, 3, 4] #1`, () => {
        expect(example141([1, 2, 3, ], [2, 3, 4, ])).equal(4)
    })
})