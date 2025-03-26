// tests/example256.spec.ts
import { expect } from 'chai'
import { example256 } from '../src/example256'

console.log(`Fundamental(ES6)-Part-I
106. Ungroup Array with Function

Write a JavaScript program to create an array of elements, ungrouping the elements in an array produced by zip and
applying the provided function.


 - Use Math.max(), Function.prototype.apply() to get the longest subarray in the array, Array.prototype.map() to make each element an array.
 - Use Array.prototype.reduce() and Array.prototype.forEach() to map grouped values to individual arrays.
 - Use Array.prototype.map() and the spread operator (...) to apply fn to each individual group of elements.

`)

describe('#example256', () => {
    it(`Input arguments are [[1, 10, 100], [2, 20, 200]], (...args: any[]) => args.reduce((acc, v) => acc + v, 0) '200' #1`, () => {
        expect(example256([[1, 10, 100], [2, 20, 200]], (...args: any[]) => args.reduce((acc, v) => acc + v, 0))).deep.equal([3, 30, 300])
    })
})
