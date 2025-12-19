// tests/example392.spec.ts
import { assert, expect } from 'chai'
import { example392 } from '../src/example392'


console.log(`Fundamental(ES6)-Part-II
252. RGB to Color Code

Write a JavaScript program to convert the values of RGB components to a color code. 


    - Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (<<) and Number.prototype.toString(16).
    - Use String.prototype.padStart(6, '0') to get a 6-digit hexadecimal value.
`)

describe('#example392', () => {
    it(`Input arguments are 255, 165, 1 #1`, () => {
        expect(example392(255, 165, 1)).equal("#ffa501")
    })
    it(`Input arguments are 255, 255, 1 #1`, () => {
        expect(example392(255, 255, 1)).equal("#ffff01")
    })
})
