// tests/example251.spec.ts
import { expect } from 'chai'
import { example251 } from '../src/example251'

console.log(`Fundamental(ES6)-Part-I
101. Object with Array Properties and Values

Write a JavaScript program to return the object associating the properties to the values
of a given array of valid property identifiers and an array of values.


Note: Since an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using Array.reduce().

Associates properties to values, given array of valid property identifiers and an array of values.

 - Use Array.prototype.reduce() to build an object from the two arrays.
 - If the length of props is longer than values, remaining keys will be undefined.
 - If the length of values is longer than props, remaining values will be ignored.

`)

describe('#example251', () => {
    it(`Input arguments are ['a', 'b', 'c'], [1, 2] #1`, () => {
        expect(example251(['a', 'b', 'c'], [1, 2])).deep.equal({"a":1,"b":2})
    })
    it(`Input arguments are ['a', 'b', 'c'], [1, 2] #1`, () => {
        expect(example251(['a', 'b'], [1, 2, 3])).deep.equal({"a":1,"b":2})
    })
})
