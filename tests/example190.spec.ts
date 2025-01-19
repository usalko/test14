// tests/example190.spec.ts
import { expect } from 'chai'
import { example190 } from '../src/example190'

console.log(`Fundamental(ES6)-Part-I
40. Create Key-Value Pair Array from Object


Write a JavaScript program to create an array of key-value pair arrays from a given object.
`)

describe('#example190', () => {
    it(`Input array is [{a: 1}, {a: 0, b: 1}] #1`, () => {
        expect(example190([{a: 1}, {a: 0, b: 1}])).deep.equal([{a: 0, b: 1}, {a: 1}])
    })
})
