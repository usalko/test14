// tests/example388.spec.ts
import { assert, expect } from 'chai'
import { example388 } from '../src/example388'


console.log(`Fundamental(ES6)-Part-II
248. Deep Flatten Array

Write a JavaScript program to deep flatten an array.

    - Use recursion.
    - Use Array.prototype.concat() with an empty array ([]) and the spread operator (...) to flatten an array.
    - Recursively flatten each element that is an array.

`)

describe('#example388', () => {
    it(`Input arguments are [1, [2], [[3], 4], 5] #1`, () => {
        expect(example388([1, [2], [[3], 4], 5])).deep.equal([1, 2, 3, 4, 5])
    })
})
