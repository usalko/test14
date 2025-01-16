// tests/example187.spec.ts
import { expect } from 'chai'
import { example187 } from '../src/example187'

console.log(`Fundamental(ES6)-Part-I
37. Sort Array of Objects by Properties


Write a JavaScript program to get a sorted array of objects ordered by properties and orders.
`)

describe('#example187', () => {
    it(`Input array is [{a: 1}, {a: 0, b: 1}] #1`, () => {
        expect(example187([{a: 1}, {a: 0, b: 1}])).deep.equal([{a: 0, b: 1}, {a: 1}])
    })
})
