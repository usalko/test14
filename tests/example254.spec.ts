// tests/example254.spec.ts
import { expect } from 'chai'
import { example254 } from '../src/example254'

console.log(`Fundamental(ES6)-Part-I
104. Conditional Function Application

Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.

 - Return a function expecting a single value, x, that returns the appropriate value based on pred.

`)

describe('#example254', () => {
    it(`Input arguments are 2, (x: any) => x % 2 === 0, (x: any) => x * 2  #1`, () => {
        expect(example254(2, (x: any) => x % 2 === 0, (x: any) => x * 2)).equal(4)
    })
    it(`Input argument are 1, (x: any) => x % 2 === 0, (x: any) => x * 2 #1`, () => {
        expect(example254(1, (x: any) => x % 2 === 0, (x: any) => x * 2)).equal(1)
    })
})
