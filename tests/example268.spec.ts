// tests/example268.spec.ts
import { expect } from 'chai'
import { example268 } from '../src/example268'

console.log(`Fundamental(ES6)-Part-I
118. Reduce Object with Accumulator Function

Write a JavaScript program to apply a function against an accumulator and each key in the object (from left to right).

 - Use Object.keys() to iterate over each key in the object.
 - Use Array.prototype.reduce() to apply the specified function against the given accumulator.

`)

describe('#example268', () => {
    it(`Input arguments are: { a: 1, b: 2, c: 1 }, (r, v, k) => { (r[v] || (r[v] = [])).push(k); return r; }, {} #1`, () => {
        expect(example268({ a: 1, b: 2, c: 1 }, (r: any, v: any, k: any) => { (r[v] || (r[v] = [])).push(k); return r; }, {})).deep.equal({ '1': ['a', 'c'], '2': ['b'] })
    })
})
