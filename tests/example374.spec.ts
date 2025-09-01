// tests/example374.spec.ts
import { expect } from 'chai'
import { example374, } from '../src/example374'


console.log(`Fundamental(ES6)-Part-II
234. Flatten Array to Depth


Write a JavaScript program to flatten a given array to the specified depth.

 - Use recursion, decrementing depth by 1 for each level of depth.
 - Use Array.prototype.reduce() and Array.prototype.concat() to merge elements or arrays.
 - Base case, for depth equal to 1 stops recursion.
 - Write a JavaScript program to flatten a given array to the specified depth.

`)

describe('#example374', () => {
    it(`Input arguments is: [1, [2], 3, 4] #1`, () => {
        expect(example374([1, [2], 3, 4])).deep.equal([1, 2, 3, 4])
    })
    it(`Input arguments is: [1, [2, [3, [4, 5], 6], 7], 8], 2 #2`, () => {
        expect(example374([1, [2, [3, [4, 5], 6], 7], 8], 2)).deep.equal([1, 2, 3, [4, 5], 6, 7, 8])
    })
})
