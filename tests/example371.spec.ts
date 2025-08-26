// tests/example371.spec.ts
import { expect } from 'chai'
import { example371, } from '../src/example371'


console.log(`Fundamental(ES6)-Part-II
231. Iterate Object Properties in Reverse


Write a JavaScript program to iterate over all the properties of an object in reverse, running a callback for each one.


 - Use Object.keys(obj) to get all the properties of the object, Array.prototype.reverse() to reverse their order.
 - Use Array.prototype.forEach() to run the provided function for each key-value pair.
 - The callback receives three arguments - the value, the key and the object.

`)

describe('#example371', () => {
    it(`Input arguments are: { foo: 'bar', a: 1 }, (v: any) => JSON.stringify(v) #1`, () => {
        expect(example371({ foo: 'bar', a: 1 }, (v: any) => v)).deep.equal([1, 'bar'])
    })
})
