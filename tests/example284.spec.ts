// tests/example284.spec.ts
import { expect } from 'chai'
import { example284 } from '../src/example284'

console.log(`Fundamental(ES6)-Part-I
144. Intersection of Two Arrays

Write a JavaScript program to get an array of elements that appear in both arrays.

 - Use Array.prototype.includes() to determine values that are not part of values.
 - Use Array.prototype.filter() to remove them.

`)

describe('#example284', () => {
    it(`Input arguments are [1, 2, 3], [1, 2, 4] #1`, () => {
        expect(example284([1, 2, 3], [1, 2, 4])).deep.equal([1, 2])
    })
})
