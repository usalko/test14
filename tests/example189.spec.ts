// tests/example189.spec.ts
import { expect } from 'chai'
import { example189 } from '../src/example189'

console.log(`Fundamental(ES6)-Part-I
39. Remove Keys from Object


Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
`)

describe('#example189', () => {
    it(`Input array is [{a: 1}, {a: 0, b: 1}] #1`, () => {
        expect(example189([{a: 1}, {a: 0, b: 1}])).deep.equal([{a: 0, b: 1}, {a: 1}])
    })
})
