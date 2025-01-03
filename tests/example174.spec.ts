// tests/example174.spec.ts
import { expect } from 'chai'
import { example174 } from '../src/example174'

console.log(`Fundamental(ES6)-Part-I
24. De-capitalize First Letter of String

Write a JavaScript program to de-capitalize the first letter of a string.
`)
describe('#example174', () => {
    it(`Input string is "Hello world!" #1`, () => {
        expect(example174("Hello world!")).equal("hello world!")
    })
})