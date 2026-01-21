// tests/example398.spec.ts
import { assert, expect } from 'chai'
import { example399 } from '../src/example399'


console.log(`Fundamental(ES6)-Part-II
259. Decode Base-64 String

Write a JavaScript program to decode a string of data encoded using base-64 encoding.

Note: Create a Buffer for the given string with base-64 encoding and use Buffer.toString('binary') to return the decoded string.

    - Create a Buffer for the given string with base-64 encoding and use Buffer.toString('binary') to return the decoded string.

`)

describe('#example399', () => {
    it(`Input argument is: 'Zm9vYmFy' #1`, () => {
        expect(example399('Zm9vYmFy')).equal('Flowcharts')
    })
})
