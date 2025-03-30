// tests/example260.spec.ts
import { expect } from 'chai'
import { example260 } from '../src/example260'

console.log(`Fundamental(ES6)-Part-I
110. All Elements from Two Arrays

Write a JavaScript program to get every element in any of the two arrays at once.

Note: Create a Set with all values of a and b and convert to an array.

 - Create a new Set() with all values of a and b and convert it to an array.

`)

describe('#example260', () => {
    it(`Input arguments are [1, 2, 3], [4, 3, 2] #1`, () => {
        expect(example260([1, 2, 3], [4, 3, 2])).deep.equal([1, 2, 3, 4])
    })
    it(`Input arguments are [1, 2, 3], [1, 2, 3] #1`, () => {
        expect(example260([1, 2, 3], [1, 2, 3])).deep.equal([1, 2, 3])
    })
})
