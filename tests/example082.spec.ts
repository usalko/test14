// tests/example082.spec.ts
import { expect } from 'chai'
import { example082 } from '../src/example082'

console.log(`
Write a JavaScript program to add two positive integers without carrying.
`)
describe('#example082', () => {
    it(`Input number1 is 34, input number2 is 47  #1`, () => {
        expect(example082(34, 47)).equal(71)
    })
    it(`Input number1 is 2, input number2 is 5  #2`, () => {
        expect(example082(2, 5)).equal(7)
    })
    it(`Input number1 is -2, input number2 is 9  #3`, () => {
        expect(() => example082(-2, 9)).to.throw('Input numbers should be positive')
    })
    it(`Input number1 is 13, input number2 is -5  #3`, () => {
        expect(() => example082(13, -5)).to.throw('Input numbers should be positive')
    })
})