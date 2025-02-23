// tests/example224.spec.ts
import { expect } from 'chai'
import { example224 } from '../src/example224'

console.log(`Fundamental(ES6)-Part-I
74. Filter Array by Comparator

Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.
 - Use Array.prototype.filter() and Array.prototype.findIndex() to find the appropriate values.
 - Omit the last argument, comp, to use a default strict equality comparator.
`)

describe('#example224', () => {
    it(`Input arguments are [1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b) #1`, () => {
        expect(example224([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a: any, b: any) => Math.round(a) === Math.round(b))).deep.equal([1.2])
    })
})
