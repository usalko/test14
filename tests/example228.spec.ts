// tests/example228.spec.ts
import { expect } from 'chai'
import { example228 } from '../src/example228'

console.log(`Fundamental(ES6)-Part-I
78. Invert Key-Value Pairs in Object

Write a JavaScript program to invert the key-value pairs of an object, without mutating it.
The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value.
If a function is supplied, it is applied to each inverted key.

 - Use Object.keys() and Array.prototype.reduce() to invert the key-value pairs of an object and apply the function provided (if any).
 - Omit the second argument, fn, to get the inverted keys without applying a function to them.
 - The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value.
 If a function is supplied, it is applied to each inverted key.

`)

describe('#example228', () => {
    it(`Input arguments are { a: 1, b: 2, c: 1 } #1`, () => {
        expect(example228({ a: 1, b: 2, c: 1 })).deep.equal({ '1': ['a', 'c'], '2': ['b'] })
    })
    it(`Input arguments are { a: 1, b: 2, c: 1 } #2`, () => {
        expect(example228({ a: 1, b: 2, c: 1 }, (value: any) => 'group' + value)).deep.equal({ group1: ['a', 'c'], group2: ['b'] })
    })
})
