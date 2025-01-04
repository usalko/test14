// tests/example175.spec.ts
import { expect } from 'chai'
import { example175 } from '../src/example175'

console.log(`Fundamental(ES6)-Part-I
25. Create All Pairs from Arrays

Write a JavaScript program to create an array out of the two arrays by creating each possible pair from the two arrays.
`)
describe('#example175', () => {
    it(`Input array1 is [1, 2, 3], input array2 is ['a', 'b', 'c'] #1`, () => {
        expect(example175([1, 2, 3], ['a', 'b', 'c'])).deep.equal([[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']])
    })
})
