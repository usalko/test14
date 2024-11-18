// tests/example128.spec.ts
import { expect } from 'chai'
import { example128 } from '../src/example128'

console.log(`
Write a JavaScript program to find the smallest round number not less than a given value. 
Note: A round number is informally considered to be an integer that ends with one or more zeros.
So, 590 is rounder than 592, but 590 is less round than 600.
    `)
describe('#example128', () => {
    it(`Input integer is 592 #1`, () => {
        expect(example128(592)).equal(600)
    })
    it(`Input integer is 2 #1`, () => {
        expect(example128(2)).equal(10)
    })
})