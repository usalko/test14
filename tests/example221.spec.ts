// tests/example221.spec.ts
import { expect } from 'chai'
import { example221 } from '../src/example221'

console.log(`Fundamental(ES6)-Part-I
71. Deep Clone Object

Write a JavaScript program to create a deep clone of an object.
`)

describe('#example221', () => {
    it(`Input input object {a: {b: [6, 10, 100, 10]}}  #1`, () => {
        expect(example221({a: {b: [6, 10, 100, 10]}})).deep.equal({a: {b: [6, 10, 100, 10]}})
    })
})
