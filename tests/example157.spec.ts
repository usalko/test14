// tests/example157.spec.ts
import { expect } from 'chai'
import { example157 } from '../src/example157'

console.log(`Fundamental(ES6)-Part-I
7. Number to Array of Digits

Write a JavaScript program to convert a specified number into an array of digits.
`)
describe('#example157', () => {
    it(`Input number is 34684 #1`, () => {
        expect(example157(34684)).equal(3 + 4 + 6 + 8 + 4)
    })
})
