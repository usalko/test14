// tests/example290.spec.ts
import { expect } from 'chai'
import { example290 } from '../src/example290'

console.log(`Fundamental(ES6)-Part-I
150. Run Promises in Series

Write a JavaScript program to run a given array of promises in series.

 - Use Array.prototype.reduce() to create a promise chain, where each promise returns the next promise when resolved.

`)

describe('#example290', () => {
    const delay = (d: any) => new Promise(r => setTimeout(r, d));
    it(`Input argument is [() => delay(1000), () => delay(2000)] #1`, () => {
        expect(example290([() => delay(1000), () => delay(2000)])).equal(undefined)
    })
})
