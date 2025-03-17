// tests/example246.spec.ts
import { expect } from 'chai'
import { example246 } from '../src/example246'

console.log(`Fundamental(ES6)-Part-I
96. Pick Keys from Object

Write a JavaScript program to pick  the key-value pairs corresponding to the given keys from an object.

 - Use Array.prototype.reduce() to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.

`)

describe('#example246', () => {

    it(`Input arguments are { a: 1, b: '2', c: 3 }, ['a', 'c'] #1`, () => {
        expect(example246({ a: 1, b: '2', c: 3 }, ['a', 'c'])).deep.equal({ a: 1, c: 3 })
    })
})
