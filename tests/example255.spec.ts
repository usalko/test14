// tests/example255.spec.ts
import { expect } from 'chai'
import { example255 } from '../src/example255'

console.log(`Fundamental(ES6)-Part-I
105. Check if Value is a Number

Write a JavaScript program that returns true if the given value is a number, false otherwise.

 - Use parseFloat() to try to convert n to a number.
 - Use !Number.isNaN() to check if num is a number.
 - Use Number.isFinite() to check if num is finite.
 - Use Number() and the loose equality operator (==) to check if the coercion holds.

`)

describe('#example255', () => {
    it(`Input argument is '200' #1`, () => {
        expect(example255('200')).equal(true)
    })
    it(`Input argument is '10' #1`, () => {
        expect(example255('10')).equal(true)
    })
    it(`Input argument is 'abc' #1`, () => {
        expect(example255('abc')).equal(false)
    })
})
