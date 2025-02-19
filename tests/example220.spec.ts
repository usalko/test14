// tests/example220.spec.ts
import { expect } from 'chai'
import { example220 } from '../src/example220'

console.log(`Fundamental(ES6)-Part-I
70. Count Value in Array

Write a JavaScript program to count a value in an array.
`)

describe('#example220', () => {
    it(`Input input arguments [6, 10, 100, 10], 10  #1`, () => {
        expect(example220([6, 10, 100, 10], 10)).equal(2)
    })
})
