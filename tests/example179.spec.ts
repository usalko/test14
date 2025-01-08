// tests/example179.spec.ts
import { expect } from 'chai'
import { example179 } from '../src/example179'

console.log(`Fundamental(ES6)-Part-I
29. Convert Value to Safe Integer

Write a JavaScript program to convert a value to a safe integer.
`)
describe('#example179', () => {
    it(`Input string is "y" #1`, () => {
        expect(example179("y")).equal(true)
    })
})
