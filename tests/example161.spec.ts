// tests/example161.spec.ts
import { expect } from 'chai'
import { example161 } from '../src/example161'

console.log(`Fundamental(ES6)-Part-I
11. Generate Random Hexadecimal Color Code

Write a JavaScript program to generate a random hexadecimal color code.
`)
describe('#example161', () => {
    it(`No input data #1`, () => {
        expect(example161()).not.empty
    })
})
