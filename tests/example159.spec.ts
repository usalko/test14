// tests/example159.spec.ts
import { expect } from 'chai'
import { example159 } from '../src/example159'

console.log(`Fundamental(ES6)-Part-I
9. All Combinations from Array of Numbers

Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
`)
describe('#example159', () => {
    it(`Input array is [1, 2, 3] #1`, () => {
        expect(example159([1, 2, 3])).deep.equal([123, 213, 132, 312, 321, 231])
    })
})
