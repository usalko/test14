// tests/example373.spec.ts
import { expect } from 'chai'
import { example373, } from '../src/example373'


console.log(`Fundamental(ES6)-Part-II
233. Flatten Object Keys as Paths


Write a JavaScript program to flatten an object with the paths for keys.


 - Use recursion.
 - Use Object.keys(obj) combined with Array.prototype.reduce() to convert every leaf node to a flattened path node.
 - If the value of a key is an object, the function calls itself with the appropriate prefix to create the path using Object.assign().
 - Otherwise, it adds the appropriate prefixed key-value pair to the accumulator object.
 - You should always omit the second argument, prefix, unless you want every key to have a prefix.

`)

describe('#example373', () => {
    it(`Input arguments is: { a: { b: { c: 1 } }, d: 1 } #1`, () => {
        expect(example373({ a: { b: { c: 1 } }, d: 1 })).deep.equal({"a.b.c":1,"d":1})
    })
})
