// tests/example040.spec.ts
import { expect } from 'chai'
import { example040 } from '../src/example040'

console.log(`
Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
    `)
describe('#example040', () => {
    it(`Input number1 is 7. input number2 is 8 #1`, () => {
        expect(example040(7, 8)).equal(true)
    })
    it(`Input number1 is 1. input number2 is 2 #1`, () => {
        expect(example040(1, 2)).equal(false)
    })
    it(`Input number1 is 4. input number2 is 4 #1`, () => {
        expect(example040(4, 4)).equal(true)
    })
    it(`Input number1 is 32. input number2 is 26 #1`, () => {
        expect(example040(32, 24)).equal(true)
    })
})