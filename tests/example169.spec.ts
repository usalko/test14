// tests/example169.spec.ts
import { expect } from 'chai'
import { example169 } from '../src/example169'

console.log(`Fundamental(ES6)-Part-I
19. Remove Right Elements from Array

Write a JavaScript program to remove specified elements from the right of a given array of elements.
`)
describe('#example169', () => {
    it(`Input array is [3, 5, 3], input array for remove elements [3] #1`, () => {
        expect(example169([3, 5, 3], [3])).deep.equal([5, 3])
    })
})
