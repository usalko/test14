// tests/example215.spec.ts
import { expect } from 'chai'
import { example215 } from '../src/example215'

console.log(`Fundamental(ES6)-Part-I
65. Add Console Log Colors

Write a JavaScript program to add special characters to text
to print in color on the console (combined with console.log()).
`)

describe('#example215', () => {
    it(`Input input arguments "green", "text" #1`, () => {
        expect(example215("green", "text")).equal("\x1b[32mtext")
    })
})
