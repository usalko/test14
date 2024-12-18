// tests/example158.spec.ts
import { expect } from 'chai'
import { example158 } from '../src/example158'

console.log(`Fundamental(ES6)-Part-I
8. Filter Specified Values from Array

Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
`)
describe('#example158', () => {
    it(`Input array is ['a', 'b', 'c', 'd', 'e'], filtered values are 'a', 'd' #1`, () => {
        expect(example158(['a', 'b', 'c', 'd', 'e'], 'a', 'd')).deep.equal(['b', 'c', 'e'])
    })
})
