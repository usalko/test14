// tests/example170.spec.ts
import { expect } from 'chai'
import { example170 } from '../src/example170'

console.log(`Fundamental(ES6)-Part-I
20. Expand 3-Digit to 6-Digit Color Code

Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
`)
describe('#example170', () => {
    it(`Input color code is #111 #1`, () => {
        expect(example170("#111")).equal("#010101")
    })
})
