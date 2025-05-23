// tests/example234.spec.ts
import { expect } from 'chai'
import { example234 } from '../src/example234'

console.log(`Fundamental(ES6)-Part-I
84. Generate Object Values by Function

Write a JavaScript program to create an object with the same keys as the provided object.
It will also generate values generated by running the provided function for each value.

Maps the values of an object using the provided function, generating a new object with the same keys.

 - Use Object.keys() to iterate over the object's keys.
 - Use Array.prototype.reduce() to create a new object with the same keys and mapped values using fn.

`)

describe('#example234', () => {
    it(`Input arguments are { fred: { user: 'fred', age: 40 }, pebbles: { user: 'pebbles', age: 1 } }, u => u.age #1`, () => {
        expect(example234({ fred: { user: 'fred', age: 40 }, pebbles: { user: 'pebbles', age: 1 } }, (u: any) => u.age)).deep.equal({ fred: 40, pebbles: 1 })
    })
})
