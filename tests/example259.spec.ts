// tests/example259.spec.ts
import { expect } from 'chai'
import { example259 } from '../src/example259'

console.log(`Fundamental(ES6)-Part-I
109. Get nth Element from Array

Write a JavaScript program to get the nth element of a given array.

 - Use Array.prototype.slice() to get an array containing the nth element at the first place.
 - If the index is out of bounds, return undefined.
 - Omit the second argument, n, to get the first element of the array.

`)

describe('#example259', () => {
    it(`Input arguments are ['a', 'b', 'c'], 1 #1`, () => {
        expect(example259(['a', 'b', 'c'], 1).equal('b')
    })
    it(`Input arguments are ['a', 'b', 'b'], -3 #1`, () => {
        expect(example259(['a', 'b', 'b'], -3).equal('a')
    })
})
