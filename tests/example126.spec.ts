// tests/example126.spec.ts
import { expect } from 'chai'
import { example126 } from '../src/example126'

console.log(`
Write a JavaScript program to get the largest even number from an array of integers.
`)
describe('#example126', () => {
    it(`Input array is [3, 33, 4, 5, 6, 7] #1`, () => {
        expect(example126([3, 33, 4, 5, 6, 7])).equal(6)
    })
})