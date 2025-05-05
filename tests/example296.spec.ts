// tests/example296.spec.ts
import { expect } from 'chai'
import { example296 } from '../src/example296'

console.log(`Fundamental(ES6)-Part-I
156. Array Successive Reduce Values


Write a JavaScript program to apply a function against an accumulator and
each element in the array (from left to right),
returning an array of successively reduced values.


 - Use Array.prototype.reduce() to apply the given function to the given array, storing each new result.


`)

describe('#example296', () => {
    it(`Input arguments are [1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0 #1`, () => {
        expect(example296([1, 2, 3, 4, 5, 6], (acc: any, val: any) => acc + val, 0)).deep.equal([0, 1, 3, 6, 10, 15, 21])
    })
})
