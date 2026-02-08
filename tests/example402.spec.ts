// tests/example402.spec.ts
import { assert, expect } from 'chai'
import { example402 } from '../src/example402'


console.log(`Fundamental(ES6)-Part-II
262. Encode String to Base-64

Write a JavaScript program to create a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data. 

    - Create a Buffer for the given string with binary encoding and use Buffer.toString('base64') to return the encoded string.

`)

describe('#example402', () => {
    it(`Input arguments are 'foobar' #1`, () => {
        expect(example402('foobar')).equal('')
    })
})
