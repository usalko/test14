// tests/example387.spec.ts
import { assert, expect } from 'chai'
import { example387 } from '../src/example387'


console.log(`Fundamental(ES6)-Part-II
247. Assign Defaults to Object


Write a JavaScript program that assigns default values to all undefined properties in an object.

    - Use Object.assign() to create a new empty object and copy the original one to maintain key order.
    - Use Array.prototype.reverse() and the spread operator (...) to combine the default values from left to right.
    - Finally, use obj again to overwrite properties that originally had a value.

`)

describe('#example387', () => {
    it(`Input arguments are { a: 1 }, { b: 2 }, { b: 6 }, { a: 3 } #1`, () => {
        expect(example387({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 })).deep.equal({"a":1,"b":2})
    })
})
