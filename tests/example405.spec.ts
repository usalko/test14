// tests/example405.spec.ts
import { assert, expect } from 'chai'
import { example405 } from '../src/example405'


console.log(`Fundamental(ES6)-Part-II
265. Chunk Array

Write a JavaScript program to chunk an array into smaller arrays of a specified size.

    - Use Array.from() to create a new array, that fits the number of chunks that will be produced.
    - Use Array.prototype.slice() to map each element of the new array to a chunk the length of size.
    - If the original array can't be split evenly, the final chunk will contain the remaining elements.

`)

describe('#example405', () => {
    it(`Input arguments are [1, 2, 3, 4, 5], 2 #1`, () => {
        expect(example405([1, 2, 3, 4, 5], 2)).deep.equal([[1, 2], [3, 4], [5]])
    })
})
