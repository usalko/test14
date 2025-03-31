// tests/example261.spec.ts
import { expect } from 'chai'
import { example261 } from '../src/example261'

console.log(`Fundamental(ES6)-Part-I
111. Build Array with Iterator and Seed

Write a JavaScript program to build an array, using an iterator function and an initial seed value.

Note: Create a Set with all values of a and b and convert to an array.

 - Use a while loop and Array.prototype.push() to call the function repeatedly until it returns false.
 - The iterator function accepts one argument (seed) and must always return an array with two elements
   ([value, nextSeed]) or false to terminate.

`)

describe('#example261', () => {
    it(`Input arguments are (n: number) => (n > 50 ? false : [-n, n + 10]), 10 #1`, () => {
        expect(example261((n: number) => (n > 50 ? false : [-n, n + 10]), 10)).deep.equal([-10, -20, -30, -40, -50])
    })
})
