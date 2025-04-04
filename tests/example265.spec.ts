// tests/example265.spec.ts
import { expect } from 'chai'
import { example265 } from '../src/example265'

console.log(`Fundamental(ES6)-Part-I
115. Single-Argument Function

Write a JavaScript program to create a function that accepts up to one argument, ignoring any additional arguments.

Note: Call the provided function, fn, with just the first argument given.

 - Call the provided function, fn, with just the first argument supplied.

`)

describe('#example265', () => {
    it(`Input argument is parseInt #1`, () => {
        expect(['6', '8', '10'].map(example265(parseInt))).deep.equal([6, 8, 10])
    })
})
