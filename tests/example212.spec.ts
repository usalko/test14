// tests/example212.spec.ts
import { expect } from 'chai'
import { example212 } from '../src/example212'

console.log(`Fundamental(ES6)-Part-I
62. Chain Asynchronous Functions

Write a JavaScript program to chain asynchronous functions.
Note: Loop through an array of functions containing asynchronous events, calling next when each asynchronous event has completed.
Loop through an array of functions containing asynchronous events, calling next when each asynchronous event has completed.
`)

describe('#example212', () => {
    it(`Input input argument is 1, pipeline is: (a) => a + 1, (b) => b + 2, (c) => c + 3 #1`, () => {
        expect(example212((a: any) => a + 1, (b: any) => b + 2, (c: any) => c + 3)(3)).equal(6)
    })
})
