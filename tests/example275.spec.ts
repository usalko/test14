// tests/example275.spec.ts
import { expect } from 'chai'
import { example275 } from '../src/example275'

console.log(`Fundamental(ES6)-Part-I
135. Sum of Powers in Range

Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).

 - Use Array.prototype.fill() to create an array of all the numbers in the target range.
 - Use Array.prototype.map() and the exponent operator (**) to raise them to power and Array.prototype.reduce() to add them together.
 - Omit the second argument, power, to use a default power of 2.
 - Omit the third argument, start, to use a default starting value of 1.

`)

describe('#example275', () => {
    it(`Input argument is 10 #1`, () => {
        expect(example275(10)).equal(385)
    })
    it(`Input arguments are 10, 3 #2`, () => {
        expect(example275(10, 3)).equal(3025)
    })
    it(`Input arguments are 10, 3, 5 #3`, () => {
        expect(example275(10, 3, 5)).equal(2925)
    })
})
