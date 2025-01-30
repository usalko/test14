// tests/example200.spec.ts
import { expect } from 'chai'
import { example200 } from '../src/example200'

console.log(`Fundamental(ES6)-Part-I
50. Integer to Suffix String with am/pm

Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.
`)

describe('#example200', () => {
    it(`Input integer is: 1 #1`, () => {
        expect(example200(1)).equal('1am')
    })
    it(`Input integer is: 0 #2`, () => {
        expect(example200(0)).equal('12pm')
    })
    it(`Input integer is: 13 #3`, () => {
        expect(example200(13)).equal('1pm')
    })
})
