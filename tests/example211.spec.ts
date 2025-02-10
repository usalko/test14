// tests/example211.spec.ts
import { expect } from 'chai'
import { example211 } from '../src/example211'

console.log(`Fundamental(ES6)-Part-I
61. Cast Value to Array

Write a JavaScript program to cast the provided value as an array if it's not one.
`)

describe('#example211', () => {
    it(`Input value is: 2 #1`, () => {
        expect(example211(2)).deep.equal([2])
    })
    it(`Input value is: {id: '2'} #1`, () => {
        expect(example211({id: '2'})).deep.equal([{id: '2'}])
    })
    it(`Input value is: [2] #1`, () => {
        expect(example211([2])).deep.equal([2])
    })
})
