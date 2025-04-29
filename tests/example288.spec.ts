// tests/example288.spec.ts
import { expect } from 'chai'
import { example288 } from '../src/example288'

console.log(`Fundamental(ES6)-Part-I
148. Hash String to Whole Number

Write a JavaScript program to hash the input string into a whole number.

 - Use String.prototype.split('') and Array.prototype.reduce() to create a hash of the input string, utilizing bit shifting.

`)

describe('#example288', () => {
    it(`Input argument is 'name'  #1`, () => {
        expect(example288('name')).equal(-3521204949)
    })
})
