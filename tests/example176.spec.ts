// tests/example176.spec.ts
import { expect } from 'chai'
import { example176 } from '../src/example176'

console.log(`Fundamental(ES6)-Part-I
26. Check y/yes or n/no in String

Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.
`)
describe('#example176', () => {
    it(`Input string is "y" #1`, () => {
        expect(example176("y")).equal(true)
    })
    it(`Input string is "yes" #1`, () => {
        expect(example176("yes")).equal(true)
    })
    it(`Input string is "n" #1`, () => {
        expect(example176("n")).equal(false)
    })
    it(`Input string is "y" #1`, () => {
        expect(example176("no")).equal(false)
    })
})
