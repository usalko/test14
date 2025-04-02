// tests/example262.spec.ts
import { expect } from 'chai'
import { example262 } from '../src/example262'

console.log(`Fundamental(ES6)-Part-I
112. Unflatten Object from Key Paths

Write a JavaScript program to unflatten an object with the paths for keys.


 - Use nested Array.prototype.reduce() to convert the flat path to a leaf node.
 - Use String.prototype.split('.') to split each key with a dot delimiter and Array.prototype.reduce() to add objects against the keys.
 - If the current accumulator already contains a value against a particular key, return its value as the next accumulator.
 - Otherwise, add the appropriate key-value pair to the accumulator object and return the value as the accumulator.

`)

describe('#example262', () => {
    it(`Input argument is { 'a.b.c': 1, d: 1 } #1`, () => {
        expect(example262({ 'a.b.c': 1, d: 1 })).deep.equal({ a: { b: { c: 1 } }, d: 1 })
    })
})
