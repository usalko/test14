// tests/example206.spec.ts
import { expect } from 'chai'
import { example206 } from '../src/example206'

console.log(`Fundamental(ES6)-Part-I
56. Check All Elements Equal in Array

Write a JavaScript program to check whether all elements in a given array are equal or not.
`)

describe('#example206', () => {
    it(`Input array is: ["a", "b", "c"] #1`, () => {
        expect(example206(["a", "b", "c"])).equal(false)
    })
    it(`Input array is: ["a", "a", "a"] #2`, () => {
        expect(example206(["a", "a", "a"])).equal(true)
    })
})
