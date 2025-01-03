// tests/example174.spec.ts
import { expect } from 'chai'
import { example174, example174v2 } from '../src/example174'

console.log(`Fundamental(ES6)-Part-I
24. De-capitalize First Letter of String

Write a JavaScript program to de-capitalize the first letter of a string.
`)
describe('#example174', () => {
    it(`Input string is "Hello world!" #1`, () => {
        expect(example174("Hello world!")).equal("hello world!")
    })
    it(`Input string is "Good buy world!" #2`, () => {
        expect(example174v2("Good buy world!", true)).equal("gOOD BUY WORLD!")
    })
})
