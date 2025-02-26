// tests/example227.spec.ts
import { expect } from 'chai'
import { example227 } from '../src/example227'

console.log(`Fundamental(ES6)-Part-I
77. Iterate Over Object Properties

Write a JavaScript program to iterate over all the properties of an object, running a callback for each one.
`)

describe('#example227', () => {
    it(`Input arguments are {ke1: 1, key2: 2}, (val: any) => val #1`, () => {
        expect(example227({ke1: 1, key2: 2}, (val: any) => val)).deep.equal([1, 2])
    })
})
