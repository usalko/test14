// tests/example043.spec.ts
import { expect } from 'chai'
import { example043 } from '../src/example043'

console.log(`
Write a JavaScript program to check from three given numbers (non negative integers)
that two or all of them have the same rightmost digit. 
`)
describe('#example043', () => {
    it(`Input numbers are 234, 435, 544 #1`, () => {
        expect(example043(234, 435, 544)).equal(true)
    })
    it(`Input numbers are 123, 355, 1 #1`, () => {
        expect(example043(123, 355, 1)).equal(false)
    })
    it(`Input numbers are 3, 23, 563 #1`, () => {
        expect(example043(3, 23, 563)).equal(true)
    })
})