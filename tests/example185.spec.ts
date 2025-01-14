// tests/example185.spec.ts
import { expect } from 'chai'
import { example185 } from '../src/example185'

console.log(`Fundamental(ES6)-Part-I
36. Invoke Functions with Arguments


Write a JavaScript program to create a function that invokes each provided function with the arguments
it receives and returns the results.
`)

describe('#example185', () => {
    it(`Input function is function(a: number): bool { return a > 0 }, input argument is 1 #1`, () => {
        expect(example185(function(a: number): boolean { return a > 0 }, 1)).eq(true)
    })
    it(`Input function is function(a: number): bool { return a > 0 }, input argument is -1 #2`, () => {
        expect(example185(function(a: number): boolean { return a > 0 }, -1)).eq(false)
    })
})
