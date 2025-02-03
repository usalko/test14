// tests/example204.spec.ts
import { expect } from 'chai'
import { example204 } from '../src/example204'

console.log(`Fundamental(ES6)-Part-I
54. Array of Numbers in Specified Range

Write a JavaScript program to initialize an array containing numbers in the specified range.
Start and end are inclusive of their common point of difference.
`)

describe('#example204', () => {
    it(`Input number 1 is: 2, input number 2 is: 6 #1`, () => {
        expect(example204(2, 6)).deep.equal([2, 3, 4, 5, 6])
    })
})
