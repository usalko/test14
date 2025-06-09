// tests/example325.spec.ts
import { expect } from 'chai'
import { example325, example325v2 } from '../src/example325'


console.log(`Fundamental(ES6)-Part-I
185. Check If Undefined


Write a JavaScript program that returns true if the specified value is undefined, false otherwise.


 - Use the strict equality operator to check if val is equal to undefined.

`)

describe('#example325', () => {
    it(`Input argument is undefined #1`, () => {
        expect(example325(undefined)).equal(true)
    })
    it(`Input argument is undefined #2`, () => {
        expect(example325(null)).equal(false)
    })
})
