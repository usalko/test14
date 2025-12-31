// tests/example396.spec.ts
import { assert, expect } from 'chai'
import { example396 } from '../src/example396'


console.log(`Fundamental(ES6)-Part-II
256. Approximate Equality Check

Write a JavaScript program to check if two given numbers are approximately equal to each other. 

     - Use Math.abs() to compare the absolute difference of the two values to epsilon.
     - Omit the third argument, epsilon, to use a default value of 0.001.
`)

describe('#example396', () => {
    it(`Input arguments are: Math.PI / 2.0, 1.5708 #1`, () => {
        expect(example396(Math.PI / 2.0, 1.5708)).equal(true)
    })
})
