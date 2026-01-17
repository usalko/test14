// tests/example398.spec.ts
import { assert, expect } from 'chai'
import { example398 } from '../src/example398'


console.log(`Fundamental(ES6)-Part-II
258. Limit Function Arguments

Write a JavaScript program to create a function that accepts up to n arguments, ignoring any additional arguments. 

    - Call the provided function, fn, with up to n arguments, using Array.prototype.slice(0, n) and the spread operator (...).

`)

describe('#example398', () => {
    it(`Input argument is: [[2, 6, 'a'], [8, 4, 6], [10]] #1`, () => {
        expect([[2, 6, 'a'], [8, 4, 6], [10]].map((x: any[]) => example398(x, 2))).deep.equal([6, 8, 10])
    })
})
