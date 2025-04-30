// tests/example289.spec.ts
import { expect } from 'chai'
import { example289 } from '../src/example289'

console.log(`Fundamental(ES6)-Part-I
149. Random Element from Array

Write a JavaScript program to get a random element from an array.

 - Use Math.random() to generate a random number.
 - Multiply it by Array.prototype.length and round it off to the nearest whole number using Math.floor().
 - This method also works with strings.

`)

describe('#example289', () => {
    it(`Input argument is [3, 7, 9, 11]  #1`, () => {
        expect(example289([3, 7, 9, 11])).equal(11)
    })
})
