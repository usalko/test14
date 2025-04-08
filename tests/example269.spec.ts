// tests/example269.spec.ts
import { expect } from 'chai'
import { example269 } from '../src/example269'

console.log(`Fundamental(ES6)-Part-I
119. String for Tomorrow's Date

Write a JavaScript program to create tomorrow's date in a string representation.

 - Use new Date() to get the current date.
 - Increment it by one using Date.prototype.getDate() and set the value to the result using Date.prototype.setDate().
 - Use Date.prototype.toISOString() to return a string in yyyy-mm-dd format.

`)

describe('#example269', () => {
    const date = new Date(Date.now() + 1000 * 60 * 60 *24)
    it(`No input arguments #1`, () => {
        expect(example269()).equal(date.toISOString())
    })
    it(`Input argument is true #2`, () => {
        expect(example269(true)).equal(date.toISOString().slice(0, 10))
    })
})
