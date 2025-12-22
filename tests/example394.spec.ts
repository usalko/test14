// tests/example394.spec.ts
import { assert, expect } from 'chai'
import { example394 } from '../src/example394'


console.log(`Fundamental(ES6)-Part-II
254. Generate UUID (Node.js)

Write a JavaScript program to generate a UUID in Node.JS. Use crypto API to generate a UUID, compliant with RFC4122 version 4.

    Use crypto.randomBytes() to generate a UUID, compliant with RFC4122 version 4.
    Use Number.prototype.toString(16) to convert it to a proper UUID.
`)

describe('#example394', () => {
    it(`No input arguments #1`, () => {
        expect(example394()).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    })
})
