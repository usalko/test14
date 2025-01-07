// tests/example178.spec.ts
import { expect } from 'chai'
import { example178 } from '../src/example178'

console.log(`Fundamental(ES6)-Part-I
28. Measure Function Execution Time

Write a JavaScript program to measure the time a function to execute.
`)
describe('#example178', () => {
    it(`Input string is "y" #1`, () => {
        expect(example178("y")).equal(true)
    })
})
