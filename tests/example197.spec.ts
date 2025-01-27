// tests/example197.spec.ts
import { expect } from 'chai'
import { example197 } from '../src/example197'

console.log(`Fundamental(ES6)-Part-I
47. Deep Comparison for Equivalence

Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.
`)

describe('#example197', () => {
    it(`Input value 1 is: {k1: {k21: 1, k22: 2}}, input value 2 is: {k1: {k21: 1, k22: 2}} #1`, () => {
        expect(example197({k1: {k21: 1, k22: 2}}, {k1: {k21: 1, k22: 2}})).equal(true)
    })
    it(`Input value 1 is: {k1: {k21: 2, k22: 2}}, input value 2 is: {k1: {k21: 1, k22: 2}} #1`, () => {
        expect(example197({k1: {k21: 2, k22: 2}}, {k1: {k21: 1, k22: 2}})).equal(false)
    })
})
